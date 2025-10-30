import React from 'react'
import { useCart } from '../../Context/useCart'
import IProducto from '../Products/Pure/IProducto';
import ActionProduct from '../Products/Pure/ActionProduct';
import { Button } from '@mui/material';

export default function Cart() {
    const { cart, clearCart, totalPrice, checkout } = useCart();

    return (
        <>
            <div style={{ marginTop: "80px", padding: "20px" }}>
                <h2>Shopping Cart</h2>
                {cart.length === 0 ? (
                    <p>Carrito Vacio.</p>
                ) : (
                    <>

                        {cart.map((item) => (
                            <IProducto key={item.id} producto={item} >
                                <ActionProduct producto={item} />
                            </IProducto>
                        ))}

                        <h3>Precio Total: ${totalPrice()}</h3>
                        <Button variant="contained" color="warning" onClick={clearCart}>
                            vaciar Carrito
                        </Button>

                        <Button variant="contained" color="success" style={{ marginLeft: "10px" }} onClick={checkout}>
                            Comprar Ahora
                        </Button>

                    </>
                )}
            </div>
        </>
    )
}
