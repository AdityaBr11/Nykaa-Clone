//Varinder
import React, {useState} from 'react'
import {Box,Heading,Text,Button,Input,InputGroup,InputLeftElement,Image,Flex} from "@chakra-ui/react";
import {AiOutlineMobile,AiOutlineGift,AiOutlineArrowRight} from "react-icons/ai";
import {GoLocation,GoSearch} from "react-icons/go";
import {IoIosHelpCircleOutline} from "react-icons/io";
import {MdOutlineShoppingBasket} from "react-icons/md";
import {Link} from 'react-router-dom';
import {useGoogleLogin} from '@react-oauth/google';
import axios from 'axios';
import
{
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
} from '@chakra-ui/react';
import
{
    List,
    ListItem
} from '@chakra-ui/react';
import {FcGoogle} from "react-icons/fc";

import "../App.css";
import Logo from '../../public/loGo1.jpg'
const REDIRECT_URI = window.location.to;
const Navbar=() =>
{

    const Nav1List=[
        {
            name: "Get App",
            icon: <AiOutlineMobile />
        },{
            name: "Store & Events",
            icon: <GoLocation />
        },{
            name: "Gift Card",
            icon: <AiOutlineGift />
        },{
            name: "Help",
            icon: <IoIosHelpCircleOutline />
        }
    ]
    const [detial,setDetail]=useState([]);
    const [verfiy,Setverfiy]=useState(false);
    const login = useGoogleLogin({
        onSuccess: async respose => {
            try {
                const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        "Authorization": `Bearer ${respose.access_token}`
                    }
                })
                Setverfiy(true)
     setDetail([...detial,res.data])
                
            } catch (err) {
                console.log(err)

            }

        }
    });

    const logout=() =>
    {
        setDetail([]);
        Setverfiy(false)
    }
