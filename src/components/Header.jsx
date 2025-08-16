import { getAuth, onAuthStateChanged, setPersistence } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


export default function Header() {
    const [pageState,setpageState] = useState("sign in")
    const location = useLocation()
    const navigate = useNavigate()
    const auth = getAuth();
    useEffect(()=> {
      onAuthStateChanged(auth,(user)=> {
        if (user) {
          setpageState("Profile")
        } else {
          setpageState("Sign in")
        }
      })
    }
    )
    // console.log(location.pathname)

    function pathMatchRoute(route) {
        if (route === location.pathname) {
            return true
        }
    }
  return ( 
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
    <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
    {/* Logo section */}
    <div>  
    <img src='https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg' 
    className='h-5 cursor-pointer' onClick={()=>navigate("/")} alt='logo'/>
    </div>
    {/* Menu Section */}
    <div>
        <ul className='flex space-x-10'>
            
            <li
  className={`cursor-pointer py-3 text-sm uppercase font-semibold border-b-4 
    ${pathMatchRoute("/") 
      ? "text-black border-b-red-600" 
      : "text-gray-400 border-b-transparent hover:text-black hover:border-b-red-600"
    }`}
  onClick={() => navigate("/")}
>
  Home
</li>

<li
  className={`cursor-pointer py-3 text-sm uppercase font-semibold border-b-4 
    ${pathMatchRoute("/offers") 
      ? "text-black border-b-red-600" 
      : "text-gray-400 border-b-transparent hover:text-black hover:border-b-red-600"
    }`}
  onClick={() => navigate("/offers")}
>
  Offers
</li>

<li
  className={`cursor-pointer py-3 text-sm uppercase font-semibold border-b-4 
    ${(pathMatchRoute("/sign-in") || pathMatchRoute("/profile"))
      ? "text-black border-b-red-600" 
      : "text-gray-400 border-b-transparent hover:text-black hover:border-b-red-600"
    }`}
  onClick={() => navigate("/profile")}
>
  {pageState}
</li>

        </ul>
    </div>
    </header>
    </div>
  )
}
