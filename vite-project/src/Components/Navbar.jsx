//Varinder
import React,{useState} from 'react'
import {Box,Heading,Text,Button,Input,InputGroup,InputLeftElement,Image,Flex,useDisclosure,Container,Center} from "@chakra-ui/react";
import {AiOutlineMobile,AiOutlineGift,AiOutlineArrowRight} from "react-icons/ai";
import {GoLocation,GoSearch} from "react-icons/go";
import {IoIosHelpCircleOutline} from "react-icons/io";
import
{
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';
import {BsArrowLeft,BsArrowRight} from "react-icons/bs";
//import {MdOutlineShoppingBasket} from "react-icons/md";
import {Link} from 'react-router-dom';
import {useGoogleLogin} from '@react-oauth/google';
import axios from 'axios';
import
{
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react';
import {RiDeleteBin6Line} from "react-icons/ri";
import
{
    List,
    ListItem
} from '@chakra-ui/react';
import {Select} from '@chakra-ui/react'
import {FcGoogle} from "react-icons/fc";
import {IoIosInformationCircleOutline} from "react-icons/io";
import {ChevronDownIcon,ChevronRightIcon} from "@chakra-ui/icons";
import "../App.css";
import Logo from '../../public/loGo1.jpg';
import {RiCoupon2Line} from "react-icons/ri";
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
    const Price=249;
    const discount=30;
    const shipping=70;
    //const totalprice=((shipping+Price)-discount);
    const offerPrice=(Price-discount);
    const {isOpen,onOpen,onClose}=useDisclosure();
    const btnRef=React.useRef();
    const [detial,setDetail]=useState([]);
    const [verfiy,Setverfiy]=useState(false);
    const [count,setCount]=useState(0);
    const [price,setPrice]=useState(Price)
    const [quantity,setQuantity]=useState(1);

    const handleClick=(e) =>
    {
        setQuantity(e.target.value)
        
    }
    console.log(price)
    const login=useGoogleLogin({
        onSuccess: async respose =>
        {
            try
            {
                const res=await axios.get("https://www.googleapis.com/oauth2/v3/userinfo",{
                    headers: {
                        "Authorization": `Bearer ${respose.access_token}`
                    }
                })
                Setverfiy(true)
                setDetail([...detial,res.data])

            } catch(err)
            {
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

            <Box width={'full'} h={10} backgroundImage={`url(https://adn-static1.nykaa.com/media/wysiwyg/2021/common-strip.jpg)`} position={'fixed'} top='0' className='z-20'>

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

            <Box boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' position={'fixed'} w='100%' top={10} bgColor={'white'} className="z-20 ">

                <Box w={'80%'} h={{lg: 68,md: "auto",s: "auto"}} m={'auto'} display={'flex'} justifyContent={'space-between'} fontWeight={500} fontSize={'16px'}>
                    <Box display={{base: 'grid',lg: 'flex'}} justifyContent={'space-evenly'} alignItems='center' gap={10} textAlign={'start'}>
                        <List spacing={1} display={{base: 'grid',md: 'flex',lg: 'flex'}} >
                            <Heading textAlign={'center'} ><Link to="#"><Image w={'83px'} src={Logo} /></Link></Heading>

                            <ListItem _hover={{color: 'white'}} textAlign={{base: "start",md: 'center',lg: 'center'}}>
                                <li><Link to="/product" ><div className="d">
                                    <Button className="d-btn">Categories</Button> </div> </Link> </li> </ListItem>
                            <ListItem>
                                <Link to="#">
                                    <div className="d">
                                        <Button className="d-btn">Brands</Button>
                                        <div className="d-content b-content">
                                            <div className="row text-xs font-thin" style={{backgroundColor: 'white',zIndex: 'inherit'}} >
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

                        {detial.length==0? <Menu>
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
                                            <FcGoogle /> Google
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
                                    <MenuList width={100} p={2}>
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
                        {count===1? <Box><svg width="24" height="24" onClick={onOpen} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 7.2H16.2V6.9C16.3 4.5 14.4 2.5 12 2.5C9.6 2.6 7.8 4.5 7.8 6.9V7.2H3.5C2.9 7.2 2.5 7.6 2.5 8.2V16.4C2.5 19.2 4.7 21.4 7.5 21.4H16.5C19.3 21.4 21.5 19.2 21.5 16.4V8.2C21.5 7.7 21.1 7.2 20.5 7.2ZM9.3 6.9C9.3 5.4 10.5 4.1 12 4C13.5 4.1 14.7 5.4 14.7 6.9V7.2H9.3V6.9ZM20 16.5C20 18.4 18.4 20 16.5 20H7.5C5.6 20 4 18.4 4 16.5V8.7H7.8V10.7C7.6 10.9 7.5 11.2 7.5 11.4C7.5 12 8 12.4 8.5 12.4C9 12.4 9.5 11.9 9.5 11.4C9.5 11.1 9.4 10.9 9.2 10.7V8.7H14.6V10.6C14.4 10.8 14.3 11.1 14.3 11.4C14.3 12 14.7 12.5 15.3 12.5C15.9 12.5 16.4 12.1 16.4 11.5C16.4 11.2 16.3 11 16.1 10.8V8.8H20V16.5Z" fill="black"></path></svg>

                            <Drawer
                                isOpen={isOpen}
                                placement='right'
                                onClose={onClose}
                                finalFocusRef={btnRef}
                            >
                                <DrawerOverlay />
                                <DrawerContent>

                                    <DrawerHeader display={'flex'}><Text paddingTop={'5px'} mr={2}>
                                        <BsArrowLeft />
                                    </Text>
                                        Bag</DrawerHeader>
                                    <hr />
                                    <DrawerBody mt={20}>
                                        <Container maxW={'lg'} alignItems={'center'}>
                                            <Box w={'70%'} m='auto'>
                                                <span >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="182" height="186" viewBox="0 0 182 186" fill="none"><g clip-path="url(#clip0_3039_24342)"><path d="M67.4009 176.307L9.61955 118.526C-3.20961 105.697 -3.20961 84.6433 9.61955 71.7138L67.4009 13.9325C80.2301 1.10332 101.284 1.10332 114.213 13.9325L171.995 71.7138C184.824 84.543 184.824 105.597 171.995 118.526L114.213 176.307C101.284 189.237 80.3304 189.237 67.4009 176.307Z" fill="#FDE3E0"></path><path d="M97.1534 135.613C96.5243 135.54 95.886 135.468 95.2568 135.404C95.3207 136.398 96.3328 147.804 108.104 149.518L108.378 147.658C98.667 146.245 97.3266 137.528 97.1534 135.613Z" fill="#45AAAA"></path><path d="M87.862 168.092L86.8772 166.642C91.2083 163.706 93.2599 159.366 92.9863 153.731C92.7766 149.436 91.2265 145.962 91.2083 145.926L92.804 145.197C92.8678 145.352 99.4602 160.223 87.862 168.092Z" fill="white"></path><path d="M101.676 168.092C103.166 168.092 104.375 166.884 104.375 165.393C104.375 163.903 103.166 162.694 101.676 162.694C100.185 162.694 98.9768 163.903 98.9768 165.393C98.9768 166.884 100.185 168.092 101.676 168.092Z" fill="white"></path><path d="M81.3699 154.916C82.8604 154.916 84.0688 153.708 84.0688 152.217C84.0688 150.727 82.8604 149.518 81.3699 149.518C79.8793 149.518 78.6709 150.727 78.6709 152.217C78.6709 153.708 79.8793 154.916 81.3699 154.916Z" fill="#EC8BB9"></path><path d="M79.724 113.756C81.5821 113.258 82.6349 111.163 82.0756 109.076C81.5163 106.99 79.5566 105.702 77.6986 106.2C75.8405 106.698 74.7876 108.793 75.347 110.88C75.9063 112.967 77.8659 114.254 79.724 113.756Z" fill="#BCBEC0"></path><path d="M104.362 107.156C106.221 106.658 107.273 104.562 106.714 102.476C106.155 100.389 104.195 99.1011 102.337 99.5991C100.479 100.097 99.4261 102.193 99.9854 104.279C100.545 106.366 102.504 107.654 104.362 107.156Z" fill="#BCBEC0"></path><path d="M100.408 132.395L98.8857 132.805C91.4363 134.793 83.7315 130.644 81.2969 123.331L77.0935 110.694L80.5128 109.572L84.698 122.192C86.549 127.69 92.3481 130.817 97.9557 129.331L99.4784 128.921C104.539 127.562 107.539 122.365 106.18 117.304C106.135 117.122 106.08 116.949 106.016 116.775L101.794 104.074L105.214 102.952L109.435 115.636C111.706 122.502 107.986 129.905 101.12 132.185C100.883 132.258 100.646 132.331 100.408 132.395Z" fill="#BCBEC0"></path><path d="M49.5295 63.0152L88.8011 50.6693C98.1654 47.7241 108.15 52.9306 111.095 62.2948L125.073 106.736L51.8819 129.75L37.9039 85.3089C34.9587 75.9446 40.1652 65.9603 49.5295 63.0152Z" fill="#E04D4C"></path><path d="M64.4193 58.3376L100.235 47.0767C110.557 43.8307 121.553 49.566 124.799 59.8876L138.23 102.597L65.0394 125.611L51.6084 82.9017C48.3624 72.58 54.0976 61.5836 64.4193 58.3376Z" fill="#F37E7C"></path><path d="M89.5282 110.008C91.3863 109.51 92.4391 107.415 91.8798 105.328C91.3205 103.241 89.3608 101.954 87.5028 102.452C85.6447 102.95 84.5918 105.045 85.1512 107.132C85.7105 109.218 87.6702 110.506 89.5282 110.008Z" fill="black"></path><path d="M114.164 103.399C116.022 102.901 117.075 100.805 116.516 98.7186C115.957 96.6319 113.997 95.344 112.139 95.8421C110.281 96.3401 109.228 98.4354 109.787 100.522C110.346 102.609 112.306 103.897 114.164 103.399Z" fill="black"></path><path d="M110.201 128.638L108.678 129.048C101.229 131.036 93.5242 126.887 91.0897 119.575L86.8862 106.937L90.3055 105.815L94.4907 118.435C96.3417 123.933 102.141 127.061 107.748 125.574L109.271 125.164C114.332 123.805 117.332 118.608 115.973 113.548C115.927 113.365 115.873 113.192 115.809 113.019L111.587 100.317L115.006 99.1957L119.228 111.879C121.499 118.745 117.778 126.149 110.912 128.428C110.675 128.501 110.438 128.574 110.201 128.638Z" fill="black"></path><path d="M53.1403 14.6528C53.7968 14.1057 74.5222 0 74.5222 0L78.8715 21.6555L90.8071 14.3975L82.227 67.6471L75.1513 37.3204L60.2159 45.1254L53.1403 14.6528Z" fill="white"></path><path d="M103.472 4.32196L121.088 10.0755L95.6489 38.9342L103.472 4.32196Z" fill="white"></path></g><defs><clipPath id="clip0_3039_24342"><rect width="181.605" height="186" fill="white"></rect></clipPath></defs></svg>
                                                    <g clip-path="url(#clip0_3039_24342)"><path d="M67.4009 176.307L9.61955 118.526C-3.20961 105.697 -3.20961 84.6433 9.61955 71.7138L67.4009 13.9325C80.2301 1.10332 101.284 1.10332 114.213 13.9325L171.995 71.7138C184.824 84.543 184.824 105.597 171.995 118.526L114.213 176.307C101.284 189.237 80.3304 189.237 67.4009 176.307Z" fill="#FDE3E0"></path><path d="M97.1534 135.613C96.5243 135.54 95.886 135.468 95.2568 135.404C95.3207 136.398 96.3328 147.804 108.104 149.518L108.378 147.658C98.667 146.245 97.3266 137.528 97.1534 135.613Z" fill="#45AAAA"></path><path d="M87.862 168.092L86.8772 166.642C91.2083 163.706 93.2599 159.366 92.9863 153.731C92.7766 149.436 91.2265 145.962 91.2083 145.926L92.804 145.197C92.8678 145.352 99.4602 160.223 87.862 168.092Z" fill="white"></path><path d="M101.676 168.092C103.166 168.092 104.375 166.884 104.375 165.393C104.375 163.903 103.166 162.694 101.676 162.694C100.185 162.694 98.9768 163.903 98.9768 165.393C98.9768 166.884 100.185 168.092 101.676 168.092Z" fill="white"></path><path d="M81.3699 154.916C82.8604 154.916 84.0688 153.708 84.0688 152.217C84.0688 150.727 82.8604 149.518 81.3699 149.518C79.8793 149.518 78.6709 150.727 78.6709 152.217C78.6709 153.708 79.8793 154.916 81.3699 154.916Z" fill="#EC8BB9"></path><path d="M79.724 113.756C81.5821 113.258 82.6349 111.163 82.0756 109.076C81.5163 106.99 79.5566 105.702 77.6986 106.2C75.8405 106.698 74.7876 108.793 75.347 110.88C75.9063 112.967 77.8659 114.254 79.724 113.756Z" fill="#BCBEC0"></path><path d="M104.362 107.156C106.221 106.658 107.273 104.562 106.714 102.476C106.155 100.389 104.195 99.1011 102.337 99.5991C100.479 100.097 99.4261 102.193 99.9854 104.279C100.545 106.366 102.504 107.654 104.362 107.156Z" fill="#BCBEC0"></path><path d="M100.408 132.395L98.8857 132.805C91.4363 134.793 83.7315 130.644 81.2969 123.331L77.0935 110.694L80.5128 109.572L84.698 122.192C86.549 127.69 92.3481 130.817 97.9557 129.331L99.4784 128.921C104.539 127.562 107.539 122.365 106.18 117.304C106.135 117.122 106.08 116.949 106.016 116.775L101.794 104.074L105.214 102.952L109.435 115.636C111.706 122.502 107.986 129.905 101.12 132.185C100.883 132.258 100.646 132.331 100.408 132.395Z" fill="#BCBEC0"></path><path d="M49.5295 63.0152L88.8011 50.6693C98.1654 47.7241 108.15 52.9306 111.095 62.2948L125.073 106.736L51.8819 129.75L37.9039 85.3089C34.9587 75.9446 40.1652 65.9603 49.5295 63.0152Z" fill="#E04D4C"></path><path d="M64.4193 58.3376L100.235 47.0767C110.557 43.8307 121.553 49.566 124.799 59.8876L138.23 102.597L65.0394 125.611L51.6084 82.9017C48.3624 72.58 54.0976 61.5836 64.4193 58.3376Z" fill="#F37E7C"></path><path d="M89.5282 110.008C91.3863 109.51 92.4391 107.415 91.8798 105.328C91.3205 103.241 89.3608 101.954 87.5028 102.452C85.6447 102.95 84.5918 105.045 85.1512 107.132C85.7105 109.218 87.6702 110.506 89.5282 110.008Z" fill="black"></path><path d="M114.164 103.399C116.022 102.901 117.075 100.805 116.516 98.7186C115.957 96.6319 113.997 95.344 112.139 95.8421C110.281 96.3401 109.228 98.4354 109.787 100.522C110.346 102.609 112.306 103.897 114.164 103.399Z" fill="black"></path><path d="M110.201 128.638L108.678 129.048C101.229 131.036 93.5242 126.887 91.0897 119.575L86.8862 106.937L90.3055 105.815L94.4907 118.435C96.3417 123.933 102.141 127.061 107.748 125.574L109.271 125.164C114.332 123.805 117.332 118.608 115.973 113.548C115.927 113.365 115.873 113.192 115.809 113.019L111.587 100.317L115.006 99.1957L119.228 111.879C121.499 118.745 117.778 126.149 110.912 128.428C110.675 128.501 110.438 128.574 110.201 128.638Z" fill="black"></path><path d="M53.1403 14.6528C53.7968 14.1057 74.5222 0 74.5222 0L78.8715 21.6555L90.8071 14.3975L82.227 67.6471L75.1513 37.3204L60.2159 45.1254L53.1403 14.6528Z" fill="white"></path><path d="M103.472 4.32196L121.088 10.0755L95.6489 38.9342L103.472 4.32196Z" fill="white"></path></g>
                                                    {/*<defs><clipPath id="clip0_3039_24342"><rect width="181.605" height="186" fill="white"></rect></clipPath></defs>*/}
                                                </span>
                                            </Box>
                                            <Heading fontSize={18} m={'15px 0px'}>Your Shopping Bag is Empty</Heading>
                                            <Text fontSize={11} m={'15px 0px'}>This feels too light! Go on, add all your favourites</Text>
                                            <Box w={'55%'} m='auto'>
                                                <Button colorScheme='pink' variant='solid'>
                                                    Start Shooping
                                                </Button>
                                            </Box>
                                        </Container>
                                    </DrawerBody>

                                    <DrawerFooter>

                                    </DrawerFooter>
                                </DrawerContent>
                            </Drawer>
                        </Box>
                            :<Box><svg width="24" height="24" onClick={onOpen} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 7.2H16.2V6.9C16.3 4.5 14.4 2.5 12 2.5C9.6 2.6 7.8 4.5 7.8 6.9V7.2H3.5C2.9 7.2 2.5 7.6 2.5 8.2V16.4C2.5 19.2 4.7 21.4 7.5 21.4H16.5C19.3 21.4 21.5 19.2 21.5 16.4V8.2C21.5 7.7 21.1 7.2 20.5 7.2ZM9.3 6.9C9.3 5.4 10.5 4.1 12 4C13.5 4.1 14.7 5.4 14.7 6.9V7.2H9.3V6.9ZM20 16.5C20 18.4 18.4 20 16.5 20H7.5C5.6 20 4 18.4 4 16.5V8.7H7.8V10.7C7.6 10.9 7.5 11.2 7.5 11.4C7.5 12 8 12.4 8.5 12.4C9 12.4 9.5 11.9 9.5 11.4C9.5 11.1 9.4 10.9 9.2 10.7V8.7H14.6V10.6C14.4 10.8 14.3 11.1 14.3 11.4C14.3 12 14.7 12.5 15.3 12.5C15.9 12.5 16.4 12.1 16.4 11.5C16.4 11.2 16.3 11 16.1 10.8V8.8H20V16.5Z" fill="black"></path></svg>

                                <Drawer
                                    isOpen={isOpen}
                                    placement='right'
                                    onClose={onClose}
                                    finalFocusRef={btnRef}
                                >
                                    <DrawerOverlay />
                                    <DrawerContent>

                                        <DrawerHeader display={'flex'}><Text paddingTop={'5px'} mr={2}>
                                            <BsArrowLeft />
                                        </Text>
                                            Bag <Text fontWeight={100} ml='10px' fontSize={10} mt='10px'>
                                                {quantity} items
                                            </Text>
                                        </DrawerHeader>
                                        <hr />
                                        <DrawerBody w={'98%'} >
                                          { verfiy ?"": <Box border={"1px solid lightgray"} w='100%' borderRadius={5} p='5px' mt={3}>
                                                <Text fontSize={14}>2000 Reward Points on new registration</Text>
                                                <Button w={'100%'} h={8} bg={'transparent'} border={'1px solid #ff8fba'} color='#ff8fba' m={'10px 0'} fontSize={15} _hover={{bg: "transparent"}}>Login/Register</Button>
                                            </Box>}
                                            <Box border={"1px solid lightgray"} w='100%' borderRadius={5} p='1px' mt={3}>
                                                <Box display={'flex'} gap={2} w='100%' borderRadius={5} p='1px' mt={3}>
                                                    <Image w={20} src='https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/6/a6bf37c8906087770671aw__1_.jpg' alt='product_cart' />
                                                    <Text fontSize={14}><Center>Mamaearth Ubtan Face Wash With Turmeric & Saffron For Tan</Center></Text>
                                                    <Text color={'#ff8fba'}><RiDeleteBin6Line /></Text>
                                                </Box>
                                                <hr />
                                                <Box display={'flex'} justifyContent={'space-between'}>

                                                    {/*<Menu>
                                                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg={'transparent'} _hover={{bg: "transparent"}}>
                                                            Quality
                                                        </MenuButton>
                                                        <MenuList onChange={}>
                                                            {/*<MenuItem  value={1}>1</MenuItem>
                                                            <MenuItem  value={2}>2</MenuItem>
                                                            <MenuItem  value={3}>3</MenuItem>
                                                            <MenuItem  value={4}>4</MenuItem>
                                                            <MenuItem  value={5}>5</MenuItem>*/}
                                                    {/*</MenuList>
                                                    </Menu>*/}
                                                    <Select placeholder='Quality' onChange={handleClick}>
                                                        <option value='1'>1</option>
                                                        <option value='2'>2</option>
                                                        <option value='1'>3</option>
                                                        <option value='4'>4</option>
                                                        <option value='5'>5</option>

                                                    </Select>
                                                    <Box>
                                                        <Text p={'8px 8px'} fontWeight={500} textDecoration='line-through'>₹{Price}</Text>
                                                        <Text>₹{offerPrice}</Text>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box border={"1px solid lightgray"} w='100%' borderRadius={5} p='5px' gap={5} mt={3} display={'flex'}>
                                                <Text m={'15px 1px'}>
                                                    <RiCoupon2Line fill='#ff8fba' />
                                                </Text>
                                                <Box>
                                                    <Text fontWeight={500}>Coupons</Text>
                                                    <Text color={'#ff8fba'} fontSize={15}>Apply now and asve extra!</Text>
                                                </Box>
                                                <Text m={'10px 1px'}>
                                                    <ChevronRightIcon />
                                                </Text>
                                            </Box>
                                            <Box border={"1px solid lightgray"} w='100%' borderRadius={5} p='5px' gap={5} mt={3}>
                                                <Text fontWeight={700}>
                                                    Price Details
                                                </Text>
                                                <Box p={5}>
                                                    <Box display={'flex'} justifyContent='space-between'>
                                                        <Text>Bag MRP (1 items)</Text>
                                                        <Text>₹{price*Number(quantity)}</Text>
                                                    </Box>
                                                    <Box display={'flex'} justifyContent='space-between'>
                                                        <Text>Bag Dicount</Text>
                                                        <Text>₹{discount*Number(quantity)}</Text>
                                                    </Box>
                                                    <Box display={'flex'} justifyContent='space-between'>
                                                        <Text>Shipping</Text>
                                                        <Text>₹{shipping}</Text>
                                                    </Box>
                                                </Box>
                                                <Box display={'flex'} justifyContent='space-between'>
                                                    <Text fontWeight={700}>You Pay</Text>
                                                    <Text>₹{(price*Number(quantity)+shipping)-discount*Number(quantity)}</Text>
                                                </Box>
                                            </Box>
                                        </DrawerBody>
                                        <hr />
                                        <DrawerFooter justifyContent={'space-between'}>
                                            <Box>
                                                <Heading fontSize={17}>₹{(price*Number(quantity)+shipping)-discount*Number(quantity)}</Heading>
                                                <Box display={'flex'} gap={1}><Text fontSize={12} >Grand Total </Text> <IoIosInformationCircleOutline fontSize={15} color='#ff8fba' /></Box>
                                            </Box>
                                            <Button colorScheme='pink' variant='solid' rightIcon={<BsArrowRight />}>
                                                Proceed
                                            </Button>
                                        </DrawerFooter>
                                    </DrawerContent>
                                </Drawer>
                            </Box>}
                    </Box>
                </Box>

            </Box>
            <Box boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;' position={'relative'} className='z-10 bg-white' w='100%' top={'100px'}>
                <Box w={'80%'} h={{lg: 38,md: "auto",s: "auto"}} m={'auto'} display={'flex'} justifyContent={'space-between'} fontWeight={100} fontSize={'14px'}>
                    <Box display={{base: 'grid',lg: 'flex'}} justifyContent={'space-evenly'} alignItems='center' gap={10} textAlign={'start'}>
                        <List display={{base: 'grid',md: 'flex',lg: 'flex'}}>

                            <ListItem>
                                <Link to="/makeup">
                                    <div className="d"  >
                                        <Button className="d-btn">Makeup</Button>
                                        <div className="d-content b-content">
                                            <div className="row">
                                                <div className="column">
                                                    <h3>Face</h3>
                                                    <Link to="#">Face Primer</Link>
                                                    <Link to="#">Concealer</Link>
                                                    <Link to="#">Foundation</Link>
                                                    <Link to="#">Compact</Link>
                                                    <Link to="#">Contour</Link>
                                                    <Link to="#">Loose Powder</Link>
                                                    <Link to="#">Tinted Moisturizer</Link>
                                                    <Link to="#">Blush</Link>
                                                    <Link to="#">Bronzer</Link>
                                                    <Link to="#">BB & CC Cream</Link>
                                                    <Link to="#">Highlighters</Link>
                                                    <Link to="#">Setting Spray</Link>
                                                    <Link to="#">Makeup Remover</Link>
                                                    <Link to="#">Sindoor</Link>
                                                </div>
                                                <div className="column">
                                                    <h3>Eyes</h3>
                                                    <Link to="#">Kajal</Link>
                                                    <Link to="#">Eyeliner</Link>
                                                    <Link to="#">Mascara</Link>
                                                    <Link to="#">Eye Shadow</Link>
                                                    <Link to="#">Eye Brow Enchancers</Link>
                                                    <Link to="#">Eye Primer</Link>
                                                    <Link to="#">False EyeLashes</Link>
                                                    <Link to="#">Eye Makeup Remover</Link>
                                                    <Link to="#">Under Eye Concealer</Link>
                                                    <Link to="#">Contact Lenses</Link>
                                                    <br />
                                                    <h3>Makeup Kits & Combos</h3>
                                                    <Link to="#">Makeup Kits</Link>
                                                    <Link to="#">Makeup Combos</Link>

                                                </div>
                                                <div className="column">
                                                    <h3>Lips</h3>
                                                    <Link to="#">Lipstick</Link>
                                                    <Link to="#">Liquid Lipstick</Link>
                                                    <Link to="#">Liquid Crayon</Link>
                                                    <Link to="#">Lip Gloss</Link>
                                                    <Link to="#">Lip Liner</Link>
                                                    <Link to="#">Lip Plumper</Link>
                                                    <Link to="#">Lip Stain</Link>
                                                    <br />
                                                    <h3>Nails</h3>
                                                    <Link to="#">Nail Polish</Link>
                                                    <Link to="#">Nail Art Kits</Link>
                                                    <Link to="#">Nail Care</Link>
                                                    <Link to="#">Nail Polish Remover</Link>
                                                </div>
                                                <div className="column">
                                                    <h3>Tools 7 Brushes</h3>
                                                    <Link to="#">Face Brush</Link>
                                                    <Link to="#">Eye Brush</Link>
                                                    <Link to="#">Lip Brush</Link>
                                                    <Link to="#">Brush Sets</Link>
                                                    <Link to="#">Brush Cleaners</Link>
                                                    <Link to="#">Sponges & Applicators</Link>
                                                    <Link to="#">Eyelash Curlers</Link>
                                                    <Link to="#">Tweezers</Link>
                                                    <Link to="#">Sharpeners</Link>
                                                    <Link to="#">Mirrors</Link>
                                                    <Link to="#">Makeup Pouches</Link>
                                                    <div className="column">
                                                        <h3>Multi-Functional Makeup Palettes</h3>
                                                    </div>
                                                </div>

                                                <br />


                                            </div>
                                            <div className="column">
                                                <h3>Top Brands</h3>
                                                <Link to="#">Kay Beauty</Link>
                                                <Link to="#">Huda Beauty</Link>
                                                <Link to="#">Charlotte Tilbury</Link>
                                                <Link to="#">Maybelline New York</Link>
                                                <Link to="#">L'Oreal Paris</Link>
                                                <Link to="#">Lakme</Link>
                                                <Link to="#">Nykaa Cosmetics</Link>
                                                <Link to="#">Nyx Pro.Makeup</Link>
                                            </div>
                                            <div className="column">
                                                <h3>Quicj Links</h3>
                                                <Link to="#">Combos @ Nykaa</Link>
                                                <Link to="#">New Launches</Link>
                                                <Link to="#">NFBA Nominees 2022</Link>
                                                <Link to="#">Gifts @ Nykaa</Link>
                                                <Link to="#">The Gift Store</Link>

                                            </div>


                                        </div>

                                    </div>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/skin">
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