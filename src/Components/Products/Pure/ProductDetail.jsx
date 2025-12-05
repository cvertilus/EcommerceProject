import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardMedia, Box, CardActions, CircularProgress,Rating } from '@mui/material'
import ActionProduct from './ActionProduct';
import { getProductsById } from '../../../services/productsService';

function ProductDetail() {
    const params = useParams();
    const [product, setProduct] = React.useState(null);

    React.useEffect(() => {
        setTimeout(() => {
            getProductsById(params.id)
            .then((data) => {
                setProduct(data);
            })
            .catch((error) => {
                console.error("Error fetching product:", error);
            });
        }, 100);
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


                    <CardActions >
                        <ActionProduct producto={product} />
                    </CardActions>

                </Card>
                </Box>


            ) : (
                <CircularProgress />
            )}
        </>
    )
}



export default ProductDetail
