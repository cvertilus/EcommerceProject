import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardMedia, Box, CardActionArea } from '@mui/material'

function ProductDetail() {
    const params = useParams();
    const [product, setProduct] = React.useState(null);

    React.useEffect(() => {
        setTimeout(() => {
            fetch("/api/productos.json")
                .then(res => res.json())
                .then(data => {
                    const prod = data.find(p => p.id === parseInt(params.id));
                    setProduct(prod);
                })
                .catch(err => console.log(err));
        }, 1000);
    })

    return (
        <>
            {product ? (
                <Card sx={{
                    maxWidth: 600,
                    margin: "40px auto",
                    padding: "5px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                    transition: "0.3s",
                    "&:hover": {
                        boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
                        transform: "scale(1.05)"
                    }
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "20px",
                        width: "50%",
                      
                       
                    }}>
                        <CardHeader
                            title={product.nombre}
                            subheader={`$${product.precio}`}
                        />
                        <CardContent>
                            {product.descripcion}
                        </CardContent>

                    </Box>

                    <CardMedia
                        component="img"
                        height="400"
                        image={product.imagen}
                        alt={product.nombre}
                        sx={{
                            objectFit: "contain",
                            width: "50%",
                            height:"auto"
                        }}
                    />

                   

                </Card>


            ) : (
                <h2>Loading...</h2>
            )}
        </>
    )
}



export default ProductDetail
