import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardMedia, Box, CardActionArea, CircularProgress,Rating } from '@mui/material'
import ActionProduct from './ActionProduct';

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
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "55px",
                    overflow: "hidden",
                    width: "100vw",
                }}>
                <Card sx={{
                    maxWidth: 300,
                    maxHeight: 600,
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                    transition: "0.3s",
                    "&:hover": {
                        boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
                        transform: "scale(1.05)"
                    }
                }}>


                    <CardMedia
                        component="img"
                        image={product.imagen}
                        alt={product.nombre}
                        sx={{
                            objectFit: "cover",
                            height:300
                        }}
                    />
                    <CardHeader
                        title={product.nombre}
                        subheader={`$${product.precio}`}
                        sx={{
                            textAlign: "center",
                            backgroundColor: "#f5f5f5",
                            fontWeight: "bold",
                            marginBottom: "0"
                        }}
                    />

                    <CardContent
                    sx={{
                        height: "auto",
                        overflow: "auto",
                        textAlign: "center",
                        marginBottom: "0",
                        backgroundColor: "#fafafa"
                    }}
                    >
                        {product.descripcion}
                        <Rating name="read-only" value={4}  readOnly/>
                    </CardContent>


                    <CardActionArea >
                        <ActionProduct producto={product} />
                    </CardActionArea>

                </Card>
                </Box>


            ) : (
                <CircularProgress />
            )}
        </>
    )
}



export default ProductDetail
