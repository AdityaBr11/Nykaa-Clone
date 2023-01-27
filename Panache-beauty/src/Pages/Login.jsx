import React, { useEffect, useState } from "react";
import { Spinner, useToast } from "@chakra-ui/react";
import { Box, Heading, Input, Button, Text } from "@chakra-ui/react";
//import {CloseIcon} from '@chakra-ui/icons';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/Auth/action";

const Loginpage = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;
  const nav = useNavigate();
  const toast = useToast()

  const { currentUser, loading, status } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      toast({
        title: 'Login',
        position:"top-center",
        description: "login successfull",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      setTimeout(()=>{
        nav("/")
      },2000)
    }
    if(status===false){
        toast({
            title: 'Login',
            position:"top-center",
            description: "Wrong Crediantial",
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
    }
  }, [currentUser, nav,status]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch(login(email,password))
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <Box bgColor={"#f3f3f3"} p={10}>
      <Box mt={"150px"}>
        <Box
          w={"26%"}
          m="auto"
          bgColor={"white"}
          p={10}
          justifyContent="center"
          alignItems={"center"}
          textAlign={"center"}
        >
          <Heading mb={5} fontSize={18}>
            login
          </Heading>
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Enter Email Address"
              bgColor={"#f3f3f3"}
              name="email"
              required
              value={email}
              onChange={handleChange}
            />
            &nbsp;
            <Input
             type="password"
              placeholder="Enter Password"
              bgColor={"#f3f3f3"}
              name="password"
              required
              value={password}
              onChange={handleChange}
            />
            <Button
              bgColor="#d5418e"
              color={"white"}
              w="100%"
              m={"3rem 0"}
              type="submit"
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
              "Procced"
            )}
            </Button>
          </form>
          <Text>
            If don't have Account with us{" "}
            <Link to="/register" style={{ color: "#d5418e" }}>
              Click Here
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Loginpage;
