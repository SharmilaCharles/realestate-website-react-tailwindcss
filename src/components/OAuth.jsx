import { getAuth, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import {toast} from 'react-toastify';
import { doc, serverTimestamp, setDoc, getDoc} from 'firebase/firestore'
import {db} from '../firebase'
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
  const navigate = useNavigate()
  async function onGoogleClick() {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup
      (auth,provider)
      const user = result.user
      // console.log(user)

      // Check the user already exist
      const docRef = doc(db,"users", user.uid)
      const docSnap = await getDoc(docRef)
      if (!docSnap.exists()) {
        await setDoc(docRef,{
          name:user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
        
      }
      navigate("/")
    } catch (error) {
      toast.error("Could not authorize with Google ")
      console.log(error)
    }

  }
  return (
    <button type="button" onClick = {onGoogleClick} className='flex items-center 
    justify-center w-full bg-red-500
    text-white px-7 py-3 
    uppercase text-sm font-medium
    hover:bg-red-700 active:bg-red-900 
    shadow-md hover:shadow-lg 
    active:shadow-lg transition duration-150 ease-in-out'> 
        Continue with Google <FcGoogle  className='text-2xl bg-white rounded-full ml-2'/>
    </button>
  )
}
