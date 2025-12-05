import React from 'react'
import ProductFormUI from '../ProductFromUi/ProductFormUI';
import { validateProducts } from '../../../utils/validateProducts';
import { uploadToImgbb } from '../../../services/uploadImages';
import { createProduct } from '../../../services/productsService';

export default function ProductFormContainer() {
    const [product, setProduct] = React.useState({
        nombre: '',
        precio: '',
        stock: '',
        descripcion: '',
        categoria: '',
    });
    const [loading, setLoading] = React.useState ();
    const [file , setFile] = React.useState (null);
    const [errors, setErrors] = React.useState ({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct ({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading (true);
        setErrors ({});
      

        const newErrors= validateProducts ({...product, file});
        if (Object.keys (newErrors).length > 0) {
            setErrors (newErrors);
            setLoading (false);
            return;
        }

        try{
            const imageUrl = await uploadToImgbb(file)
            const productData = {
                ...product,
                precio: Number (product.precio),
                imagen: imageUrl,
            }

            await createProduct (productData);
            alert ('Producto creado con exito');
            setProduct ({
                nombre: '',
                precio: '',
                stock: '',
                descripcion: '',
                categoria: '',
            });
            setFile (null);
        } catch (error) {
            setErrors ({ General: error.message });
          
        }finally {
            setLoading (false);
        }

    }

    



  return (
    
    <ProductFormUI product={product} errors={errors} loading={loading} onChange={handleChange} onFileChange={setFile} onSubmit={handleSubmit} />
  )
}
