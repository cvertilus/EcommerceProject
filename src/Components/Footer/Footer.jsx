import React from 'react'
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

export default function Footer() {
  return (
    <>
     <Box
      sx={{
        bgcolor: "grey.900",
        color: "grey.300",
        py: 4,
        mt: 8,
        width: '100vw',
        
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* 🔹 Logo + Descripción */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="white" gutterBottom>
              EcommerceStore
            </Typography>
            <Typography variant="body2">
              Tu tienda online de confianza. Comprá fácil, rápido y seguro.
            </Typography>
          </Grid>

          

          {/* 🔹 Redes sociales */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" color="white" gutterBottom>
              Seguinos
            </Typography>
            <Box>
              <IconButton
                color="inherit"
                href="#"
                aria-label="Facebook"
              >
                <Facebook />
              </IconButton>
              <IconButton
                color="inherit"
                href="#"
                aria-label="Twitter"
              >
                <Twitter />
              </IconButton>
              <IconButton
                color="inherit"
                href="#"
                aria-label="Instagram"
              >
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* 🔹 Línea inferior */}
        <Box
          mt={4}
          borderTop={1}
          borderColor="grey.800"
          pt={2}
          textAlign="center"
        >
          <Typography variant="caption" color="grey.500">
            © {new Date().getFullYear()} EcommerceStore. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
      
    </>
  )
}
