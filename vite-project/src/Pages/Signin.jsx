import {Box, Button,Input} from '@chakra-ui/react';
import React, {useState} from 'react'
import {Link,Navigate} from 'react-router-dom';
var verfiy=localStorage.getItem('verfiy')
var data=JSON.parse(localStorage.getItem("userData"));
const Signin=() =>
{
    const [input1,setInput1]=useState("");
    

    const Equal=() =>
    {
        data.map((e) =>
        {
            if(e.email===input1)
            {
                alert("jao yha se");
               
            } else if(e.email!==input1)
            {
               
            }
        })
    }
    const checkData=(e) =>
    {
      setInput1(e.target.value)  
    }
   
  return (
      <Box mt={'200px'}>
          <Input type="email"  onChange={checkData} />
          <Button onClick={Equal}>proceed</Button>
    </Box>
  )
}

export default Signin;