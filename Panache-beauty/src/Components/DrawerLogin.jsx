import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Box,
  Select,
  Flex,
  Text,
  Heading,
  Center,
  Button,
  Image,
  useToast,
} from "@chakra-ui/react";
import { BsArrowLeft } from "react-icons/bs";
import { RiDeleteBin6Line, RiCoupon2Line } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProducts,
  getCartItem,
  updateProductInCart,
} from "../redux/products/actions";
import Drawers from "./DrawerNologin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DrawerLogin = ({ verfiy, discount }) => {
  const usetoast = useToast();
  const [data, setData] = useState([]);
  const cartItem = useSelector((store) => store.productsReducer.cart);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    dispatch(getCartItem());
  }, [dispatch]);

  // console.log(cartItem, "carttttttt");
  // console.log("x",totalPrice)
  const sum = cartItem.reduce((result, item) => {
    return result + item.price * item.quantity;
  }, 0);
  const tp = sum;
  // console.log("total", tp);

  const handleDel = (id) => {
    dispatch(deleteProducts(id))
      .then(() => dispatch(getCartItem()))
      .then(() =>
        usetoast({
          title: "Cart",
          description: "Item removed from cart!",
          status: "error",
          duration: 2000,
          position: "top-center",
          isClosable: true,
        })
      );
  };
  const addQuantity = (id, quantity) => {
    let qty = quantity + 1;
    dispatch(updateProductInCart(id, qty))
      .then(() => dispatch(getCartItem()))
      .then(() =>
        usetoast({
          title: "Cart",
          description: "Quantity increases",
          status: "success",
          duration: 2000,
          position: "top-right",
          isClosable: true,
        })
      );
  };

  const subQuantity = (id, quantity) => {
    let qty = quantity - 1;
    dispatch(updateProductInCart(id, qty))
      .then(() => dispatch(getCartItem()))
      .then(() =>
        usetoast({
          title: "Cart",
          description: "Quantity decreases",
          status: "error",
          duration: 2000,
          position: "top-center",
          isClosable: true,
        })
      );
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <ToastContainer />
      <Button
        onClick={onOpen}
        bgColor="transparent"
        _hover={{ bgColor: "transparent" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.5 7.2H16.2V6.9C16.3 4.5 14.4 2.5 12 2.5C9.6 2.6 7.8 4.5 7.8 6.9V7.2H3.5C2.9 7.2 2.5 7.6 2.5 8.2V16.4C2.5 19.2 4.7 21.4 7.5 21.4H16.5C19.3 21.4 21.5 19.2 21.5 16.4V8.2C21.5 7.7 21.1 7.2 20.5 7.2ZM9.3 6.9C9.3 5.4 10.5 4.1 12 4C13.5 4.1 14.7 5.4 14.7 6.9V7.2H9.3V6.9ZM20 16.5C20 18.4 18.4 20 16.5 20H7.5C5.6 20 4 18.4 4 16.5V8.7H7.8V10.7C7.6 10.9 7.5 11.2 7.5 11.4C7.5 12 8 12.4 8.5 12.4C9 12.4 9.5 11.9 9.5 11.4C9.5 11.1 9.4 10.9 9.2 10.7V8.7H14.6V10.6C14.4 10.8 14.3 11.1 14.3 11.4C14.3 12 14.7 12.5 15.3 12.5C15.9 12.5 16.4 12.1 16.4 11.5C16.4 11.2 16.3 11 16.1 10.8V8.8H20V16.5Z"
            fill="black"
          ></path>
        </svg>
        <p className="absolute right-3 top-1 rounded-xl bg-white font-bold text-pink-600">
          {cartItem ? cartItem.length : ""}
        </p>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"sm"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader display={"flex"}>
            <Text paddingTop={"5px"} mr={2}>
              <BsArrowLeft fontSize={20} fontWeight={500} onClick={onClose} />
            </Text>
            Bag{" "}
            <Text fontWeight={100} ml="10px" fontSize={10} mt="10px">
              {cartItem.length} items
            </Text>
          </DrawerHeader>
          <hr />
          <DrawerBody w={"98%"}>
            {{ verfiy } ? (
              ""
            ) : (
              <Box
                border={"1px solid lightgray"}
                w="100%"
                borderRadius={5}
                p="5px"
                mt={3}
              >
                <Text fontSize={14}>
                  2000 Reward Points on new registration
                </Text>
                <Button
                  w={"100%"}
                  h={8}
                  bg={"transparent"}
                  border={"1px solid #d5418e"}
                  color="#d5418e"
                  m={"10px 0"}
                  fontSize={15}
                  _hover={{ bg: "transparent" }}
                >
                  <Link to="/login">Login/Register</Link>{" "}
                </Button>
              </Box>
            )}
            {cartItem.map((e) => (
              <Box
                border={"1px solid lightgray"}
                w="100%"
                borderRadius={5}
                p="1px"
                mt={3}
                key={e.id}
              >
                <Box
                  display={"flex"}
                  gap={2}
                  w="100%"
                  borderRadius={5}
                  p="1px"
                  mt={3}
                >
                  <Image w={20} src={e.image} alt="product_cart" />
                  <Text fontSize={14}>
                    <Center>{e.title}</Center>
                  </Text>
                  <Text
                    onClick={() => handleDel(e.id)}
                    color={"#d5418e"}
                    p={4}
                    fontSize={25}
                    className="cursor-pointer"
                  >
                    <RiDeleteBin6Line />
                  </Text>
                </Box>
                <hr />
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Flex
                    w="100px"
                    justify={"center"}
                    align="center"
                    gap={1}
                    className="text-gray-500"
                  >
                    <Button
                      w="50px"
                      h="40px"
                      variant={"ghost"}
                      fontSize="35px"
                      fontWeight={"bold"}
                      disabled={e.quantity === 1}
                      onClick={() => subQuantity(e.id, e.quantity)}
                    >
                      -
                    </Button>
                    <Text fontWeight={"bold"}>{e.quantity}</Text>
                    <Button
                      w="50px"
                      h="40px"
                      variant={"ghost"}
                      fontSize="30px"
                      fontWeight={"bold"}
                      onClick={() => addQuantity(e.id, e.quantity)}
                    >
                      +
                    </Button>
                  </Flex>
                  <Box display={"flex"}>
                    <Text
                      p={"8px 8px"}
                      fontWeight={500}
                      textDecoration="line-through"
                      color={"lightgray"}
                    >
                      {e.preprice}
                    </Text>
                    <Text p={"8px 8px"} fontWeight={500}>
                      ₹{e.price}
                    </Text>
                  </Box>
                </Box>
              </Box>
            ))}
            <Box
              border={"1px solid lightgray"}
              w="100%"
              borderRadius={5}
              p="5px"
              gap={5}
              mt={3}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Text m={"9px 1px 9px 12px"} fontSize={28}>
                <RiCoupon2Line fill="#d5418e" />
              </Text>
              <Box ml={-65}>
                <Text fontWeight={500}>Coupons</Text>
                <Text color={"#d5418e"} fontSize={15}>
                  Apply now and save extra!
                </Text>
              </Box>
              <Text m={"0px 12px"} fontSize={28}>
                <FaArrowRight />
              </Text>
            </Box>
            <Box
              border={"1px solid lightgray"}
              w="100%"
              borderRadius={5}
              p="15px"
              gap={5}
              mt={3}
            >
              <Text fontWeight={700}>Price Details</Text>
              <Box p={5}>
                <Box display={"flex"} justifyContent="space-between">
                  <Text>Bag MRP ({cartItem.length} items)</Text>
                  <Text>₹{tp}</Text>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent="space-between"
                  m={"10px 0"}
                >
                  <Text>Bag Dicount</Text>
                  <Text className="line-through text-gray-500">5%</Text>
                </Box>
                <Box display={"flex"} justifyContent="space-between">
                  <Text>Shipping</Text>
                  <Text className="line-through">₹40</Text>
                </Box>
              </Box>
              <Box display={"flex"} justifyContent="space-between">
                <Text fontWeight={700}>You Pay</Text>
                <Text fontWeight={700}>₹{tp}</Text>
              </Box>
            </Box>
          </DrawerBody>
          <hr />
          <DrawerFooter justifyContent={"space-between"}>
            <Box>
              <Heading fontSize={17}>₹{tp}</Heading>
              <Box display={"flex"} gap={1}>
                <Text fontSize={12}>Grand Total </Text>{" "}
                <IoIosInformationCircleOutline fontSize={15} color="#ff8fba" />
              </Box>
            </Box>
            <Button
              colorScheme="pink"
              variant="solid"
              rightIcon={<FaArrowRight />}
            >
              Proceed
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerLogin;
