import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
   <>
    <NavBar/>
    <Container>
        <Outlet />
    </Container>
   </>
  )
}
