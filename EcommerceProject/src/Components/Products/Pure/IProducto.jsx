import React from 'react'
import { Card, CardHeader, CardMedia, CardContent, CardActionArea,Box } from '@mui/material';



export default function IProducto({ producto, onClick, children }) {


    return (
        <Card sx={{
            maxWidth: 345,
            width: "300px",
            margin: "20px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            transition: "0.3s",
            "&:hover": {
                boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
                transform: "scale(1.05)"
            }

        }}
        
        >
         <Box onClick={onClick} sx={{cursor: "default"}}>
            <CardHeader
                title={producto.nombre}
                subheader={`$${producto.precio}`}
            />
            <CardMedia
                component="img"
                height="194"
                image={producto.imagen}
                alt={producto.nombre}
                sx={{
                    objectFit: "contain",
                    width: "100%",
                    border: "none"
                }}
                
            />
            <CardContent>
                {producto.descripcion}
            </CardContent>
        </Box>

            <CardActionArea>
                {children}
            </CardActionArea>

                       
        </Card>
    )
}
