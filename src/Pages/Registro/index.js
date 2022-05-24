import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './index.css'

const Register = () => {

    const [userData, setUserData] = useState({ email: '', password: '' })
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)
    const navigate = useNavigate()
   


    const handlerEmail = (event) => {
        const value = event.target.value
        setUserData({ ...userData, 'email': value })
    }

    const handlerPassword = (event) => {
        const value = event.target.value
        setUserData({ ...userData, 'password': value })
    }

    const saveHandlerUser = async () => {
        axios.post(`https://examen-erik.elflacoradiadores.de/user`, userData)
            .then(res => {
                if (res.status === 200) {
                    setSuccess(true)
                    setTimeout(() => navigate("/home"), 2000)
                    window.localStorage.setItem('user',res.data.New_user.email)
                }
            })
            .catch(err => {
                setError(err)
            })
    }

    return (
        <section className='form-login'>
            <h5>Formulario Registro</h5>
            {success && <p>Usuario creado con exito</p>}
            {error && <p>El usuario no pudo ser creado</p>}
            <input className='controls' type="text" name="correo" placeholder='Correo' onChange={handlerEmail} />
            <input className='controls' type="password" name="usuario" placeholder='Contraseña' onChange={handlerPassword} />
            <input className='buttons' type="submit" value="Registrate" onClick={() => saveHandlerUser()} />
            <p><a href="/">Ya tengo una cuenta</a></p>
        </section>
    )
}

export default Register