console.log(detial,"hogye")
    return (
        <Box>
            <Box width={'full'} h={{base: 'auto',lg: 10}} backgroundImage={`url(https://adn-static1.nykaa.com/media/wysiwyg/2021/common-strip.jpg)`} position={'fixed'} top='0'>
                <Box display={'flex'} w={{base: '100%',md: '80%',lg: '80%'}} m={'auto'} justifyContent={{base: 'space-between',md: 'none'}} p={2} alignItems={'center'} textAlign='center'  >
                    <Link to="#" rel='noopener noreferrer'><Text fontWeight={{base: 650}} fontSize={{base: '11.8px',md: '14px',lg: '18px'}} _hover={{color: 'white'}}>BEAUTY BONANZA Get Your Daily Dose Of Amazing Deals</Text></Link>

                    <Box display={'flex'}> {
                        Nav1List.map((e) =>
                        {
                            return (<Box display={{base: 'none',md: 'none',lg: 'flex'}} fontSize={{base: '10px',md: '11px',lg: '15px'}} flexDirection={{base: 'none',s: "none",md: 'row'}} alignItems={'center'} fontWeight={{base: 100,lg: 500}} _hover={{color: 'white'}} m={{base: '0px',lg: '0rem 0.9rem'}}>
                                <Text fontSize={22}>{e.icon}</Text>
                                <Text>{e.name} |</Text>
                            </Box>
                            )
                        })
                    }
                    </Box>
                </Box>
            </Box>
            <Box boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;' backgroundColor={'white'} position={'fixed'} w='100%' top={10}>
                <Box w={'80%'} h={{lg: 68,md: "auto",s: "auto"}} m={'auto'} display={'flex'} justifyContent={'space-between'} fontWeight={500} fontSize={'16px'}>
                    <Box display={{base: 'grid',lg: 'flex'}} justifyContent={'space-evenly'} alignItems='center' gap={10} textAlign={'start'}>
                        <List spacing={1} display={{base: 'grid',md: 'flex',lg: 'flex'}} >
                            <Heading textAlign={'center'} ><Link to="#"><Image w={'83px'} src={Logo}/></Link></Heading>

                            <ListItem _hover={{color: 'white'}} textAlign={{base: "start",md: 'center',lg: 'center'}}>
                                <li><Link to="#" ><div className="d">
                                    <Button className="d-btn">Categories</Button>
                                </div></Link></li>
                            </ListItem>
                            <ListItem>
                                <Link to="#">
                                    <div className="d">
                                        <Button className="d-btn">Brands</Button>
                                        <div className="d-content b-content">
                                            <div className="row" style={{backgroundColor:'white',zIndex:'inherit'}}>
                                                <div className="column">
                                                    <h3>HTML and CSS</h3>
                                                    <Link to="#">Learn HTML</Link>
                                                    <Link to="#">Learn CSS</Link>
                                                    <Link to="#">Bootstrap 4</Link>
                                                </div>
                                                <div className="column">
                                                    <h3>Server Side</h3>
                                                    <Link to="#">Learn PHP</Link>
                                                    <Link to="#">Learn Python</Link>
                                                    <Link to="#">Learn Node.js</Link>
                                                </div>
                                                <div className="column">
                                                    <h3>Frameworks</h3>
                                                    <Link to="#">VueJS</Link>
                                                    <Link to="#">Laravel</Link>
                                                    <Link to="#">CodeIgniter</Link>
                                                </div>
                                                <div className="column">
                                                    <h3>Frameworks</h3>
                                                    <Link to="#">VueJS</Link>
                                                    <Link to="#">Laravel</Link>
                                                    <Link to="#">CodeIgniter</Link>
                                                </div>
                                                <div className="column">
                                                    <h3>Frameworks</h3>
                                                    <Link to="#">VueJS</Link>
                                                    <Link to="#">Laravel</Link>
                                                    <Link to="#">CodeIgniter</Link>
                                                </div>
                                                <div className="column">
                                                    <h3>Frameworks</h3>
                                                    <Link to="#">VueJS</Link>
                                                    <Link to="#">Laravel</Link>
                                                    <Link to="#">CodeIgniter</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to="#">
                                    <div className="d">
                                        <Button className="d-btn">Luxe</Button>
                                        <div className="d-content">
                                            <div className="row">
                                                <div className="column">
                                                    <h3>Makeup Collection Face</h3>
                                                    <p><Link to="#">Foundation</Link></p>
                                                    <p><Link to="#">Compact</Link></p>
                                                    <p><Link to="#">Highlighter</Link></p>
                                                    <p><Link to="#">Setting Spray</Link></p>
                                                    <p><Link to="#">Primer</Link></p>
                                                    <p><Link to="#">Concealer</Link></p>
                                                    <p><Link to="#">Blush</Link></p>
                                                    <p><Link to="#">Loose Powder</Link></p>
                                                    <p><Link to="#">Bronzer</Link></p>
                                                    <p><Link to="#">Makeup Remover</Link></p>
                                                    <p><Link to="#">Tinted Moisturizer</Link></p>
                                                    <p><Link to="#">Contouring</Link></p>
                                                    <p><Link to="#">BB & CC Cream</Link></p>
                                                    <p><Link to="#">Face Palette</Link></p>
                                                </div>
                                                <div className="column">
                                                    <h3>Eyes</h3>
                                                    <p><Link to="#">Eye Shadow</Link></p>
                                                    <p><Link to="#">Mascra</Link></p>
                                                    <p><Link to="#">Eyliner & kajal</Link></p>
                                                    <p><Link to="#">Brows</Link></p>
                                                    <p><Link to="#">Eye Primer</Link></p>
                                                    <p><Link to="#">Conclealer</Link></p>
                                                    <p><Link to="#">Lashes</Link></p>
                                                </div>
                                                <div className="column">
                                                    <h3>Lips</h3>
                                                    <p><Link to="#">Lipstick</Link></p>
                                                    <p><Link to="#">Liquid Lipstick</Link></p>
                                                    <p><Link to="#">Lip Balm</Link></p>
                                                    <p><Link to="#">Lip Plumper</Link></p>
                                                    <p><Link to="#">Lip Liner</Link></p>
                                                    <p><Link to="#">Lip Tint</Link></p>
                                                    <br />
                                                    <h3>Nails</h3>
                                                    <p><Link to="#">Nail Polish</Link></p>
                                                    <p><Link to="#">Nail Care</Link></p>
                                                    <p><Link to="#">Nail Polish Remover</Link></p>
                                                </div>
                                                <div className="column">
                                                    <h3>Tools & Brushes</h3>
                                                    <p><Link to="#">Face Brush</Link></p>
                                                    <p><Link to="#">Eye Brush</Link></p>
                                                    <p><Link to="#">Applicators</Link></p>
                                                    <p><Link to="#">Lip Brush</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </ListItem>

                            <ListItem>
                                <Link to="#">
                                    <div className="d">
                                        <Button className="d-btn"> Nykaa Fashion</Button>
                                        <div className="d-content">
                                            <div className="row" style={{display: 'flex'}}>
                                                <div className="column">
                                                    <h3>What is new?</h3>
                                                    <p><Link to="">Recently Added</Link></p>
                                                    <br />
                                                    <h3>Women</h3>
                                                    <p><Link to="#">Indianwear</Link></p>
                                                    <p><Link to="#">Westerwear</Link></p>
                                                    <p><Link to="#">Footwear</Link></p>
                                                    <p><Link to="#">Bags</Link></p>
                                                    <p><Link to="#">Lingerie</Link></p>
                                                    <p><Link to="#">Sportswear</Link></p>
                                                    <p><Link to="#">Sleep & Lounge</Link></p>
                                                    <p><Link to="#">Jewellery</Link></p>
                                                    <p><Link to="#">Watches</Link></p>
                                                    <p><Link to="#">Accessories</Link></p>
                                                    <br />
                                                    <h3>Global Store</h3>
                                                    <br />
                                                    <h3>Men</h3>

                                                    <p><Link to="#">Topwear</Link></p>
                                                    <p><Link to="#">Bottomwear</Link></p>
                                                    <p><Link to="#">Ethnicwear</Link></p>
                                                </div>
                                                <div className="column">
                                                    <p><Link to="#">Topwear</Link></p>
                                                    <p><Link to="#">Bottomwear</Link></p>
                                                    <p><Link to="#">Ethnicwear</Link></p>
                                                    <p><Link to="#">Footwear</Link></p>
                                                    <p><Link to="#">Atheisure</Link></p>
                                                    <p><Link to="#">Innerwear & Sleepwear</Link></p>
                                                    <p><Link to="#">Watches</Link></p>
                                                    <p><Link to="#">Accessories</Link></p>
                                                    <p><Link to="#">Bags</Link></p>
                                                    <br />
                                                    <h3>Style Guide</h3>
                                                    <br />
                                                    <h3>Tech</h3>
                                                    <p><Link to="#">Smart Wearables</Link></p>
                                                    <p><Link to="#">Headphones</Link></p>
                                                    <p><Link to="#">Speakers</Link></p>
                                                    <p><Link to="#">Chargers & Cables</Link></p>
                                                    <p><Link to="#">Power Bank</Link></p>
                                                    <br />
                                                    <h3>Kids</h3>
                                                    <p><Link to="#">Westernwear</Link></p>
                                                    <p><Link to="#">Indianwear</Link></p>
                                                </div>
                                                <div className="column">
                                                    <p><Link to="#">Winterwear</Link></p>
                                                    <p><Link to="#">Footwear</Link></p>
                                                    <p><Link to="#">Toys & Games</Link></p>
                                                    <p><Link to="#">Feeding</Link></p>
                                                    <p><Link to="#">Sportswear</Link></p>
                                                    <p><Link to="#">Sleep & Lounge</Link></p>
                                                    <br />
                                                    <h3>Home</h3>
                                                    <br />
                                                    <p><Link to="#">Kitchen & Dining</Link></p>
                                                    <p><Link to="#">Decor</Link></p>
                                                    <p><Link to="#">Bedding</Link></p>
                                                    <p><Link to="#">Bath</Link></p>
                                                    <p><Link to="#">Storage</Link></p>
                                                    <p><Link to="#">Floor Coverings</Link></p>
                                                    <p><Link to="#">Kitchen Appliances</Link></p>
                                                    <br />
                                                    <h3>House of Nykaa</h3>
                                                    <br />
                                                    <p><Link to="#">Twenty Dresses By</Link></p>
                                                    <p><Link to="#">Gajra Gang</Link></p>
                                                    <p><Link to="#">Nykaa Feshion</Link></p>
                                                    <p><Link to="#">RSVP By Nykaa Fashion</Link></p>
                                                    <p><Link to="#">Nykaa By Nykaa</Link></p>
                                                </div>
                                                <div className="column">
                                                    <p><Link to="#">Pipa Bella</Link></p>
                                                    <p><Link to="#">IYKYK By Nykaa Fashion</Link></p>
                                                    <p><Link to="#">Kica</Link></p>
                                                    <p><Link to="#">Twig And Twine</Link></p>
                                                    <p><Link to="#">Likha By Nykaa Fashion</Link></p>
                                                    <p><Link to="#">Gloot</Link></p>
                                                    <p><Link to="#">Nyri</Link></p>
                                                    <p><Link to="#">Azai By Nykaa Fashion</Link></p>
                                                    <br />
                                                    <h3>Top Brands</h3>
                                                    <p><Link to="#">ONLY</Link></p>
                                                    <p><Link to="#">W</Link></p>
                                                    <p><Link to="#">Vero Moda</Link></p>
                                                    <p><Link to="#">Fabindia</Link></p>
                                                    <p><Link to="#">Na-Kd</Link></p>
                                                    <p><Link to="#">AND</Link></p>
                                                    <p><Link to="#">Revolve</Link></p>
                                                    <p><Link to="#">Label Shaurya Sanadhya</Link></p>
                                                    <p><Link to="#">Biba</Link></p>
                                                    <p><Link to="#">Koton</Link></p>
                                                    <p><Link to="#">I Saw It First</Link></p>
                                                    <p><Link to="#">Swatantra</Link></p>
                                                    <p><Link to="#">Forever New</Link></p>
                                                </div>


                                                <div className="column">
                                                    <Image src='https://www.nykaa.com/media/wysiwyg/2022/NF-megamenua.jpg' alt='photo' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </ListItem>
                            <ListItem><Link to="#">
                                <div className="d">
                                    <Button className="d-btn">Beauty Advice</Button>
                                    <div className="d-content" >
                                        <div className="row" style={{display: "flex"}}>
                                            <div className="column">

                                                <Image src='https://adn-static2.nykaa.com/media/wysiwyg/beautybook_2img.jpg' alt='nyka first' />
                                                <h3>Beauty Book</h3>
                                                <p>Nykaa's Digital Magzine</p>
                                            </div>
                                            <div className="column">
                                                <Image src='https://adn-static2.nykaa.com/media/wysiwyg/megamenu/nykaatv_1_img.png' alt='nyka center' />
                                                <h3>NYKAA TV</h3>
                                                <p>MasterClasses By Experts & Vloggers</p>
                                            </div>
                                            <div className="column">
                                                <Image width={240} borderRadius='5px' src='https://images-static.naikaa.com/media/wysiwyg/2021/Buying-Guide-Mega-menu-new.jpg' alt='nyka last' />
                                                <h3>BEAUTY BUYING GUIDES</h3>
                                                <p>Tips To Explore While You Shop</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link></ListItem>
                        </List>
                    </Box>
                    <Box w={'30%'} display={{base: 'grid',lg: 'flex'}} justifyContent={'space-evenly'} alignItems='center'>
                        <Box>
                            <InputGroup size='md'>
                                <Input
                                    w={{base: 100,md: 150,lg: 200}}
                                    type='text'
                                    placeholder='Search on Nykaa'
                                />
                                <InputLeftElement display={{base: 'grid',md: "flex"}} >
                                    <GoSearch /> 
                                </InputLeftElement>
                            </InputGroup>
                        </Box>

                        {detial.length==0 ? <Menu>
                <MenuButton as={Button} colorScheme='pink' fontSize={{base: 1,s: 5,md: 10}}>
                    Sign in
                </MenuButton>
                <MenuList float={'left'} width={21} p={2}>
                    <MenuGroup >
                        <Heading fontSize={20} fontWeight={400} m={"8px 0"}>Login / Create Account</Heading>
                        <Text fontSize={10}>Register Now and get <b>2000 Nykaa reward point instantly!</b></Text>
                        <MenuItem>
                            <Button w={'100%'} fontSize={13}>Sign in with Mobile/Email</Button>
                        </MenuItem>
                        <MenuItem>
                    
                            <Button colorScheme='white' textColor={'black'} rightIcon={<AiOutlineArrowRight />} w={'100%'} justifyContent={'space-between'} fontSize={15} onClick={login}>
                        <FcGoogle  /> Google
                                </Button>
                                
                        </MenuItem>
                    </MenuGroup>

                </MenuList>
                        </Menu>:detial.map((e) => (
                              <Box>
                            <Menu>
                <MenuButton as={Button} color='none' bg={'transparent'} fontSize={{base: 1,s: 5,md: 10}}>
                    {e.name}
                </MenuButton>
                <MenuList  width={100} p={2}>
                    <MenuGroup >
                                            <Heading fontSize={30} fontWeight={400} m={"8px 0"}>{e.name}</Heading>
                        <Text fontSize={10} p={5}><b>{e.email}</b></Text>
                       
                        <MenuItem>
                    
                            <Button colorScheme='white' textColor={'black'} rightIcon={<AiOutlineArrowRight />} w={'100%'} justifyContent={'space-between'} fontSize={15} onClick={logout}>
                        logout
                                </Button>
                                
                        </MenuItem>
                    </MenuGroup>

                </MenuList>
                        </Menu>
                        
                       
                                </Box>
                        )
                        
                        )}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 7.2H16.2V6.9C16.3 4.5 14.4 2.5 12 2.5C9.6 2.6 7.8 4.5 7.8 6.9V7.2H3.5C2.9 7.2 2.5 7.6 2.5 8.2V16.4C2.5 19.2 4.7 21.4 7.5 21.4H16.5C19.3 21.4 21.5 19.2 21.5 16.4V8.2C21.5 7.7 21.1 7.2 20.5 7.2ZM9.3 6.9C9.3 5.4 10.5 4.1 12 4C13.5 4.1 14.7 5.4 14.7 6.9V7.2H9.3V6.9ZM20 16.5C20 18.4 18.4 20 16.5 20H7.5C5.6 20 4 18.4 4 16.5V8.7H7.8V10.7C7.6 10.9 7.5 11.2 7.5 11.4C7.5 12 8 12.4 8.5 12.4C9 12.4 9.5 11.9 9.5 11.4C9.5 11.1 9.4 10.9 9.2 10.7V8.7H14.6V10.6C14.4 10.8 14.3 11.1 14.3 11.4C14.3 12 14.7 12.5 15.3 12.5C15.9 12.5 16.4 12.1 16.4 11.5C16.4 11.2 16.3 11 16.1 10.8V8.8H20V16.5Z" fill="black"></path></svg>
                        {/*<MdOutlineShoppingBasket fontSize={{base: "20px",md: 29}} />*/}
                    </Box>
                </Box>

            </Box>
            <Box boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;' position={'fixed'} w='100%' top={'100px'}>
                <Box w={'80%'} h={{lg: 38,md: "auto",s: "auto"}} m={'auto'} display={'flex'} justifyContent={'space-between'} fontWeight={200} fontSize={'14px'}>
                    <Box display={{base: 'grid',lg: 'flex'}} justifyContent={'space-evenly'} alignItems='center' gap={10} textAlign={'start'}>
                        <List  display={{base: 'grid',md: 'flex',lg: 'flex'}}>
          
            <ListItem>
                                <Link to="#">
                                    <div className="d bg-white z-10"  >
                                        <Button className="d-btn">Makeup</Button>
                                        <div className="d-content b-content">
                                            <div className="row">
                                                <div className="column">
                                                    <h3>HTML and CSS</h3>
                                                    <Link to="">Learn HTML</Link>
                                                    <Link to="">Learn CSS</Link>
                                                    <Link to="">Bootstrap 4</Link>
                                                </div>
                                                <div className="column">
                                                    <h3>Server Side</h3>
                                                    <Link to="">Learn PHP</Link>
                                                    <Link to="">Learn Python</Link>
                                                    <Link to="">Learn Node.js</Link>
                                                </div>
                                                <div className="column">
                                                    <h3>Frameworks</h3>
                                                    <Link to="">VueJS</Link>
                                                    <Link to="">Laravel</Link>
                                                    <Link to="">CodeIgniter</Link>
                                                </div>
                                                <div className="column">
                                                    <h3>Frameworks</h3>
                                                    <Link to="">VueJS</Link>
                                                    <Link to="">Laravel</Link>
                                                    <Link to="">CodeIgniter</Link>
                                                </div>
                                                <div className="column">
                                                    <h3>Frameworks</h3>
                                                    <Link to="">VueJS</Link>
                                                    <Link to="">Laravel</Link>
                                                    <Link to="">CodeIgniter</Link>
                                                </div>
                                                <div className="column">
                                                    <h3>Frameworks</h3>
                                                    <Link to="">VueJS</Link>
                                                    <Link to="">Laravel</Link>
                                                    <Link to="">CodeIgniter</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to="#">
                                    <div className="d">
                                        <Button className="d-btn">Skin</Button>
                                        <div className="d-content">
                                            <div className="row">
                                                <div className="column">
                                                    <h3>Makeup Collection Face</h3>
                                                    <p><Link to="#">Foundation</Link></p>
                                                    <p><Link to="#">Compact</Link></p>
                                                    <p><Link to="#">Highlighter</Link></p>
                                                    <p><Link to="#">Setting Spray</Link></p>
                                                    <p><Link to="#">Primer</Link></p>
                                                    <p><Link to="#">Concealer</Link></p>
                                                    <p><Link to="#">Blush</Link></p>
                                                    <p><Link to="#">Loose Powder</Link></p>
                                                    <p><Link to="#">Bronzer</Link></p>
                                                    <p><Link to="#">Makeup Remover</Link></p>
                                                    <p><Link to="#">Tinted Moisturizer</Link></p>
                                                    <p><Link to="#">Contouring</Link></p>
                                                    <p><Link to="#">BB & CC Cream</Link></p>
                                                    <p><Link to="#">Face Palette</Link></p>
                                                </div>
                                                <div className="column">
                                                    <h3>Eyes</h3>
                                                    <p><Link to="#">Eye Shadow</Link></p>
                                                    <p><Link to="#">Mascra</Link></p>
                                                    <p><Link to="#">Eyliner & kajal</Link></p>
                                                    <p><Link to="#">Brows</Link></p>
                                                    <p><Link to="#">Eye Primer</Link></p>
                                                    <p><Link to="#">Conclealer</Link></p>
                                                    <p><Link to="#">Lashes</Link></p>
                                                </div>
                                                <div className="column">
                                                    <h3>Lips</h3>
                                                    <p><Link to="#">Lipstick</Link></p>
                                                    <p><Link to="#">Liquid Lipstick</Link></p>
                                                    <p><Link to="#">Lip Balm</Link></p>
                                                    <p><Link to="#">Lip Plumper</Link></p>
                                                    <p><Link to="#">Lip Liner</Link></p>
                                                    <p><Link to="#">Lip Tint</Link></p>
                                                    <br />
                                                    <h3>Nails</h3>
                                                    <p><Link to="#">Nail Polish</Link></p>
                                                    <p><Link to="#">Nail Care</Link></p>
                                                    <p><Link to="#">Nail Polish Remover</Link></p>
                                                </div>
                                                <div className="column">
                                                    <h3>Tools & Brushes</h3>
                                                    <p><Link to="#">Face Brush</Link></p>
                                                    <p><Link to="#">Eye Brush</Link></p>
                                                    <p><Link to="#">Applicators</Link></p>
                                                    <p><Link to="#">Lip Brush</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </ListItem>

                            <ListItem>
                                <Link to="#">
                                    <div className="d">
                                        <Button className="d-btn">Hair</Button>
                                        <div className="d-content">
                                            <div className="row" style={{display: 'flex'}}>
                                                <div className="column">
                                                    <h3>What is new?</h3>
                                                    <p><Link to="">Recently Added</Link></p>
                                                    <br />
                                                    <h3>Women</h3>
                                                    <p><Link to="#">Indianwear</Link></p>
                                                    <p><Link to="#">Westerwear</Link></p>
                                                    <p><Link to="#">Footwear</Link></p>
                                                    <p><Link to="#">Bags</Link></p>
                                                    <p><Link to="#">Lingerie</Link></p>
                                                    <p><Link to="#">Sportswear</Link></p>
                                                    <p><Link to="#">Sleep & Lounge</Link></p>
                                                    <p><Link to="#">Jewellery</Link></p>
                                                    <p><Link to="#">Watches</Link></p>
                                                    <p><Link to="#">Accessories</Link></p>
                                                    <br />
                                                    <h3>Global Store</h3>
                                                    <br />
                                                    <h3>Men</h3>

                                                    <p><Link to="#">Topwear</Link></p>
                                                    <p><Link to="#">Bottomwear</Link></p>
                                                    <p><Link to="#">Ethnicwear</Link></p>
                                                </div>
                                                <div className="column">
                                                    <p><Link to="#">Topwear</Link></p>
                                                    <p><Link to="#">Bottomwear</Link></p>
                                                    <p><Link to="#">Ethnicwear</Link></p>
                                                    <p><Link to="#">Footwear</Link></p>
                                                    <p><Link to="#">Atheisure</Link></p>
                                                    <p><Link to="#">Innerwear & Sleepwear</Link></p>
                                                    <p><Link to="#">Watches</Link></p>
                                                    <p><Link to="#">Accessories</Link></p>
                                                    <p><Link to="#">Bags</Link></p>
                                                    <br />
                                                    <h3>Style Guide</h3>
                                                    <br />
                                                    <h3>Tech</h3>
                                                    <p><Link to="#">Smart Wearables</Link></p>
                                                    <p><Link to="#">Headphones</Link></p>
                                                    <p><Link to="#">Speakers</Link></p>
                                                    <p><Link to="#">Chargers & Cables</Link></p>
                                                    <p><Link to="#">Power Bank</Link></p>
                                                    <br />
                                                    <h3>Kids</h3>
                                                    <p><Link to="#">Westernwear</Link></p>
                                                    <p><Link to="#">Indianwear</Link></p>
                                                </div>
                                                <div className="column">
                                                    <p><Link to="#">Winterwear</Link></p>
                                                    <p><Link to="#">Footwear</Link></p>
                                                    <p><Link to="#">Toys & Games</Link></p>
                                                    <p><Link to="#">Feeding</Link></p>
                                                    <p><Link to="#">Sportswear</Link></p>
                                                    <p><Link to="#">Sleep & Lounge</Link></p>
                                                    <br />
                                                    <h3>Home</h3>
                                                    <br />
                                                    <p><Link to="#">Kitchen & Dining</Link></p>
                                                    <p><Link to="#">Decor</Link></p>
                                                    <p><Link to="#">Bedding</Link></p>
                                                    <p><Link to="#">Bath</Link></p>
                                                    <p><Link to="#">Storage</Link></p>
                                                    <p><Link to="#">Floor Coverings</Link></p>
                                                    <p><Link to="#">Kitchen Appliances</Link></p>
                                                    <br />
                                                    <h3>House of Nykaa</h3>
                                                    <br />
                                                    <p><Link to="#">Twenty Dresses By</Link></p>
                                                    <p><Link to="#">Gajra Gang</Link></p>
                                                    <p><Link to="#">Nykaa Feshion</Link></p>
                                                    <p><Link to="#">RSVP By Nykaa Fashion</Link></p>
                                                    <p><Link to="#">Nykaa By Nykaa</Link></p>
                                                </div>
                                                <div className="column">
                                                    <p><Link to="#">Pipa Bella</Link></p>
                                                    <p><Link to="#">IYKYK By Nykaa Fashion</Link></p>
                                                    <p><Link to="#">Kica</Link></p>
                                                    <p><Link to="#">Twig And Twine</Link></p>
                                                    <p><Link to="#">Likha By Nykaa Fashion</Link></p>
                                                    <p><Link to="#">Gloot</Link></p>
                                                    <p><Link to="#">Nyri</Link></p>
                                                    <p><Link to="#">Azai By Nykaa Fashion</Link></p>
                                                    <br />
                                                    <h3>Top Brands</h3>
                                                    <p><Link to="#">ONLY</Link></p>
                                                    <p><Link to="#">W</Link></p>
                                                    <p><Link to="#">Vero Moda</Link></p>
                                                    <p><Link to="#">Fabindia</Link></p>
                                                    <p><Link to="#">Na-Kd</Link></p>
                                                    <p><Link to="#">AND</Link></p>
                                                    <p><Link to="#">Revolve</Link></p>
                                                    <p><Link to="#">Label Shaurya Sanadhya</Link></p>
                                                    <p><Link to="#">Biba</Link></p>
                                                    <p><Link to="#">Koton</Link></p>
                                                    <p><Link to="#">I Saw It First</Link></p>
                                                    <p><Link to="#">Swatantra</Link></p>
                                                    <p><Link to="#">Forever New</Link></p>
                                                </div>


                                                <div className="column">
                                                    <Image src='https://www.nykaa.com/media/wysiwyg/2022/NF-megamenua.jpg' alt='photo' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </ListItem>
                            <ListItem><Link to="#">
                                <div className="d">
                                    <Button className="d-btn">Appliances</Button>
                                    <div className="d-content" >
                                        <div className="row" style={{display: "flex"}}>
                                            <div className="column">

                                                <Image src='https://adn-static2.nykaa.com/media/wysiwyg/beautybook_2img.jpg' alt='nyka first' />
                                                <h3>Beauty Book</h3>
                                                <p>Nykaa's Digital Magzine</p>
                                            </div>
                                            <div className="column">
                                                <Image src='https://adn-static2.nykaa.com/media/wysiwyg/megamenu/nykaatv_1_img.png' alt='nyka center' />
                                                <h3>NYKAA TV</h3>
                                                <p>MasterClasses By Experts & Vloggers</p>
                                            </div>
                                            <div className="column">
                                                <Image width={240} borderRadius='5px' src='https://images-static.naikaa.com/media/wysiwyg/2021/Buying-Guide-Mega-menu-new.jpg' alt='nyka last' />
                                                <h3>BEAUTY BUYING GUIDES</h3>
                                                <p>Tips To Explore While You Shop</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link></ListItem>
                            <ListItem><Link to="#">
                                <div className="d">
                                    <Button className="d-btn">Bath & Body</Button>
                                    <div className="d-content" >
                                        <div className="row" style={{display: "flex"}}>
                                            <div className="column">

                                                <Image src='https://adn-static2.nykaa.com/media/wysiwyg/beautybook_2img.jpg' alt='nyka first' />
                                                <h3>Beauty Book</h3>
                                                <p>Nykaa's Digital Magzine</p>
                                            </div>
                                            <div className="column">
                                                <Image src='https://adn-static2.nykaa.com/media/wysiwyg/megamenu/nykaatv_1_img.png' alt='nyka center' />
                                                <h3>NYKAA TV</h3>
                                                <p>MasterClasses By Experts & Vloggers</p>
                                            </div>
                                            <div className="column">
                                                <Image width={240} borderRadius='5px' src='https://images-static.naikaa.com/media/wysiwyg/2021/Buying-Guide-Mega-menu-new.jpg' alt='nyka last' />
                                                <h3>BEAUTY BUYING GUIDES</h3>
                                                <p>Tips To Explore While You Shop</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link></ListItem>
                            <ListItem><Link to="#">
                                <div className="d">
                                    <Button className="d-btn">Natural</Button>
                                    <div className="d-content" >
                                        <div className="row" style={{display: "flex"}}>
                                            <div className="column">

                                                <Image src='https://adn-static2.nykaa.com/media/wysiwyg/beautybook_2img.jpg' alt='nyka first' />
                                                <h3>Beauty Book</h3>
                                                <p>Nykaa's Digital Magzine</p>
                                            </div>
                                            <div className="column">
                                                <Image src='https://adn-static2.nykaa.com/media/wysiwyg/megamenu/nykaatv_1_img.png' alt='nyka center' />
                                                <h3>NYKAA TV</h3>
                                                <p>MasterClasses By Experts & Vloggers</p>
                                            </div>
                                            <div className="column">
                                                <Image width={240} borderRadius='5px' src='https://images-static.naikaa.com/media/wysiwyg/2021/Buying-Guide-Mega-menu-new.jpg' alt='nyka last' />
                                                <h3>BEAUTY BUYING GUIDES</h3>
                                                <p>Tips To Explore While You Shop</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link></ListItem>
                            <ListItem><Link to="#">
                                <div className="d">
                                    <Button className="d-btn">Mom & Baby</Button>
                                    <div className="d-content" >
                                        <div className="row" style={{display: "flex"}}>
                                            <div className="column">

                                                <Image src='https://adn-static2.nykaa.com/media/wysiwyg/beautybook_2img.jpg' alt='nyka first' />
                                                <h3>Beauty Book</h3>
                                                <p>Nykaa's Digital Magzine</p>
                                            </div>
                                            <div className="column">
                                                <Image src='https://adn-static2.nykaa.com/media/wysiwyg/megamenu/nykaatv_1_img.png' alt='nyka center' />
                                                <h3>NYKAA TV</h3>
                                                <p>MasterClasses By Experts & Vloggers</p>
                                            </div>
                                            <div className="column">
                                                <Image width={240} borderRadius='5px' src='https://images-static.naikaa.com/media/wysiwyg/2021/Buying-Guide-Mega-menu-new.jpg' alt='nyka last' />
                                                <h3>BEAUTY BUYING GUIDES</h3>
                                                <p>Tips To Explore While You Shop</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link></ListItem>
                            <ListItem><Link to="#">
                                <div className="d">
                                    <Button className="d-btn">Health & Wellness</Button>
                                    <div className="d-content" >
                                        <div className="row" style={{display: "flex"}}>
                                            <div className="column">

                                                <Image src='https://adn-static2.nykaa.com/media/wysiwyg/beautybook_2img.jpg' alt='nyka first' />
                                                <h3>Beauty Book</h3>
                                                <p>Nykaa's Digital Magzine</p>
                                            </div>
                                            <div className="column">
                                                <Image src='https://adn-static2.nykaa.com/media/wysiwyg/megamenu/nykaatv_1_img.png' alt='nyka center' />
                                                <h3>NYKAA TV</h3>
                                                <p>MasterClasses By Experts & Vloggers</p>
                                            </div>
                                            <div className="column">
                                                <Image width={240} borderRadius='5px' src='https://images-static.naikaa.com/media/wysiwyg/2021/Buying-Guide-Mega-menu-new.jpg' alt='nyka last' />
                                                <h3>BEAUTY BUYING GUIDES</h3>
                                                <p>Tips To Explore While You Shop</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link></ListItem>
                            <ListItem><Link to="#">
                                <div className="d">
                                    <Button className="d-btn">Men</Button>
                                    <div className="d-content" >
                                        <div className="row" style={{display: "flex"}}>
                                            <div className="column">

                                                <Image src='https://adn-static2.nykaa.com/media/wysiwyg/beautybook_2img.jpg' alt='nyka first' />
                                                <h3>Beauty Book</h3>
                                                <p>Nykaa's Digital Magzine</p>
                                            </div>
                                            <div className="column">
                                                <Image src='https://adn-static2.nykaa.com/media/wysiwyg/megamenu/nykaatv_1_img.png' alt='nyka center' />
                                                <h3>NYKAA TV</h3>
                                                <p>MasterClasses By Experts & Vloggers</p>
                                            </div>
                                            <div className="column">
                                                <Image width={240} borderRadius='5px' src='https://images-static.naikaa.com/media/wysiwyg/2021/Buying-Guide-Mega-menu-new.jpg' alt='nyka last' />
                                                <h3>BEAUTY BUYING GUIDES</h3>
                                                <p>Tips To Explore While You Shop</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link></ListItem>
                            <ListItem><Link to="#">
                                <div className="d">
                                    <Button className="d-btn">Fragrance</Button>
                                    <div className="d-content" >
                                        <div className="row" style={{display: "flex"}}>
                                            <div className="column">

                                                <Image src='https://adn-static2.nykaa.com/media/wysiwyg/beautybook_2img.jpg' alt='nyka first' />
                                                <h3>Beauty Book</h3>
                                                <p>Nykaa's Digital Magzine</p>
                                            </div>
                                            <div className="column">
                                                <Image src='https://adn-static2.nykaa.com/media/wysiwyg/megamenu/nykaatv_1_img.png' alt='nyka center' />
                                                <h3>NYKAA TV</h3>
                                                <p>MasterClasses By Experts & Vloggers</p>
                                            </div>
                                            <div className="column">
                                                <Image width={240} borderRadius='5px' src='https://images-static.naikaa.com/media/wysiwyg/2021/Buying-Guide-Mega-menu-new.jpg' alt='nyka last' />
                                                <h3>BEAUTY BUYING GUIDES</h3>
                                                <p>Tips To Explore While You Shop</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link></ListItem>
                            <ListItem><Link to="#">
                                <div className="d">
                                    <Button className="d-btn" di>Pop Ups</Button>
                                    <div className="d-content" >
                                        <div className="row" style={{display: "flex"}}>
                                            <div className="column">

                                                <Image src='https://adn-static2.nykaa.com/media/wysiwyg/beautybook_2img.jpg' alt='nyka first' />
                                                <h3>Beauty Book</h3>
                                                <p>Nykaa's Digital Magzine</p>
                                            </div>
                                            <div className="column">
                                                <Image src='https://adn-static2.nykaa.com/media/wysiwyg/megamenu/nykaatv_1_img.png' alt='nyka center' />
                                                <h3>NYKAA TV</h3>
                                                <p>MasterClasses By Experts & Vloggers</p>
                                            </div>
                                            <div className="column">
                                                <Image width={240} borderRadius='5px' src='https://images-static.naikaa.com/media/wysiwyg/2021/Buying-Guide-Mega-menu-new.jpg' alt='nyka last' />
                                                <h3>BEAUTY BUYING GUIDES</h3>
                                                <p>Tips To Explore While You Shop</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link></ListItem>
                        </List>





                    </Box>
                    <Box w={'30%'} display={{base: 'grid',lg: 'flex'}} justifyContent={'space-evenly'} alignItems='center'>
                        <Box>

                        </Box>

                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default Navbar