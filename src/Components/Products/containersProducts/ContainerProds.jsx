import React from 'react'
import ProductsList from '../Pure/ProductsList'

export default function ContainerProds() {
    const [products, setProducts] = React.useState(null)

    React.useEffect(() => {
        setTimeout(() => {
            fetch("/api/productos.json")
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setProducts(data)
                })

                .catch(err => console.log(err));
        }, 2000);
    }, [])

    
    return (
        <>
            {products ? (
                <ProductsList ListaDeProductos={products} />
            ) : (
                <h2>Loading...</h2>
            )}

        </>
    )
}
