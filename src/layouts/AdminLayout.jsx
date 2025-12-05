import { Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
    return (

        <Container>
            <Outlet />
        </Container>

    )
}
