import React from 'react'
import { useAuthContext } from '../../Context/AuthContext/useAuthContext.js'
import { Navigate } from 'react-router-dom';

export default function RutaProtegida({ children }) {
  const {user} = useAuthContext();

  if(!user) {
    return <Navigate to="/" replace />
  }




  return (
    <>
       {children}
      
    </>
  )
   
}
