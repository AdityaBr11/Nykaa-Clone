import React,{useState} from 'react'
import {Box,Input,Button} from '@chakra-ui/react';
const Register=() =>
{
    const [sign,setSign]=useState([]);
    const [input,setInput]=useState({
        email: "",
        password: "",
        phone: 0,
        name: ""
    });
    const handleInputChange=(e) =>
    {

        const {name,value}=e.target;
        setInput({...input,[name]: value})
    }
    const sigin=(e) =>
    {
        e.preventDefault();
        setSign([...sign,input])
        localStorage.setItem("userData",JSON.stringify(sign))
    }
  return (
    <Box mt={'500px'}>
    <h1>Register</h1>
    <form>
        <Input type='text' name='name' onChange={handleInputChange} />
        <Input type='number' name='phone' onChange={handleInputChange} />
        <Input type='email' name='email' onChange={handleInputChange} />
        <Input type='password' name='password' onChange={handleInputChange} />


        <Button onClick={sigin}>login</Button>
    </form>
</Box>
  )
}

export default Register;