import React,{useState} from 'react'
import
{
    Box,Container,Heading,FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,Input,Button
} from '@chakra-ui/react';
import {CloseIcon} from '@chakra-ui/icons';
var data=JSON.parse(localStorage.getItem("userData"));

const Loginpage=() =>
{
    const [verfiy,setVerfiy]=useState();
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
    }
    const sigin=(e) =>
    {
        e.preventDefault();
        setSign([...sign,input])
        localStorage.setItem("userData",JSON.stringify(sign))
        //window.location.reload();
    }
   
    const logout=() =>
    {
        localStorage.setItem("login",false)
        localStorage.setItem("SiginData",JSON.stringify({}))
    }
    //const isError=input===''
    //const isVaild=(input==='@gmail.com'||input==='@yahoo.com'||input==='@ourkut.com'||input===" ")
    const [input1,setInput1]=useState("");
    

    const Equal=() =>
    {
        data.map((e) =>
        {
            if(e.email===input1)
            {
             setVerfiy(true)
               
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
console.log(input1)
console.log(input,sign)
    console.log(verfiy)
    return (
        <Box mt={'150px'} mb={10} bgColor={'#f3f3f3'} p={10}>
           


<Box>
<Box mt={'200px'} >
          <Input type="email" value={input1}  onChange={checkData} />
          <Button onClick={Equal}>proceed</Button>
    </Box>   
          { verfiy===true? <Box>
                <h1>login</h1>
                <form>
                    <Input  type='email' name='email' onChange={loginValue} />
                    <Input  type='password' name='password' onChange={loginValue} />
                    <Button onClick={userlogin}>login</Button>
                </form>
            </Box>
:
            <Box>
                <h1>Register</h1>
                <form>
                    <Input  type='text' name='name' onChange={handleInputChange} />
                    <Input  type='number' name='phone' onChange={handleInputChange} />
                    <Input  type='email' name='email' onChange={handleInputChange} />
                    <Input  type='password' name='password' onChange={handleInputChange} />


                    <Button onClick={sigin}>sign-up</Button>
                </form>
            </Box>}
       
            </Box>
            </Box>
    )
}

export default Loginpage;