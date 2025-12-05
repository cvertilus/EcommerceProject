import React from 'react'
import { Button, Container } from '@mui/material';
import { useCart } from '../../../Context/CartContext/useCart';

export default function ActionProduct({ producto }) {
    const iniciar = producto.quantity || 0;
    const [count, setCount] = React.useState(iniciar);
    const { addToCart, deleteFromCart } = useCart();

    const AgregarProducto = (producto) => {

        setCount(count + 1)
        addToCart(producto);
    }

    const QuitarProducto = (producto) => {
        if (count > 0) {
            setCount(count - 1)
            deleteFromCart(producto);
        } else {
            setCount(0)
        }
    }

    return (
        <>
            <Container>


                <Button onClick={() => { QuitarProducto(producto) }} sx={{ fontWeight: "Bold", fontSize: "20px" }}>
                    -
                </Button>
                <span style={{ margin: "0 10px" }}> {count} </span>
                <Button onClick={() => { AgregarProducto(producto) }} sx={{ fontWeight: "Bold", fontSize: "20px" }}> + </Button>
            </Container>
        </>
    )
}
