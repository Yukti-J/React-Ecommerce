import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import AddProduct from './components/AddProduct'
// import ProductsContext from './global/productContext'

function App() {
  return (
   <>
    <Router>
    {/* <Home/> */}
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
      </Routes>
    </Router>
    
   </>
  );
}

export default App;
