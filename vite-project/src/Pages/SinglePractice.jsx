import React from 'react'
import { useParams } from 'react-router-dom'

const SinglePractice = () => {
  const param=useParams()
  console.log(param);
  return (
    <div className='mt-40 w-[95%] mx-auto mb-10'>
      <h1>ID:{param.id}</h1>
    </div>
  )
}

export default SinglePractice
