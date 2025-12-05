import React, { useState } from 'react'
import { CartContext } from './CartContext'


export default function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (producto) => {
        setCart((prevCart) => {
            const eProduct = prevCart.find((item) => item.id === producto.id)
            if (eProduct) {
                return prevCart.map((item) => item.id === producto.id ? { ...item, quantity: item.quantity + 1 } : item)
            }
            return [...prevCart, { ...producto, quantity: 1 }]
        })
    }


    const deleteFromCart = (producto) => {
        setCart((prevCart) => {
            const eProduct = prevCart.find((item) => item.id === producto.id);

            if (!eProduct) return prevCart; // si no existe, no hace nada

            if (eProduct.quantity > 1) {
                // si hay más de uno, resta 1 a la cantidad
                return prevCart.map((item) =>
                    item.id === producto.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            } else {
                // si solo queda uno, lo elimina completamente
                return prevCart.filter((item) => item.id !== producto.id);
            }
        });
    };


    const clearCart = () => {
        setCart([])

    }

    const totalProducto = () => {
        return cart.reduce((total, item) => total + item.quantity, 0)

    }


    const totalPrice = () => {
        return cart.reduce((total, item) => total + item.precio * item.quantity, 0)

    }

    const checkout = () => {
        if (cart.length === 0) {
          alert("El carrito está vacío 🛒");
          return;
        }
      
        // Crear resumen de la compra
        const resumen = cart
          .map(
            (item) =>
              `${item.nombre} x${item.quantity} = $${(item.precio * item.quantity).toFixed(2)}`
          )
          .join("\n");
      
        // Calcular total
        const total = cart
          .reduce((sum, item) => sum + item.precio * item.quantity, 0)
          .toFixed(2);
      
        // Mostrar confirmación
        const confirmacion = window.confirm(
          `🧾 Resumen de tu compra:\n\n${resumen}\n\nTotal: $${total}\n\n¿Desea finalizar la compra?`
        );
      
        if (confirmacion) {
          clearCart();
          alert("✅ ¡Compra finalizada con éxito!");
        } else {
          alert("❌ Compra cancelada.");
        }
      };


    const value = {
        cart,
        addToCart,
        deleteFromCart,
        clearCart,
        totalProducto,
        totalPrice,
        checkout
    }



    return (

        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
