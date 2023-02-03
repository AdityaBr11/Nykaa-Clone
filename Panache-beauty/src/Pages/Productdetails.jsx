import React, { useEffect, useState } from "react";
import "./Productdetails.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {MdOutlineProductionQuantityLimits} from 'react-icons/md'
import {TbTruckReturn} from 'react-icons/tb'
import {CiLocationOn} from 'react-icons/ci'
import { useToast } from "@chakra-ui/react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
} from "@chakra-ui/react";
import { Collapse, Button, Image, Box } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCarts, getCartItem, getSingleProduct } from "../redux/products/actions";



const Productdetails = () => {
  const toast = useToast()
  const {id}=useParams()
  const productData=useSelector(store=>store.productsReducer.singleProducts)
  const dispatch=useDispatch()
  const cartItems=useSelector(store=>store.productsReducer.cart);
  
  useEffect(()=>{
    dispatch(getSingleProduct(id))
  },[dispatch])


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <div style={{ width: "68%", margin: "auto" }}>
      <div className="main">
        <div className="subdiv1">
          <div style={{ display: "flex", paddingRight: "0px" }}>
            <div>
              <img
                style={{ width: "50px", border: "1px solid red" }}
                src="https://images-static.nykaa.com/media/catalog/product/d/2/d22e139OLAYBND000098_1.jpg"
              />
            </div>
            <img
              style={{
                height: "auto",
                width: "70%",
                paddingLeft: "40px",
              }}
              src={productData.image}
            />
          </div>
        </div>
        <div className="subdiv2">
          <div>
            <h1
              style={{
                height: "auto",
                fontSize: "20px",
                textAlign: "left",
                fontWeight: "500",
                marginBottom: "10px",
              }}
            >
              {productData.title}
            </h1>
            <p
              style={{
                height: "auto",
                fontSize: "14px",
                textAlign: "left",
                marginBottom: "10px",
              }}
            >
              <span>★★★★☆ </span> 4.4/5 7973 ratings & 12 reviews Q&As
            </p>
            <p style={{ textAlign: "left", marginBottom: "10px" }}>
              <span style={{ color: "grey" }}>
                MRP:{"  "} <strike> {productData.preprice}</strike>
              </span>
              {"  "}
              <span style={{ fontWeight: 600, fontSize: "20px" }}>₹{productData.price}</span>
              {"  "}
              <span
                style={{
                  color: "#008945",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                30% Off
              </span>
            </p>
            <p
              style={{
                textAlign: "left",
                fontSize: "16px",
                color: "grey",
                marginBottom: "10px",
              }}
            >
              inclusive of all taxes
            </p>
            <div className="innerdiv">
              <div
                style={{ paddingRight: "50px", borderRight: "1px solid grey" }}
              >
                <button
                  style={{
                    width: "100%",
                    padding: "15px 60px 15px 60px",
                    fontSize: "20px",
                    backgroundColor: "#FC2779",
                    color: "white",
                    border: "none",
                    display: "flex",
                    justifyContent: "flext-start",
                    marginTop: "30px",
                  }}
                  onClick={()=>{dispatch(addCarts(productData))
                    .then(()=>dispatch(getCartItem()))
                    .then(() => toast({
                      title: 'Product Added!',
                      description: "We've added your product.",
                      status: 'success',
                      duration: 2000,
                      position: "top",
                      isClosable: true,
                  }))
                  
                  }}
                >
                  Add to Bag
                </button>
              </div>
              <div
                style={{ paddingLeft: "30px", textAlign: "top", width: "40%" }}
              >
                <p
                  style={{
                    fontSize: "18px",
                    color: "grey",
                    fontWeight: "500",
                    paddingTop: "20px",
                    display:"flex",justifyContent:"center",alignItems:"center",gap:"3px"
                  }}
                >
                 <span><CiLocationOn/></span><span>Delivery Options</span>
                </p>
                <div style={{ marginBottom: "30px" }}>
                  {" "}
                  <div className="flex justify-center items-center gap-1 mt-5 border border-gray-400 px-2">
                  <input className="outline-none"
                    style={{
                      width: "100%",
                      height: "35px",
                      fontSize: "16px",
                      border: "0px solid grey",
                      // marginTop: "20px",
                    }}
                    type="text"
                    placeholder="Enter Pincode"
                  />
                  <p className="text-pink-500 cursor-pointer">check</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="details">
            <div className="flex gap-1 justify-center items-center"><span><MdOutlineProductionQuantityLimits/></span>   <span>100% Genuine Products</span></div>
            <div className="flex justify-center items-center gap-1"><span><TbTruckReturn/> </span><span>Easy Return Policy</span></div>
            <div>Sold by :NYKAA E RETAIL PR</div>
          </div>
        </div>
      </div>
      <h2
        style={{
          textAlign: "left",
          fontSize: "20px",
          fontWeight: "600",
          margin: "30px 0 20px 0",
        }}
      >
        Product Description
      </h2>
      <div
        style={{
          display: "flex",
          //   border: "1px solid black",
          justifyContent: "space-between",
          width: "100%",
          height: "auto",
        }}
        className="second-div"
      >
        <div
          style={{
            width: "74%",
            height: "auto",
            paddingTop: "30px",
            paddingLeft: "20px",
          }}
        >
          <Collapse startingHeight={220} in={show}>
            <p
              style={{
                textAlign: "left",
                paddingLeft: "9px",
                fontSize: "18px",
                marginBottom: "20px",
              }}
            >
              Olay Total Effects Night & Day Cream Combo Contains:
            </p>
            <p
              style={{
                textAlign: "left",
                paddingLeft: "9px",
                fontSize: "18px",
                marginBottom: "20px",
              }}
            >
              Explore the entire range of{" "}
              <span style={{ color: "#FC2779", textDecoration: "underline" }}>
                Kits & Combos{" "}
              </span>
              available on Nykaa. Shop more{" "}
              <span style={{ color: "#FC2779", textDecoration: "underline" }}>
                Olay
              </span>{" "}
              products here.You can browse through the complete world of{" "}
              <span style={{ color: "#FC2779", textDecoration: "underline" }}>
                Olay Kits & Combos{" "}
              </span>
              .
              <span style={{ color: "#FC2779", fontSize: "19px" }}>
                Olay Total Effects 7 In One Day Cream - Niacinamide SPF 15
                Normal: (MRP: 899.00/-) | Quantity: 1 | Expiry Date: 15 July
                2025
              </span>
            </p>
            <Image
              borderRadius="0px"
              width="100%"
              src="https://www.nykaa.com/media/wysiwyg/TE_banner.png"
            />
            <Image
              borderRadius="0px"
              width="100%"
              src="https://www.nykaa.com/media/wysiwyg/TE_img_01.png"
            />
            <Image
              borderRadius="0px"
              width="100%"
              src="https://www.nykaa.com/media/wysiwyg/TE_img_02.png"
            />
            <Image
              borderRadius="0px"
              width="100%"
              src="https://www.nykaa.com/media/wysiwyg/TE_footer.png"
            />
            <p style={{ marginBottom: "20px", marginTop: "20px" }}>
              {" "}
              Olay Total Effects Night Cream - Vitamin C,Niacinamide, Green Tea:
              (MRP: 899.00/-) | Quantity: 1 | Expiry Date: 15 May 2025
            </p>
            <Image
              borderRadius="0px"
              width="100%"
              src="https://www.nykaa.com/media/wysiwyg/TE_banner.png"
            />
            <Image
              borderRadius="0px"
              width="100%"
              src="https://www.nykaa.com/media/wysiwyg/TE_img_01.png"
            />
            <Image
              borderRadius="0px"
              width="100%"
              src="https://www.nykaa.com/media/wysiwyg/TE_img_02.png"
            />
            <Image
              borderRadius="0px"
              width="100%"
              src="https://www.nykaa.com/media/wysiwyg/TE_footer.png"
            />
          </Collapse>
          <Box
            size="sm"
            onClick={handleToggle}
            mt="1rem"
            cursor="pointer"
            borderTop="1px solid grey"
            paddingLeft="10px"
            paddingRight="10px"
            color="#FC2779"
            fontSize="20px"
            paddingTop="10px"
            textAlign="center"
          >
            Read {show ? "Less" : "More"}
          </Box>
          <h2
            style={{
              textAlign: "left",
              fontSize: "20px",
              fontWeight: "600",
              margin: "30px 0 30px 0",
            }}
          >
            Customers also Viewed
          </h2>

          <div>
            <div style={{ marginBottom: "30px" }}>
              <div>
                <Carousel responsive={responsive} className="  cursor-pointer ">
                  {best.map((e) => (
                    <div key={e.id}>
                      <img style={{ width: "60%" }} src={e.src} alt="" />
                      <div style={{ height: "auto", padding: "0 15px 0 15px" }}>
                        <p
                          style={{
                            height: "40px",
                            marginBottom: "2px",
                            marginTop: "2px",
                            lineHeight: "20px",
                            fontSize: "16px",
                            wordSpacing: "0px",
                          }}
                        >
                          {e.tit}
                        </p>
                        <p
                          style={{
                            height: "16px",
                            color: "#757575",
                            marginBottom: "4px",
                          }}
                        >
                          {e.quan}
                        </p>
                        <p style={{ height: "16px", marginBottom: "4px" }}>
                          {e.star}
                        </p>
                        <p style={{ height: "20px", marginBottom: "4px" }}>
                          {e.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
          {/* //chakra ui */}
          <Tabs variant="enclosed">
            <TabList>
              <Tab
                border="0px"
                fontSize="20px"
                marginRight="20px"
                backgroundColor="white"
                color="#FC2779"
              >
                Ratings & Reviews
              </Tab>
              <Tab
                border="0px"
                fontSize="20px"
                backgroundColor="white"
                color="#FC2779"
              >
                Product Q&A
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel marginBottom="50px">
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      display: "flex",
                      borderRight: "1px solid grey",
                      padding: "10px 20px 10px 20px",
                      margin: "20px 20px 20px 0",
                    }}
                  >
                    <div style={{ paddingRight: "30px" }}>
                      <p style={{ fontSize: "36px" }}>4.4/5</p>
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <p style={{ fontSize: "18px" }}>Overall Rating</p>
                      <p style={{ fontSize: "18px", color: "grey" }}>
                        7989 verified ratings
                      </p>
                    </div>
                  </div>

                  <div style={{ padding: "20px 0 10px 0" }}>
                    <p style={{ fontSize: "18px", color: "grey" }}>
                      Write a review and win 100 reward points !
                    </p>
                    <button
                      style={{
                        padding: "10px 23px 10px 23px",
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#FC2779",
                        border:"1px solid grey",
                        marginTop:"10px"
                      }}
                    >
                      Write Review
                    </button>
                  </div>
                </div>
                <h2
                  style={{
                    textAlign: "left",
                    fontSize: "22px",
                    fontWeight: "600",
                    marginBottom: "30px",
                  }}
                >
                  {" "}
                  Photos From Customers
                </h2>
                <div className="customer-image">
                  <img
                    style={{ width: "10%" }}
                    src="https://images-static.nykaa.com/prod-review/1670160204188_34709aea-2b23-48c0-a32a-47667e23156d_1.jpg?tr=w-145,h-145,cm-pad_resize"
                  />
                  <img src="https://images-static.nykaa.com/prod-review/1670138263356_d4c7780d-b7d2-40b7-b9b6-7b1cd7ee9af0_1.jpg?tr=w-145,h-145,cm-pad_resize" />
                  <img src="https://images-static.nykaa.com/prod-review/1667560471983_a308586a-6779-41d3-8f12-aa09f487510d_1.jpg?tr=w-145,h-145,cm-pad_resize" />
                  <img src="https://images-static.nykaa.com/prod-review/1651054456031_97eccb10-d81f-4551-bb8e-4bffdfd74d48_1.jpeg?tr=w-145,h-145,cm-pad_resize" />
                  <img src="https://images-static.nykaa.com/prod-review/1644871415657_c50c361a-cee0-4b08-a104-2bedca36c32e_1.jpg?tr=w-145,h-145,cm-pad_resize" />
                  <img src="https://images-static.nykaa.com/prod-review/1638627472059_78019951-9f71-4bc0-b773-697885eb5537_1.jpg?tr=w-145,h-145,cm-pad_resize" />
                  <img src="https://images-static.nykaa.com/prod-review/1608119532551_84c18c6c-c0e3-4300-9de4-6771b6088b6b_1.JPG?tr=w-145,h-145,cm-pad_resize" />
                  <img src="https://images-static.nykaa.com/prod-review/1608119514503_4f24844f-4316-4d89-8eaf-99f6947bbe30_1.JPG?tr=w-145,h-145,cm-pad_resize" />
                </div>
                <div className="Reviews">
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "22px",
                      fontWeight: "600",
                      marginBottom: "30px",
                      marginTop: "30px",
                    }}
                  >
                    Most Useful Review
                  </h2>

                  <div style={{ display: "flex", marginBottom: "30px" }}>
                    <div
                      style={{
                        display: "flex",
                        marginRight: "25px",
                        width: "30%",
                      }}
                    >
                      <img
                        style={{
                          width: "20%",
                          height: "50px",
                          marginTop: "10px",
                        }}
                        src="https://images-static.nykaa.com/prod-review/default_profile_image.png"
                      />
                      <p
                        style={{
                          paddingLeft: "8px",
                          color: "grey",
                          fontSize: "18px",
                          textAlign: "left",
                          margin: "10px ",
                        }}
                      >
                        Paramita Banerjee Sawant
                      </p>
                    </div>
                    <div style={{ width: "70%", textAlign: "left" }}>
                      <button
                        style={{
                          backgroundColor: "green",
                          fontSize: "22px",
                          color: "white",
                          borderRadius: "5px",
                          padding: "5px 10px 5px 10px",
                        }}
                      >
                        5 <span style={{ color: "white" }}>★</span>
                      </button>
                      <p
                        style={{
                          fontSize: "18px",
                          marginBottom: "20px",
                          marginTop: "20px",
                        }}
                      >
                        "Excellent combination from Olay. Totally effective "
                      </p>
                      <p style={{ color: "grey" }}>
                        This combination of day and night creme is the best for
                        my sensitive skin. I am 48 years old anf my skin looks
                        and feels 10 years younger !! Thank you Nykaa ❤
                      </p>
                      <div style={{ display: "flex", marginTop: "10px" }}>
                        <button
                          style={{
                            padding: "0px 30px 0px 30px",
                            fontSize: "20px",
                            marginRight: "25px",
                            border: "0.5px solid grey",
                            color: "#FC2779",
                            backgroundColor: "white",
                            height: "50px",
                            marginTop: "10px",
                          }}
                        >
                          Helpful
                        </button>
                        <p
                          style={{
                            color: "grey",
                            fontSize: "18px",
                            paddingTop: "20px",
                          }}
                        >
                          8 people found this helpful
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Reviews">
                  <div style={{ display: "flex", marginBottom: "30px" }}>
                    <div
                      style={{
                        display: "flex",
                        marginRight: "25px",
                        width: "30%",
                      }}
                    >
                      <img
                        style={{
                          width: "20%",
                          height: "50px",
                          marginTop: "10px",
                        }}
                        src="https://images-static.nykaa.com/prod-review/default_profile_image.png"
                      />
                      <p
                        style={{
                          paddingLeft: "8px",
                          color: "grey",
                          fontSize: "18px",
                          textAlign: "left",
                          margin: "10px ",
                        }}
                      >
                        gazal
                      </p>
                    </div>
                    <div style={{ width: "70%", textAlign: "left" }}>
                      <button
                        style={{
                          backgroundColor: "green",
                          fontSize: "22px",
                          color: "white",
                          borderRadius: "5px",
                          padding: "5px 10px 5px 10px",
                        }}
                      >
                        5 <span style={{ color: "white" }}>★</span>
                      </button>
                      <p
                        style={{
                          fontSize: "18px",
                          marginBottom: "20px",
                          marginTop: "20px",
                        }}
                      >
                        "Excellent combination from Olay. Totally effective "
                      </p>
                      <p style={{ color: "grey" }}>
                        This combination of day and night creme is the best for
                        my sensitive skin. I am 48 years old anf my skin looks
                        and feels 10 years younger !! Thank you Nykaa ❤
                      </p>
                      <div style={{ display: "flex", marginTop: "10px" }}>
                        <button
                          style={{
                            padding: "0px 30px 0px 30px",
                            fontSize: "20px",
                            marginRight: "25px",
                            border: "0.5px solid grey",
                            color: "#FC2779",
                            backgroundColor: "white",
                            height: "50px",
                            marginTop: "10px",
                          }}
                        >
                          Helpful
                        </button>
                        <p
                          style={{
                            color: "grey",
                            fontSize: "18px",
                            paddingTop: "20px",
                          }}
                        >
                          8 people found this helpful
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Reviews">
                  <div style={{ display: "flex", marginBottom: "30px" }}>
                    <div
                      style={{
                        display: "flex",
                        marginRight: "25px",
                        width: "30%",
                      }}
                    >
                      <img
                        style={{
                          width: "20%",
                          height: "50px",
                          marginTop: "10px",
                        }}
                        src="https://images-static.nykaa.com/prod-review/default_profile_image.png"
                      />
                      <p
                        style={{
                          paddingLeft: "8px",
                          color: "grey",
                          fontSize: "18px",
                          textAlign: "left",
                          margin: "10px ",
                        }}
                      >
                        Anjali Agrawal
                      </p>
                    </div>
                    <div style={{ width: "70%", textAlign: "left" }}>
                      <button
                        style={{
                          backgroundColor: "green",
                          fontSize: "22px",
                          color: "white",
                          borderRadius: "5px",
                          padding: "5px 10px 5px 10px",
                        }}
                      >
                        5 <span style={{ color: "white" }}>★</span>
                      </button>
                      <p
                        style={{
                          fontSize: "18px",
                          marginBottom: "20px",
                          marginTop: "20px",
                        }}
                      >
                        "Excellent combination from Olay. Totally effective "
                      </p>
                      <p style={{ color: "grey" }}>
                        This combination of day and night creme is the best for
                        my sensitive skin. I am 48 years old anf my skin looks
                        and feels 10 years younger !! Thank you Nykaa ❤
                      </p>
                      <div style={{ display: "flex", marginTop: "10px" }}>
                        <button
                          style={{
                            padding: "0px 30px 0px 30px",
                            fontSize: "20px",
                            marginRight: "25px",
                            border: "0.5px solid grey",
                            color: "#FC2779",
                            backgroundColor: "white",
                            height: "50px",
                            marginTop: "10px",
                          }}
                        >
                          Helpful
                        </button>
                        <p
                          style={{
                            color: "grey",
                            fontSize: "18px",
                            paddingTop: "20px",
                          }}
                        >
                          8 people found this helpful
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Reviews">
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        display: "flex",
                        marginRight: "25px",
                        width: "30%",
                      }}
                    >
                      <img
                        style={{
                          width: "20%",
                          height: "50px",
                          marginTop: "10px",
                        }}
                        src="https://images-static.nykaa.com/prod-review/default_profile_image.png"
                      />
                      <p
                        style={{
                          paddingLeft: "8px",
                          color: "grey",
                          fontSize: "18px",
                          textAlign: "left",
                          margin: "10px ",
                        }}
                      >
                        bharti agrawal
                      </p>
                    </div>
                    <div style={{ width: "70%", textAlign: "left" }}>
                      <button
                        style={{
                          backgroundColor: "green",
                          fontSize: "22px",
                          color: "white",
                          borderRadius: "5px",
                          padding: "5px 10px 5px 10px",
                        }}
                      >
                        5 <span style={{ color: "white" }}>★</span>
                      </button>
                      <p
                        style={{
                          fontSize: "18px",
                          marginBottom: "20px",
                          marginTop: "20px",
                        }}
                      >
                        "Excellent combination from Olay. Totally effective "
                      </p>
                      <p style={{ color: "grey" }}>
                        This combination of day and night creme is the best for
                        my sensitive skin. I am 48 years old anf my skin looks
                        and feels 10 years younger !! Thank you Nykaa ❤
                      </p>
                      <div style={{ display: "flex", marginTop: "10px" }}>
                        <button
                          style={{
                            padding: "0px 30px 0px 30px",
                            fontSize: "20px",
                            marginRight: "25px",
                            border: "0.5px solid grey",
                            color: "#FC2779",
                            backgroundColor: "white",
                            height: "50px",
                            marginTop: "10px",
                          }}
                        >
                          Helpful
                        </button>
                        <p
                          style={{
                            color: "grey",
                            fontSize: "18px",
                            paddingTop: "20px",
                          }}
                        >
                          8 people found this helpful
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <p style={{ height: "100px" }}></p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>

        {/* //side image */}
        <div
          style={{
            width: "20%",
            paddingTop: "30px",
            position: "sticky",
            height: "426px",
            backgroundColor: "white",
          }}
          className="sideimage"
        >
          <img
            style={{ width: "80%", margin: "auto" }}
            src="https://images-static.nykaa.com/media/catalog/product/d/2/d22e139OLAYBND000098_1.jpg"
          />
          <p style={{ textAlign: "center", padding: "0 12px 0 12px" }}>
            Olay Total Effects Night & Day Cream Combo
          </p>
          <p style={{ textAlign: "center", padding: "0 42px 0 42px" }}>
            <span style={{ color: "grey" }}>
              MRP:{"  "} <strike> ₹1798</strike>
            </span>
            {"  "}
            <span style={{ fontWeight: 600, fontSize: "20px" }}>₹1259</span>
            {"  "}
            <span
              style={{
                color: "#008945",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              30% Off
            </span>
          </p>
          <p style={{ textAlign: "center", marginBottom: "10px" }}>★★★★☆ </p>
          <button
            style={{
              width: "100%",
              padding: "15px 60px 15px 60px",
              fontSize: "20px",
              backgroundColor: "#FC2779",
              color: "white",
              border: "none",
              display: "flex",
              justifyContent: "flext-start",
              marginTop: "0px",
            }}
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;


const best = [
  {
    id: 1,
    src: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/f/5/f5af21e737534800058_1.jpg",
    tit: "Plum Green Tea Alcohol-Free Toner",
    quan: "200ml",
    star: "★★★★☆ 22928",
    price: "Rs.371",
  },
  {
    id: 2,
    src: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/c/d/cd0f16c4710032517839.jpg",
    tit: "Neutrogena Hydro Boost Water Gel",
    quan: "2 S",
    star: "★★★★☆ 38783",
    price: "Rs.450",
  },
  {
    id: 3,
    src: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/0/0/00244708904245709730_1.jpg",
    tit: "Nykaa Naturals Skin Potion 24 K Gold Collagen ",
    quan: "30ml",
    star: "★★★★☆ 19819",
    price: "Rs.999",
  },
  {
    id: 4,
    src: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/d/d/dd126ca887167485471_1.jpg",
    tit: "Estee Lauder Advanced Night Repair Synchronized",
    quan: "5 S",
    star: "★★★★☆ 15793",
    price: "Rs.5900",
  },
  {
    id: 5,
    src: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/a/8a541fbDOTKE00000054-1.jpg",
    tit: "Dot & Key Vitamin c + E Super Bright Glow",
    quan: "60 ml",
    star: "★★★★★ 8214",
    price: "Rs.506",
  },
  {
    id: 6,
    src: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/c/d/cd9f16cNYKMCF0000008.jpg",
    tit: "MCaffeine Choco & Shea Body Butter for Winters",
    quan: "250g",
    star: "★★★★★ 20874",
    price: "Rs.549",
  },
  {
    id: 7,
    src: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/4/24e616cNYCETA0000010.jpg",
    tit: "Cetaphil Gentle Skin Cleanser",
    quan: "4 S ",
    star: "★★★★★ 56054",
    price: "Rs.259",
  },
  {
    id: 8,
    src: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/f/8/f8eea7eMINIM00000001_1.jpeg",
    tit: "Minimalist 10% Niacinamide Face Serum With Matmarine",
    quan: "30ml",
    star: "★★★★☆ 17718",
    price: "Rs.599",
  },
];