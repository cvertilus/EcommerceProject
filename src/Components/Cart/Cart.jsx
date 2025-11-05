import React from 'react'
import { useCart } from '../../Context/useCart'
import IProducto from '../Products/Pure/IProducto';
import ActionProduct from '../Products/Pure/ActionProduct';
import { Box, Button } from '@mui/material';

export default function Cart() {
    const { cart, clearCart, totalPrice, checkout } = useCart();

    return (
        <>
            <Box sx={{
                marginTop: "50px"
                , textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"

            }}>
                <h2>Shopping Cart</h2>
                {cart.length === 0 ? (
                    <>
                        <p>Carrito Vacio.</p>
                        <Button variant="contained" color="success" href='/home'>
                            HOME
                        </Button>

                    </>

                ) : (
                    <>

                        {cart.map((item) => (
                            <IProducto key={item.id} producto={item} >
                                <ActionProduct producto={item} />
                            </IProducto>
                        ))}

                        <h3>Precio Total: ${totalPrice()}</h3>
                        <Box sx={{
                            marginTop: "10px",
                            display: "flex",
                            justifyItems: "center",
                            justifyContent: "space-between",
                            gap: "10px"
                        }}>
                            <Button variant="contained" color="warning" onClick={clearCart} sx={{marginLeft:"10px"}}>
                                vaciar Carrito
                            </Button>

                            <Button variant="contained" color="success" sx={{ marginRight: "10px" }} onClick={checkout}>
                                Comprar Ahora
                            </Button>
                        </Box>

                    </>
                )}
            </Box>
        </>
    )
}
