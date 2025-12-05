import React from 'react'
import ProductsList from '../Pure/ProductsList'
import { CircularProgress } from '@mui/material'
import { getProducts } from '../../../services/productsService'
import { useParams } from 'react-router-dom'

export default function ContainerProds() {
    const [products, setProducts] = React.useState(null)
    const {category }= useParams(); // Puedes cambiar esto para filtrar por categoría si es necesario

    React.useEffect(() => {
        getProducts(category)
            .then((data) => {
                setProducts(data)
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, [category])


    return (
        <>
            {products ? (
                <ProductsList ListaDeProductos={products} />
            ) : (
                <CircularProgress />
            )}

        </>
    )
}
