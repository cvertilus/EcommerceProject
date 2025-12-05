import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../Context/AuthContext/useAuthContext.js';
import { Container } from '@mui/material';

export default function Login() {

    const [useForm, setUseForm] = React.useState({name:"", password:""})
    const {user, login } = useAuthContext();
    const navigate = useNavigate();
    
    if(user) {
        navigate("/admin/alta-productos", {replace:true})
    }

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setUseForm({...useForm, [name]: value})


    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const success = login(useForm.name, useForm.password);
        if(success) {
            navigate("/admin/alta-productos", {replace:true})
        } else {
            alert (" Credenciales invalidas ")
            setUseForm({name:"", password:""})
        }
    }



  return (
    
    <>
    <Container>

        <form onSubmit={handleSubmit}>
        <h2> Iniciar Sesion</h2>
        <div>
            <label> Nombre de Usuario:</label>
            <input type="text" name="name" value={useForm.name} onChange={handleChange} />
        </div>
        <div>
            <label> Contraseña:</label>
            <input type="password"  name="password" value={useForm.password} onChange={handleChange} />
        </div>
        <button type="submit"> Ingresar </button>

        </form>
    </Container>

    </>
  )
}
