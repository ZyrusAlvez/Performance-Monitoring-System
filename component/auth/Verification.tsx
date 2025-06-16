"use client";

import {useState} from 'react'

const Login = () => {

  const [code, setCode] = useState<string>("")

  function onSubmit(e: React.FormEvent){
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmit} className='rounded-4xl bg-white w-[400px] py-8 gap-2 flex flex-col items-center'>
      <h1 className='text-4xl font-bold text-blue-700'>Verification</h1>
      <div className='flex flex-col'>
        <h2 className='tracking-widest font-extralight'>ENTER CODE</h2>
        <input className='border px-4 py-2 outline-none' value={code} onChange={(e) => setCode(e.target.value)}/>
      </div>
      <button type="submit" className='bg-blue-700 text-white py-2 w-[40%] mt-4'>Submit</button>
    </form>
  )
}

export default Login