import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Login/index'
import Registro from './Pages/Registro'
import Home from './Pages/Home/index'




function App() {

  return(
  <div className='App'>
    <main>

    <Routes>
      <Route path='' element={<Login />} />
      <Route path='/registro' element={<Registro/>} />
      <Route path='/home' element={<Home />} />
    </Routes>
    
    </main>
  </div>

  )
  
}

export default App;
