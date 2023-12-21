"use client"
import React ,{useState}from 'react';
import Swal from 'sweetalert2'


import { auth,signInWithEmailAndPassword,onAuthStateChanged } from '../firebase/config';

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    location.href="./Home"
    // ...
  } else {

  }
});

const Login = () => {
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const login = ()=>{
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    Swal.fire({
                title: "Sweet!",
                text: "Login successfully !.",
               
               })
           
       
        window.location.href='./Home'
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire({
            title: 'Error!',
            text: 'Enter Correct Password & Email',
             icon: 'error',
             confirmButtonText: 'Error'
          })
  });
   

  }
 
    
  return (
    <section className="text-gray-600 body-font relative bg-green-300 h-screen">
      {/* <div className='border-2 h-96 '> */}
      <div className="container px-5 py-24 mx-auto rounded-md">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font font-extrabold mb-4 text-green-500">Login</h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-green-500 font-bold">Email</label>
  <input type="email" id="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-400 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm  text-bold text-green-500 font-bold">Passowrd</label>
                <input type="password" id="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-400 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            
            <div className="p-2 w-full">
             <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg" onClick={login}>Login</button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Login;
