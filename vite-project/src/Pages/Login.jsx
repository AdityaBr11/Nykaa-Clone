import React,{useState} from 'react'
import
{
    Box,Heading,Input,Button,Text
} from '@chakra-ui/react';
import {CloseIcon} from '@chakra-ui/icons';
var data=JSON.parse(localStorage.getItem("userData"));

const Loginpage=() =>
{
    const [verfiy,setVerfiy]=useState([]);
    const [input,setInput]=useState({
        email: "",
        password: "",
        phone: 0,
        name: ""
    });

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
    const handleInputChange=(e) =>
    {

        const {name,value}=e.target;
        setInput({...input,[name]: value})
        setInput("")
    }
    const sigin=(e) =>
    {
        e.preventDefault();
        setSign([...sign,input])
        localStorage.setItem("userData",JSON.stringify(sign))

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
                setVerfiy([...verfiy,1])

            } else if(e.email!==input1)
            {
                setVerfiy([])

            }
        })
    }
    const checkData=(e) =>
    {
        setInput1(e.target.value)
    }
    console.log(input1)
    console.log(input,sign)
    console.log(verfiy)
    return (
        <Box mt={'150px'} mb={10} bgColor={'#f3f3f3'} p={10}>



            <Box>
                <Box w={'26%'} m='auto' bgColor={'white'} p={10} justifyContent='center' alignItems={'center'} textAlign={'center'} >
                <Heading mb={5}>LOGIN/REGISTER</Heading> <hr /> &nbsp;
                    <Input type="email" bgColor={'#f3f3f3'} value={input1} onChange={checkData} />
                    <Button onClick={Equal} bgColor="#d5418e" color={'white'} w='100%' m={'3rem 0'}>proceed</Button>
                </Box>
                {verfiy.length>0 ? <Box w={'26%'} m='auto' bgColor={'white'} p={10} justifyContent='center' alignItems={'center'} textAlign={'center'}>
                    <Heading mb={5}>login</Heading>
                    <form>
                        <Input type='email' name='email' bgColor={'#f3f3f3'} onChange={loginValue} />
                        &nbsp;
                        <Input type='password' name='password' bgColor={'#f3f3f3'} onChange={loginValue} />
                        <Button onClick={userlogin} bgColor="#d5418e" color={'white'} w='100%' m={'3rem 0'}>login</Button>
                    </form>
                </Box>
                    :<Box>
                        <Text> register here</Text>
                        </Box>
                    }

            </Box>
        </Box>
    )
}

export default Loginpage;