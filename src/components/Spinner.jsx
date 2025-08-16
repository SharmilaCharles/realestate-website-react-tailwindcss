import React from 'react'

// https://loading.io

export default function Spinner() {
  return (
    <div className='bg-slate bg-opacity-50 
    flex items-center justify-center fixed left-0
    right-0 bottom-0 top-0
    z-50'>
        <div> 
            <img src="/assets/spinner.svg" alt='Loading...' className='h-24' />
        </div>
    </div>
  )
}
