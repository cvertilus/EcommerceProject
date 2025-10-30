import React from 'react'
import PropTypes from 'prop-types'
import { List,ListItem,Card,CardContent,CardHeader,CardMedia} from '@mui/material'
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
        <List sx={{
            marginTop:"20px"
        }}>
            {ListaDeProductos.map((producto) => (
                
                <IProducto key={producto.id} producto={producto} onClick = {() => {handleProductClick(producto.id)}}  >
                <ActionProduct producto={producto} />
                </IProducto>

                

            ))}
        </List>
    </>
  )
}

ProductsList.propTypes = {}

export default ProductsList
