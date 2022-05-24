import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()
    
    useEffect(() => {
        const token = window.localStorage.getItem('token')
        const user = window.localStorage.getItem('user')

        const redirectFunction = () => navigate('/')
    
        if(!token && !user){
            redirectFunction()
        }
        
    }, [])

    const logOut = () => {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('user')
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