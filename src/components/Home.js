import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import {Products} from './Products'
import {auth} from '../config/config'
import { useNavigate } from 'react-router-dom'
import firebase from 'firebase/compat/app';
// import { ProductsContext, ProductsContextProvider } from '../global/productContext';
import { db } from '../config/config';


export default function Home() {
    const navigate = useNavigate();
    // const user = firebase.auth().currentUser;
    

    function GetUser() {
        const [user,setUser] = useState(null);

        useEffect(() => {
            // forcing user to signup
            auth.onAuthStateChanged(user => {
                if (!user) {
                    navigate.push('/login');
                }
            })
        })
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                db.collection('users').doc(user.uid).get().then(snapshot=>{
                    setUser(snapshot.data().Name.split(" ")[0]);
                })     
            }else{
                setUser(null);
            }
        })
    },[])
    return user;
    }
    const user = GetUser();
     console.log(user);
  return (
    <>
        <Navbar user={user}/>
        <Products/>
        {/* <ProductsContextProvider/> */}
    </>
    
  )
}
