import { Box, Typography, Container, TextField, Button } from '@mui/material'
import React from 'react'


export default function ProductFormUI({
    product, errors, loading, onChange, onFileChange, onSubmit
}) {

    return (
        <>

        

        
            <Container >
                <form onSubmit={onSubmit} style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "26px" }}>
                    <Typography variant="h2">
                        Agregar Product
                    </Typography>
                    <Box sx={{ background: "white", display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "500px", gap: "15px", paddingTop: "15px" }}>
                        <TextField id="standard-basic" name="nombre" label="Nombre" variant="standard" value={product.nombre} onChange={onChange} type='text' sx={{ color: "black" }} error={Boolean(errors.nombre)} helperText={errors.nombre} />

                        <TextField id="Standard-basid" name="precio" label="Precio" variant="standard" value={product.precio} onChange={onChange} type="number" sx={{}} error={Boolean(errors.precio)} helperText={errors.precio} />

                        <TextField id="Standard-basid" name="stock" label="Stock" variant="standard" value={product.stock} onChange={onChange} type="number" sx={{}} error={Boolean(errors.stock)} helperText={errors.stock} />

                        <TextField id="standard-basic" name="descripcion" label="Descripcion" variant="standard" value={product.descripcion} onChange={onChange} type='text' sx={{}} error={Boolean(errors.descripcion)} helperText={errors.descripcion} />

                        <TextField id="standard-basic" name="categoria" label="Categoria" variant="standard" value={product.categoria} onChange={onChange} type='text' sx={{}} error={Boolean(errors.categoria)} helperText={errors.categoria} />

                        <TextField id="standard-basic" name="imagen" label="Imagen" variant="standard" onChange={(e) => onFileChange(e.target.files?.[0] ?? null)} type='file' sx={{ background: "white" }} error={Boolean(errors.file)} helperText={errors.file} />

                    </Box>
                    <Button type="submit" variant="contained" disabled={loading} sx={{
                        "&.Mui-disabled": {
                            backgroundColor: "#bdbdbd",
                            color: "white"
                        }
                    }}>
                        {loading ? "Cargando..." : "Agregar Producto"}
                    </Button>

                </form>

            </Container >

        </>
    )

}



