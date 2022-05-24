import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [userData, setUserData] = useState({ email: '', password: '' })
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

    const postLogin = () => {
        axios.post(`http://localhost:8080/auth/login`, userData)
        .then(res => {
            if(res.data){
                console.log(res.data)
                window.localStorage.setItem('token', res.data.token)
                navigate('/home')
            }
        })
        .catch(e => {
            setError(e)
        })
    }

    return (
        <div className="App">
            <section className='form-login'>
                <h5>Formulario Login</h5>
                {error && <p>Correo o contraseña invalida</p>} 
                <input className='controls' type="text" name="correo" placeholder='Correo' onChange={handlerEmail} />
                <input className='controls' type="password" name="usuario" placeholder='Contraseña' onChange={handlerPassword} />
                <input className='buttons' type="submit" value="Ingresar" onClick={postLogin} />
                <p><a href="/registro">Registrate</a></p>
            </section>
        </div>

    );
}

export default Login