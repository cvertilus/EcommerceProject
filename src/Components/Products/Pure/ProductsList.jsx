import React from 'react'
import PropTypes from 'prop-types'
import { Box,} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import IProducto from './IProducto';
import ActionProduct from './ActionProduct';

function ProductsList({ListaDeProductos}) {
    const navigate = useNavigate();

    const handleProductClick = (id) => {
        navigate(`/products/${id}`);
    }


  return (
    <>
        <Box display="grid" marginTop="50px" gridTemplateColumns="repeat(3,1fr)" gap="2">
            {ListaDeProductos.map((producto) => (
                
                
                <IProducto key={producto.id} producto={producto} onClick = {() => {handleProductClick(producto.id)}}  >
                <ActionProduct producto={producto} />
                </IProducto>
                
                

            ))}
        </Box>
    </>
  )
}

ProductsList.propTypes = {}

export default ProductsList
