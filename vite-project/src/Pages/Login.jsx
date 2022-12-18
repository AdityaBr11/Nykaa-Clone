import React,{useState} from 'react';
import { useToast } from '@chakra-ui/react'
import
{
    Box,Heading,Input,Button,Text
} from '@chakra-ui/react';
//import {CloseIcon} from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
var data=JSON.parse(localStorage.getItem("userData"));

const Loginpage=() =>
{
    const [verfiy,setVerfiy]=useState(false);
    const [input,setInput]=useState({
        email: "",
        password: "",
        phone: 0,
        name: ""
    });
    const [notify,SetNotify]=useState("");
    const [login,setLogin]=useState({});
    const [sign,setSign]=useState([]);
    const [logindata,setLogindata]=useState({email: "",password: ""})
    const userlogin=(e) =>
    {
        e.preventDefault();
        setLogin(logindata)
        sign.map((el) =>
        {
            if(el.email===login.email&&el.password===login.password)
            {
                localStorage.setItem("SiginData",JSON.stringify(logindata))
                localStorage.setItem("login",true)
            } else if(el.email!==login.email||el.password!==login.password)
            {
                localStorage.setItem("login",false)
            }
        })

    }
    const loginValue=(e) =>
    {
        const {name,value}=e.target;
        setLogindata({...input,[name]: value})
    }
  
    const logout=() =>
    {
        localStorage.setItem("login",false)
        localStorage.setItem("SiginData",JSON.stringify({}))
    }

    const [input1,setInput1]=useState("");


    const Equal=() =>
    {
        data.map((e) =>
        {
            if(e.email===input1)
            {
                setVerfiy([true])

            } else if(e.email!==input1)
            {
                setVerfiy(false)
               

            }
        })
    }
    const checkData=(e) =>
    {
        setInput1(e.target.value)
    }
    const toast=useToast();
    console.log(input1)
    console.log(input,sign)
    console.log(verfiy)
    return (
        <Box   bgColor={'#f3f3f3'} p={10}>

            <Box mt={'150px'}>
                {verfiy? <Box w={'26%'} m='auto' bgColor={'white'} p={10} justifyContent='center' alignItems={'center'} textAlign={'center'}>
                    <Heading mb={5} fontSize={18}>login</Heading>
                    <form>
                        <Input type='email' name='email' placeholder='Enter Email Address' bgColor={'#f3f3f3'} onChange={loginValue}  isRequired />
                        &nbsp;
                        <Input type='password' name='password' placeholder='Enter Password' bgColor={'#f3f3f3'} onChange={loginValue} isRequired />
                        <Button onClick={userlogin} bgColor="#d5418e" color={'white'} w='100%' m={'3rem 0'}>login</Button>
                    </form>
                </Box>
                    : <Box w={'26%'} m='auto' bgColor={'white'} p={10} justifyContent='center' alignItems={'center'} textAlign={'center'} >
                    <Heading mb={5} fontSize={18}>LOGIN/REGISTER</Heading> <hr /> &nbsp;
                        <Input type="email" bgColor={'#f3f3f3'} placeholder='Enter Email Address' value={input1} onChange={checkData} />
                        <Button onClick={Equal} bgColor="#d5418e" color={'white'} w='100%' m={'3rem 0'}>proceed</Button>
                        <br />
                        <Text>If don't have Account with us  <Link to='/register' style={{color:'#d5418e' }}>Click Here</Link></Text>
                    </Box>
                    }

            </Box>
        </Box>
    )
}

export default Loginpage;