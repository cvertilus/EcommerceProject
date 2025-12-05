import React from 'react'


import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import InfoIcon from '@mui/icons-material/Info';

import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

import ContactMailIcon from '@mui/icons-material/ContactMail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Toolbar, Typography, Button, } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext/useCart';

export default function NavBar() {
    const {totalProducto} =  useCart();


    const menuitems = [
        { text: "Home", icon: <HomeIcon />, path: "/home" },
        { text: "Products", icon: <StoreIcon />, path: "/products" },
        { text: "About", icon: <InfoIcon />, path: "/about" },
        { text: "Contact", icon: <ContactMailIcon />, path: "/contact" },
        {
            text: "Cart", icon: <Badge badgeContent={totalProducto()} color="success">
                <ShoppingCartIcon />
            </Badge>, path: "/cart"
        }
    ]


    return (
        <>
            <AppBar position="fixed" >
                <Toolbar sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Typography variant="h6" >
                        My E-Commerce Site
                    </Typography>


                    {menuitems.map((item, index) => (
                        <Button key={index} color="inherit" startIcon={item.icon} component={Link} to={item.path} sx={{
                            margin: "5px",
                            padding: "10px",
                            textAling: "center",
                            flexDirection: "column",
                            display: "flex",
                            fontSize: "12px",
                            fontWeight: "bold",
                            "&:hover": {
                                backgroundColor: "white",
                                color: "black",
                                transform: "scale(1.1)",
                                transition: "all 0.3s ease-in-out"
                            }

                        }}>
                            {item.text}
                        </Button>
                    ))}
                </Toolbar>
            </AppBar>
        </>
    )
}
