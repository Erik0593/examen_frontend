import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()
    
    useEffect(() => {
        const token = window.localStorage.getItem('token')

        const redirectFunction = () => navigate('/')
    
        if(!token){
            redirectFunction()
        }
        
    }, [])

    const logOut = () => {
        window.localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <div>
            <h1>
                Inicio de sesion Completada
            </h1>
            <button onClick={() => {logOut()}}>Log Out</button>
        </div>
    )
}

export default Home