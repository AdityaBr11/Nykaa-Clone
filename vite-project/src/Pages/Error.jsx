import React from 'react'
import error from '../assets/error.gif'
import { Link } from 'react-router-dom'
import {BiError,BiArrowBack} from 'react-icons/bi'
import {GrHomeRounded} from 'react-icons/gr'

const Error = () => {
  return (
    <div className='h-[400px] w-full mb-32'>
      <div className='mt-[10%]'>
      <div className=' w-[20%] mx-auto animate-bounce border-b-2 border-gray-500'>
      <img className='h-[30%]' src={error} alt="" />
      </div>
      <h1 className='text-3xl font-bold flex justify-center items-center text-slate-600 animate-pulse gap-1'> <span><BiError color='red' className='mt-1'/></span> <span>404 Error ! this page is not found</span></h1>
      <Link to={'/'}>
      <h1 className=' w-[3%] mx-auto text-center text-2xl mt-3 opacity-[0.5] cursor-pointer'><GrHomeRounded  color='gray'/> </h1>
      </Link>
      </div>
    </div>
  )
}

export default Error
