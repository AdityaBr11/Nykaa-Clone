import React, { useEffect, useState } from "react";
import { Box, Input, Button, Heading, Text, Spinner } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/Auth/action";
import { useToast } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

const Register = () => {
    const toast = useToast()
  const { newUser, loading, status } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmpwd: "",
  });
  const { name, email, password, confirmpwd } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password != confirmpwd) {
      return toast({
        title: 'Nope',
        position:"top-right",
        description: "password is not matching",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
    // console.log(state);
    dispatch(signup(name, email, password));
    setState({ email: "", password: "", displayName: "", confirmpwd: "" });
  };

  useEffect(() => {
    if (status == "signup success") {
         toast({
            title: 'Account created.',
            position:"top-center",
            description: "Signup successfull",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          setTimeout(()=>{
            nav("/login")
          },2000)
    } else if (status == "error") {
        return toast({
            title: 'Error',
            position:"top-right",
            description: "User already exist",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
    }
  }, [status]);


  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <Box bgColor={"#f3f3f3"} p={10}>
      <Box
        w={"26%"}
        m="10rem auto"
        bgColor={"white"}
        p={10}
        justifyContent="center"
        alignItems={"center"}
        textAlign={"center"}
      >
        <Heading mb={5}>Register</Heading>
        <hr />
        <Box
          display={"flex"}
          m={"2rem 1rem"}
          fontSize={16}
          textAlign="center"
          width={"100%"}
        >
          <Text>Register to Earn</Text>&nbsp;
          <Text color={"#d5418e"}>2000 Reward Points!</Text>
        </Box>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            border={"none"}
            bgColor={"#f3f3f3"}
            borderBottom={"1px solid #d5418e"}
            value={name}
            onChange={handleChange}
            isRequired
          />
          &nbsp;
          <Input
            type="email"
            name="email"
            placeholder="Email"
            border={"none"}
            bgColor={"#f3f3f3"}
            borderBottom={"1px solid #d5418e"}
            value={email}
            onChange={handleChange}
            isRequired
            u
          />
          &nbsp;
          <Input
            type="password"
            name="password"
            placeholder="Password"
            border={"none"}
            bgColor={"#f3f3f3"}
            borderBottom={"1px solid #d5418e"}
            value={password}
            onChange={handleChange}
            isRequired
            u
          />
          &nbsp;
          <Input
            type="password"
            name="confirmpwd"
            placeholder="Confirm Password"
            border={"none"}
            bgColor={"#f3f3f3"}
            borderBottom={"1px solid #d5418e"}
            value={confirmpwd}
            onChange={handleChange}
            isRequired
            u
          />
          <br />
          <br />
          <Button
            type="submit"
            bgColor="#d5418e"
            color={"white"}
            w="100%"
            className="hover:bg-[#f1238d]"
          >
            {loading ? (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="lg"
              />
            ) : (
              "REGISTER"
            )}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Register;
