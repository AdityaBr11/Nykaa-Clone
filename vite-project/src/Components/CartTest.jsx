import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItem } from '../redux/products/actions';

const CartTest = () => {
  const state={
    id:'',
  }
  const click=()=>{
    this.state({id})
  }

  const [data,setData]=useState([])

  useEffect(()=>{
    axios.get('https://nykaa-data-base.vercel.app/cart').then((res)=>{
      setData(res.data)
    })
    
  },[])
  console.log(data)
 
  return (
    <div className='mt-32 text-center mb-10'>
      <h1>CartDemoPage</h1>
      <div className='w-[60%] mx-auto mt-6'>
        {
          data.map((e)=>(
            <div key={e.id} className="border border-red-400">
              <img className='w-[10%]' src={e.image} alt="" />
              <h1>{e.title}--{e.id}</h1>
              <button onClick={click}>Delete</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default CartTest

