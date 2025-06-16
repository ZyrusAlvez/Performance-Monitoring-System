"use client";

import {useState} from 'react'

const Login = () => {

  const [credentials, setCredentials] = useState<{password: string, password2: string}>({
    password: "",
    password2: ""
  })

  function onSubmit(e: React.FormEvent){
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmit} className='rounded-4xl bg-white w-[400px] py-8 gap-2 flex flex-col items-center'>
      <h1 className='text-4xl font-bold text-blue-700'>Change Password</h1>
      <div className='flex flex-col'>
        <h2 className='tracking-widest font-extralight'>NEW PASSWORD</h2>
        <input className='border px-4 py-2 outline-none' value={credentials.password} onChange={(e) => setCredentials((prev) => ({...prev, password: e.target.value}))}/>
        <h2 className='tracking-widest font-extralight mt-4'>RE-ENTER NEW PASSWORD</h2>
        <input className='border px-4 py-2 outline-none' value={credentials.password2} onChange={(e) => setCredentials((prev) => ({...prev, password2: e.target.value}))}/>
      </div>
      <button type="submit" className='bg-blue-700 text-white py-2 w-[40%] mt-4'>Save</button>
    </form>
  )
}

export default Login