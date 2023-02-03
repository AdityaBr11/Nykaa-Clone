//Varinder
import React,{useEffect, useState} from 'react'
import {Box,Heading,Text,Button,Input,InputGroup,InputLeftElement,Image,useDisclosure,Container,Center, useToast} from "@chakra-ui/react";
import {AiOutlineMobile,AiOutlineGift,AiOutlineArrowRight} from "react-icons/ai";
import {GoLocation,GoSearch} from "react-icons/go";
import {IoIosHelpCircleOutline} from "react-icons/io";
import {FcGoogle} from 'react-icons/fc'
import
{
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
} from '@chakra-ui/react';
import {BsArrowLeft} from "react-icons/bs";

import {Link} from 'react-router-dom';
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
import
{
    AlertDialog,
    AlertDialogBody,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from '@chakra-ui/react';
import "../App.css";
import Logo from '../../public/loGo1.jpg';
import Menus from './Menu';
import DrawerLogin from './DrawerLogin';
import Drawers from './DrawerNologin';
import { getCartItem } from '../redux/products/actions';
import { useDispatch, useSelector } from 'react-redux';
import { googleSignup, setUser, userlogout } from '../redux/Auth/action';
import { auth } from '../firebase/firebase';
const Navbar=() =>{
    const toast = useToast()

    const cancelRef=React.useRef()

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
    const shipping=70;

    const { currentUser, loading, status } = useSelector((store) => store.user);
    //
    const cartItem = useSelector((store) => store.productsReducer.cart);
    const dispatch = useDispatch();
    const [nme, setNme] = useState([]);

    useEffect(() =>{
        dispatch(getCartItem());
        auth.onAuthStateChanged((authUser)=>{
            if(authUser){
              dispatch(setUser(authUser))
              setNme(setUser(authUser).payload.displayName)
              Setverfiy(true)
            }else{
              dispatch(setUser(null));
              setNme("")
              Setverfiy(false)
            }
          })
            

      }, [dispatch]);
    console.log(cartItem,"CartPage")

    // console.log(nme,"user")

    // console.log(currentUser?.displayName,"curnt")
   
    const {isOpen,onOpen,onClose}=useDisclosure();
    const btnRef=React.useRef();
    const [verfiy,Setverfiy]=useState(false);

    const googleLogin=()=>{
        dispatch(googleSignup())
        Setverfiy(true)
    };

    const logout=() =>{
        if(currentUser){
            dispatch(userlogout())
            toast({
                title: 'Login',
                position:"top-center",
                description: "logout successfull",
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
        }
        Setverfiy(false)
    }
    return (
        <Box>

            <Box width={'full'} h={10} backgroundImage={`url(https://adn-static1.nykaa.com/media/wysiwyg/2022/cms/banner/top_strip_16dec22.jpg)`} position={'fixed'} top='0' className='z-20'>

                <Box display={'flex'} w={{base: '100%',md: '80%',lg: '80%'}} m={'auto'} justifyContent={{base: 'space-between',md: 'none'}} Text={2} alignItems={'center'} textAlign='center'  >
                    <Link to="#" rel='noopener noreferrer'><Text fontWeight={{base: 650}} fontSize={{base: '11.8px',md: '14px',lg: '18px'}} _hover={{color: 'white'}} color='white' className='animate-pulse duration-75'>BEAUTY BONANZA Get Your Daily Dose Of Amazing Deals</Text></Link>
                    <Menus />
                    <Box display={'flex'}> {
                        Nav1List.map((e,i) =>
                        {
                            return (<Box key={i} display={{base: 'none',md: 'none',lg: 'flex'}} fontSize={{base: '10px',md: '11px',lg: '15px'}} flexDirection={{base: 'none',s: "none",md: 'row'}} alignItems={'center'} fontWeight={{base: 100,lg: 500}} _hover={{color: 'white'}} color='white' m={{base: '0px',lg: '0rem 0.9rem'}}>
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

                <Box w={'80%'} h={{lg: 68,md: "auto",s: "auto"}} m={'auto'} display={'flex'} justifyContent={'space-between'} className="items-center" fontWeight={500} fontSize={'16px'}>
                    <Box display={{base: 'grid',lg: 'flex'}} justifyContent={'space-evenly'} alignItems='center' gap={10} textAlign={'start'}>
                        <List spacing={1} display={{base: 'grid',md: 'flex',lg: 'flex'}} >
                            <Heading textAlign={'center'} ><Link to="/"><Image w={'83px'} src={Logo} /></Link></Heading>

                            <ListItem _hover={{color: 'white'}} textAlign={{base: "start",md: 'center',lg: 'center'}} >

                                <li><Link to="/product" ><div className="d">
                                    <Button className="d-btn">Categories</Button> </div> </Link> </li> </ListItem>

                            <ListItem>
                                <Link to="#">
                                    <Box className="d">
                                        <Button className="d-btn">Brands</Button>
                                    </Box>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to="#">
                                    <Box className="d">
                                        <Button className="d-btn">Luxe</Button>
                                        <Box className="d-content">
                                            <Box className="row">
                                                <Box className="column">
                                                    <h3>Makeup Collection Face</h3>
                                                    <Text><Link to="#">Foundation</Link></Text>
                                                    <Text><Link to="#">Compact</Link></Text>
                                                    <Text><Link to="#">Highlighter</Link></Text>
                                                    <Text><Link to="#">Setting Spray</Link></Text>
                                                    <Text><Link to="#">Primer</Link></Text>
                                                    <Text><Link to="#">Concealer</Link></Text>
                                                    <Text><Link to="#">Blush</Link></Text>
                                                    <Text><Link to="#">Loose Powder</Link></Text>
                                                    <Text><Link to="#">Bronzer</Link></Text>
                                                    <Text><Link to="#">Makeup Remover</Link></Text>
                                                    <Text><Link to="#">Tinted Moisturizer</Link></Text>
                                                    <Text><Link to="#">Contouring</Link></Text>
                                                    <Text><Link to="#">BB & CC Cream</Link></Text>
                                                    <Text><Link to="#">Face Palette</Link></Text>
                                                </Box>
                                                <Box className="column">
                                                    <h3>Eyes</h3>
                                                    <Text><Link to="#">Eye Shadow</Link></Text>
                                                    <Text><Link to="#">Mascra</Link></Text>
                                                    <Text><Link to="#">Eyliner & kajal</Link></Text>
                                                    <Text><Link to="#">Brows</Link></Text>
                                                    <Text><Link to="#">Eye Primer</Link></Text>
                                                    <Text><Link to="#">Conclealer</Link></Text>
                                                    <Text><Link to="#">Lashes</Link></Text>
                                                </Box>
                                                <Box className="column">
                                                    <h3>Lips</h3>
                                                    <Text><Link to="#">Lipstick</Link></Text>
                                                    <Text><Link to="#">Liquid Lipstick</Link></Text>
                                                    <Text><Link to="#">Lip Balm</Link></Text>
                                                    <Text><Link to="#">Lip Plumper</Link></Text>
                                                    <Text><Link to="#">Lip Liner</Link></Text>
                                                    <Text><Link to="#">Lip Tint</Link></Text>
                                                    <br />
                                                    <h3>Nails</h3>
                                                    <Text><Link to="#">Nail Polish</Link></Text>
                                                    <Text><Link to="#">Nail Care</Link></Text>
                                                    <Text><Link to="#">Nail Polish Remover</Link></Text>
                                                </Box>
                                                <Box className="column">
                                                    <h3>Tools & Brushes</h3>
                                                    <Text><Link to="#">Face Brush</Link></Text>
                                                    <Text><Link to="#">Eye Brush</Link></Text>
                                                    <Text><Link to="#">Applicators</Link></Text>
                                                    <Text><Link to="#">Lip Brush</Link></Text>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Link>
                            </ListItem>

                            <ListItem>
                                <Link to="#">
                                    <Box className="d">
                                        <Button className="d-btn"> Nykaa Fashion</Button>
                                        <Box className="d-content">
                                            <Box className="row" style={{display: 'flex'}}>
                                                <Box className="column">
                                                    <h3>What is new?</h3>
                                                    <Text><Link to="#">Recently Added</Link></Text>
                                                    <br />
                                                    <h3>Women</h3>
                                                    <Text><Link to="#">Indianwear</Link></Text>
                                                    <Text><Link to="#">Westerwear</Link></Text>
                                                    <Text><Link to="#">Footwear</Link></Text>
                                                    <Text><Link to="#">Bags</Link></Text>
                                                    <Text><Link to="#">Lingerie</Link></Text>
                                                    <Text><Link to="#">Sportswear</Link></Text>
                                                    <Text><Link to="#">Sleep & Lounge</Link></Text>
                                                    <Text><Link to="#">Jewellery</Link></Text>
                                                    <Text><Link to="#">Watches</Link></Text>
                                                    <Text><Link to="#">Accessories</Link></Text>
                                                    <br />
                                                    <h3>Global Store</h3>
                                                    <br />
                                                    <h3>Men</h3>

                                                    <Text><Link to="#">Topwear</Link></Text>
                                                    <Text><Link to="#">Bottomwear</Link></Text>
                                                    <Text><Link to="#">Ethnicwear</Link></Text>
                                                </Box>
                                                <Box className="column">
                                                    <Text><Link to="#">Topwear</Link></Text>
                                                    <Text><Link to="#">Bottomwear</Link></Text>
                                                    <Text><Link to="#">Ethnicwear</Link></Text>
                                                    <Text><Link to="#">Footwear</Link></Text>
                                                    <Text><Link to="#">Atheisure</Link></Text>
                                                    <Text><Link to="#">Innerwear & Sleepwear</Link></Text>
                                                    <Text><Link to="#">Watches</Link></Text>
                                                    <Text><Link to="#">Accessories</Link></Text>
                                                    <Text><Link to="#">Bags</Link></Text>
                                                    <br />
                                                    <h3>Style Guide</h3>
                                                    <br />
                                                    <h3>Tech</h3>
                                                    <Text><Link to="#">Smart Wearables</Link></Text>
                                                    <Text><Link to="#">Headphones</Link></Text>
                                                    <Text><Link to="#">Speakers</Link></Text>
                                                    <Text><Link to="#">Chargers & Cables</Link></Text>
                                                    <Text><Link to="#">Power Bank</Link></Text>
                                                    <br />
                                                    <h3>Kids</h3>
                                                    <Text><Link to="#">Westernwear</Link></Text>
                                                    <Text><Link to="#">Indianwear</Link></Text>
                                                </Box>
                                                <Box className="column">
                                                    <Text><Link to="#">Winterwear</Link></Text>
                                                    <Text><Link to="#">Footwear</Link></Text>
                                                    <Text><Link to="#">Toys & Games</Link></Text>
                                                    <Text><Link to="#">Feeding</Link></Text>
                                                    <Text><Link to="#">Sportswear</Link></Text>
                                                    <Text><Link to="#">Sleep & Lounge</Link></Text>
                                                    <br />
                                                    <h3>Home</h3>
                                                    <br />
                                                    <Text><Link to="#">Kitchen & Dining</Link></Text>
                                                    <Text><Link to="#">Decor</Link></Text>
                                                    <Text><Link to="#">Bedding</Link></Text>
                                                    <Text><Link to="#">Bath</Link></Text>
                                                    <Text><Link to="#">Storage</Link></Text>
                                                    <Text><Link to="#">Floor Coverings</Link></Text>
                                                    <Text><Link to="#">Kitchen Appliances</Link></Text>
                                                    <br />
                                                    <h3>House of Nykaa</h3>
                                                    <br />
                                                    <Text><Link to="#">Twenty Dresses By</Link></Text>
                                                    <Text><Link to="#">Gajra Gang</Link></Text>
                                                    <Text><Link to="#">Nykaa Feshion</Link></Text>
                                                    <Text><Link to="#">RSVP By Nykaa Fashion</Link></Text>
                                                    <Text><Link to="#">Nykaa By Nykaa</Link></Text>
                                                </Box>
                                                <Box className="column">
                                                    <Text><Link to="#">Pipa Bella</Link></Text>
                                                    <Text><Link to="#">IYKYK By Nykaa Fashion</Link></Text>
                                                    <Text><Link to="#">Kica</Link></Text>
                                                    <Text><Link to="#">Twig And Twine</Link></Text>
                                                    <Text><Link to="#">Likha By Nykaa Fashion</Link></Text>
                                                    <Text><Link to="#">Gloot</Link></Text>
                                                    <Text><Link to="#">Nyri</Link></Text>
                                                    <Text><Link to="#">Azai By Nykaa Fashion</Link></Text>
                                                    <br />
                                                    <h3>Top Brands</h3>
                                                    <Text><Link to="#">ONLY</Link></Text>
                                                    <Text><Link to="#">W</Link></Text>
                                                    <Text><Link to="#">Vero Moda</Link></Text>
                                                    <Text><Link to="#">Fabindia</Link></Text>
                                                    <Text><Link to="#">Na-Kd</Link></Text>
                                                    <Text><Link to="#">AND</Link></Text>
                                                    <Text><Link to="#">Revolve</Link></Text>
                                                    <Text><Link to="#">Label Shaurya Sanadhya</Link></Text>
                                                    <Text><Link to="#">Biba</Link></Text>
                                                    <Text><Link to="#">Koton</Link></Text>
                                                    <Text><Link to="#">I Saw It First</Link></Text>
                                                    <Text><Link to="#">Swatantra</Link></Text>
                                                    <Text><Link to="#">Forever New</Link></Text>
                                                </Box>


                                                <Box className="column">
                                                    <Image src='https://www.nykaa.com/media/wysiwyg/2022/NF-megamenua.jpg' alt='photo' />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Link>
                            </ListItem>
                            <ListItem><Link to="#">
                                <Box className="d">
                                    <Button className="d-btn">Beauty Advice</Button>
                                    <Box className="d-content" >
                                        <Box className="row" style={{display: "flex"}}>
                                            <Box className="column">

                                                <Image src='https://adn-static2.nykaa.com/media/wysiwyg/beautybook_2img.jpg' alt='nyka first' />
                                                <h3>Beauty Book</h3>
                                                <Text>Nykaa's Digital Magzine</Text>
                                            </Box>
                                            <Box className="column">
                                                <Image src='https://adn-static2.nykaa.com/media/wysiwyg/megamenu/nykaatv_1_img.png' alt='nyka center' />
                                                <h3>NYKAA TV</h3>
                                                <Text>MasterClasses By Experts & Vloggers</Text>
                                            </Box>
                                            <Box className="column">
                                                <Image width={240} borderRadius='5px' src='https://images-static.naikaa.com/media/wysiwyg/2021/Buying-Guide-Mega-menu-new.jpg' alt='nyka last' />
                                                <h3>BEAUTY BUYING GUIDES</h3>
                                                <Text>Tips To Explore While You Shop</Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
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

                        {!currentUser? <Menu>
                            <MenuButton as={Button} colorScheme='pink' fontSize={{base: 1,s: 5,md: 10}}>
                                Sign in
                            </MenuButton>
                            <MenuList float={'left'} width={21} Text={2}>
                                <MenuGroup p={2}>
                                    <Heading fontSize={20} fontWeight={400} m={"8px"}>Login / Create Account</Heading>
                                    <Text fontSize={10} p={2}>Register Now and get <b>2000 Nykaa reward point instantly!</b></Text>
                                    <MenuItem>
                                        <Button w={'100%'} fontSize={13}>
                                            <Link to='/login'>
                                                Sign in with Mobile/Email
                                            </Link>
                                        </Button>
                                    </MenuItem>
                                    <MenuItem>

                                        <Button colorScheme='white' textColor={'black'} rightIcon={<AiOutlineArrowRight />} w={'100%'} justifyContent={'space-between'} fontSize={15} onClick={googleLogin}>
                                            <FcGoogle /> Google
                                        </Button>

                                    </MenuItem>
                                </MenuGroup>

                            </MenuList>
                        </Menu>:
                            <Box>
                                <Menus text={currentUser?.displayName} logout={onOpen} />
                                <AlertDialog
                                    isOpen={isOpen}
                                    leastDestructiveRef={cancelRef}
                                    onClose={onClose}
                                    size='xs'
                                    isCentered
                                    motionPreset='slideInBottom'
                                >
                                    <AlertDialogOverlay>
                                        <AlertDialogContent w={'50%'}>
                                            <AlertDialogHeader fontSize='lg' textAlign={'center'} fontWeight='bold'>
                                                Are you sure you want to logout?
                                            </AlertDialogHeader>
                                            <hr />
                                            <AlertDialogBody display={'grid'} gap={2}>

                                                <Button onClick={logout} bgColor={'transparent'} _hover={{bgColor: "transparent"}} color='#d5418e' ml={3}>
                                                    Logout
                                                </Button>
                                                <hr />

                                                <Button onClick={logout} bgColor={'transparent'} _hover={{bgColor: "transparent"}} color='#d5418e' ml={3}>
                                                    Logout from all devices
                                                </Button>
                                                <hr />

                                                <Button ref={cancelRef} bgColor={'transparent'} _hover={{bgColor: "transparent"}} color='#d5418e' onClick={onClose}>
                                                    Cancel
                                                </Button>
                                            </AlertDialogBody>



                                        </AlertDialogContent>
                                    </AlertDialogOverlay>
                                </AlertDialog>
                            </Box>
                        
                        }
                        {cartItem.length===0?

                            <Drawers />

                            :
                            <DrawerLogin verfiy={verfiy} />
                        }
                    </Box>
                </Box>

            </Box>
            <Box boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;' position={'relative'} className='z-10 bg-white' w='100%' top={'100px'}>
                <Box w={'80%'} h={{lg: 38,md: "auto",s: "auto"}} m={'auto'} display={'flex'} justifyContent={'space-between'} fontWeight={100} fontSize={'14px'}>
                    <Box display={{base: 'grid',lg: 'flex'}} justifyContent={'space-evenly'} alignItems='center' gap={10} textAlign={'start'}>
                        <List display={{base: 'grid',md: 'flex',lg: 'flex'}}>

                            <ListItem>

                                <Link to="/makeup">
                                    <Box className="d"  >

                                        <Button className="d-btn">Makeup</Button>
                                        <Box className="d-content b-content">
                                            <Box className="row">
                                                <Box className="column">
                                                    <h3 style={{fontWeight: 500}}>Face</h3>
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
                                                </Box>
                                                <Box className="column">
                                                    <h3 style={{fontWeight: 500}}>Eyes</h3>
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
                                                    <h3 style={{fontWeight: 500}}>Makeup Kits & Combos</h3>
                                                    <Link to="#">Makeup Kits</Link>
                                                    <Link to="#">Makeup Combos</Link>

                                                </Box>
                                                <Box className="column">
                                                    <h3 style={{fontWeight: 500}}>Lips</h3>
                                                    <Link to="#">Lipstick</Link>
                                                    <Link to="#">Liquid Lipstick</Link>
                                                    <Link to="#">Liquid Crayon</Link>
                                                    <Link to="#">Lip Gloss</Link>
                                                    <Link to="#">Lip Liner</Link>
                                                    <Link to="#">Lip Plumper</Link>
                                                    <Link to="#">Lip Stain</Link>
                                                    <br />
                                                    <h3 style={{fontWeight: 500}}>Nails</h3>
                                                    <Link to="#">Nail Polish</Link>
                                                    <Link to="#">Nail Art Kits</Link>
                                                    <Link to="#">Nail Care</Link>
                                                    <Link to="#">Nail Polish Remover</Link>
                                                </Box>
                                                <Box className="column">
                                                    <h3 style={{fontWeight: 500}}>Tools 7 Brushes</h3>
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

                                                </Box>




                                            </Box>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Top Brands</h3>
                                                <Link to="#">Kay Beauty</Link>
                                                <Link to="#">Huda Beauty</Link>
                                                <Link to="#">Charlotte Tilbury</Link>
                                                <Link to="#">Maybelline New York</Link>
                                                <Link to="#">L'Oreal Paris</Link>
                                                <Link to="#">Lakme</Link>
                                                <Link to="#">Nykaa Cosmetics</Link>
                                                <Link to="#">Nyx Pro.Makeup</Link>
                                            </Box>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Quicj Links</h3>
                                                <Link to="#">Combos @ Nykaa</Link>
                                                <Link to="#">New Launches</Link>
                                                <Link to="#">NFBA Nominees 2022</Link>
                                                <Link to="#">Gifts @ Nykaa</Link>
                                                <Link to="#">The Gift Store</Link>

                                            </Box>


                                        </Box>

                                    </Box>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/skin">
                                    <Box className="d">

                                        <Button className="d-btn">Skin</Button>
                                        <Box className="d-content">
                                            <Box className="row">
                                                <Box className="column">
                                                    <h3 style={{fontWeight: 500}}>Moisturizers</h3>
                                                    &nbsp;
                                                    <Text><Link to="#">Face Moisturizer & Day</Link></Text>
                                                    <Text><Link to="#">Cream</Link></Text>
                                                    <Text><Link to="#">Face Oils</Link></Text>
                                                    <Text><Link to="#">Serums & Essence</Link></Text>
                                                    <Text><Link to="#">All Purpose Gels/Creams</Link></Text>
                                                    <br />
                                                    <h3 style={{fontWeight: 500}}>Cleaners</h3>
                                                    <br />
                                                    <Text><Link to="#">Face Wash</Link></Text>
                                                    <Text><Link to="#">Cleaner</Link></Text>
                                                    <Text><Link to="#">Micellar Water</Link></Text>
                                                    <Text><Link to="#">Face Wipes</Link></Text>
                                                    <Text><Link to="#">Makeup Remover</Link></Text>
                                                    <Text><Link to="#">Scrubs & Exfoilators</Link></Text>
                                                </Box>
                                                <Box className="column">
                                                    <h3 style={{fontWeight: 500}}>Trending Searches</h3>
                                                    <br />
                                                    <Text><Link to="#">Toners Under 1000</Link></Text>
                                                    <Text><Link to="#">Face Wash For Oily Skin</Link></Text>
                                                    <Text><Link to="#">Oil Free Face</Link></Text>
                                                    <Text><Link to="#">Moisturizer</Link></Text>
                                                    <Text><Link to="#">Lip Balm Under 500</Link></Text>
                                                    <Text><Link to="#">Vitamin C Serum</Link></Text>
                                                    <br />
                                                    <h3 style={{fontWeight: 500}}>Masks</h3>
                                                    <br />
                                                    <Text><Link to="#">Sheet Masks</Link></Text>
                                                    <Text><Link to="#">Sleeping Masks</Link></Text>
                                                    <Text><Link to="#">Masks & Peels</Link></Text>
                                                    <Text><Link to="#">Face Packs</Link></Text>
                                                    <Text><Link to="#">Face Bleach</Link></Text>
                                                    <br />
                                                    <h3 style={{fontWeight: 500}}>Toners</h3>
                                                    <br />
                                                    <Text><Link to="#">Toners & Mists</Link></Text>
                                                    <Text><Link to="#">Rose Water</Link></Text>
                                                </Box>
                                                <Box className="column">
                                                    <h3 style={{fontWeight: 500}}>Body Care</h3>
                                                    <br />
                                                    <Text><Link to="#">Lotions & Creams</Link></Text>
                                                    <Text><Link to="#">Body Butter</Link></Text>
                                                    <Text><Link to="#">Massage Oils</Link></Text>
                                                    <Text><Link to="#">Shower Gels & Body</Link></Text>
                                                    <Text><Link to="#">Bath Salts</Link></Text>
                                                    <Text><Link to="#">Wash</Link></Text>
                                                    <Text><Link to="#">Soaps</Link></Text>
                                                    <Text><Link to="#">Scrubs & Loofahs</Link></Text>
                                                    <br />
                                                    <h3 style={{fontWeight: 500}}>Hands & Feet</h3>
                                                    <br />
                                                    <Text><Link to="#">Hand Creams</Link></Text>
                                                    <Text><Link to="#">Foot Creams</Link></Text>
                                                    <Text><Link to="#">Hand & Foot Masks</Link></Text>
                                                </Box>
                                                <Box className="column">
                                                    <h3 style={{fontWeight: 500}}>Specialised Skincare</h3>
                                                    <br />
                                                    <Text><Link to="#">Acne Spot Correctors</Link></Text>
                                                    <Text><Link to="#">Nose Strips</Link></Text>
                                                    <Text><Link to="#">Facial Peels</Link></Text>
                                                    <br />
                                                    <h3 style={{fontWeight: 500}}>Eye Care</h3>
                                                    <br />
                                                    <Text><Link to="#">Under Eye Cream &</Link></Text>
                                                    <Text><Link to="#">Serums</Link></Text>
                                                    <Text><Link to="#">Eye Masks</Link></Text>
                                                    <br />
                                                    <h3 style={{fontWeight: 500}}>Lip Care</h3>
                                                    <br />
                                                    <Text><Link to="#">Lip Balm</Link></Text>
                                                    <Text><Link to="#">Lip Scrubs</Link></Text>
                                                    <Text><Link to="#">Lip Masks</Link></Text>
                                                    <br />
                                                    <h3 style={{fontWeight: 500}}>Sun Care</h3>
                                                    <br />
                                                    <Text><Link to="#">Face Sunscreen</Link></Text>
                                                    <Text><Link to="#">Body Sunscreen</Link></Text>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Link>
                            </ListItem>

                            <ListItem>
                                <Link to="#">
                                    <Box className="d">
                                        <Button className="d-btn">Hair</Button>
                                        <Box className="d-content">
                                            <Box className="row" style={{display: 'flex'}}>
                                                <Box className="column">
                                                    <h3 style={{fontWeight: 500}}>Hair Care</h3>
                                                    <Text><Link to="">Shampoo</Link></Text>
                                                    <Text><Link to="#">Dry Shampooo</Link></Text>
                                                    <Text><Link to="#">Conditioner</Link></Text>
                                                    <Text><Link to="#">Hair Oil</Link></Text>
                                                    <Text><Link to="#">Hair Serum</Link></Text>
                                                    <Text><Link to="#">Hair Creams & Masks</Link></Text>
                                                    <Text><Link to="#">Hair Supplements</Link></Text>
                                                </Box>
                                                <Box className="column">
                                                    <h3 style={{fontWeight: 500}}>Tools & Accessories</h3>
                                                    <Text><Link to="#">Hair Brusher</Link></Text>
                                                    <Text><Link to="#">Hair Combs</Link></Text>
                                                    <Text><Link to="#">Dryers & Stylers</Link></Text>
                                                    <Text><Link to="#">Straighteners</Link></Text>
                                                    <Text><Link to="#">Rollers & Curles</Link></Text>
                                                    <Text><Link to="#">Hair Extensions</Link></Text>
                                                    <Text><Link to="#">Hair Accessories</Link></Text>
                                                </Box>
                                                <Box className="column">
                                                    <h3 style={{fontWeight: 500}}>Hair Styling</h3>
                                                    <br />
                                                    <Text><Link to="#">Hair Color</Link></Text>
                                                    <Text><Link to="#">Hair Spray</Link></Text>
                                                    <Text><Link to="#">Gels & Waxes</Link></Text>
                                                    <br />
                                                    <h3 style={{fontWeight: 500}}>Shop By Hair Type</h3>
                                                    <br />
                                                    <Text><Link to="#">Straight</Link></Text>
                                                    <Text><Link to="#">Curly & Wavy</Link></Text>
                                                    <br />
                                                    <h3 style={{fontWeight: 500}}>Professional Brands</h3>
                                                    <br />
                                                </Box>
                                                <Box className="column">
                                                    <h3 style={{fontWeight: 500}}>Shop  By Concern</h3>
                                                    <br />
                                                    <Text><Link to="#">Hairfall & Thinning</Link></Text>
                                                    <Text><Link to="#">Dandruff</Link></Text>
                                                    <Text><Link to="#">Dry & Frizzy Hair</Link></Text>
                                                    <Text><Link to="#">Split Ends</Link></Text>
                                                    <Text><Link to="#">Color Protection</Link></Text>
                                                    <br />

                                                    <Box className="column">
                                                        <h3 style={{fontWeight: 500}}>Trending Searches</h3>
                                                        <br />
                                                        <Text><Link to="#">Hair Growth Oil</Link></Text>
                                                        <Text><Link to="#">Dandruff Shampoo</Link></Text>
                                                        <Text><Link to="#">Castor Oil For Hair</Link></Text>
                                                        <Text><Link to="#">Sulphate Free Shampoo</Link></Text>
                                                        <Text><Link to="#">Hair Strightener</Link></Text>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Link>
                            </ListItem>
                            <ListItem><Link to="/appliances">
                                <Box className="d">
                                    <Button className="d-btn">Appliances</Button>
                                    <Box className="d-content" >
                                        <Box className="row" style={{display: "flex"}}>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Hair Styling Tools</h3>
                                                <Text><Link to='#'>Hair Dryers</Link></Text>
                                                <Text><Link to='#'>Striaghteners</Link></Text>
                                                <Text><Link to='#'>Curling Iron/Stylers</Link></Text>
                                                <Text><Link to='#'>Multi Stylers</Link></Text>
                                            </Box>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Hair Removal Tools</h3>

                                                <Text><Link to='#'>Epilators</Link></Text>
                                                <Text><Link to='#'>Body Groomers</Link></Text>
                                                <Text><Link to='#'>Bikini Trimmers</Link></Text>
                                            </Box>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Shaving Tools</h3>
                                                <Text><Link to='#'>Face Epliator</Link></Text>
                                                <Text><Link to='#'>Dermarollers</Link></Text>
                                                <Text><Link to='#'>Cleansing Brushes</Link></Text>
                                                <Text><Link to='#'>Acne Removal</Link></Text>
                                                <br />
                                                <h3 style={{fontWeight: 500}}>Oral Care</h3>
                                                <Text><Link to='#'>Electric Toothbrushes</Link></Text>
                                                <Text><Link to='#'>Electric Flossers</Link></Text>
                                            </Box>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Top Brands</h3>
                                                <Text><Link to='#'>FOREO</Link></Text>
                                                <Text><Link to='#'>Phillips</Link></Text>
                                                <Text><Link to='#'>ALan Truman</Link></Text>
                                                <Text><Link to='#'>Dyson</Link></Text>
                                                <Text><Link to='#'>VEGA</Link></Text>
                                                <Text><Link to='#'>Braun</Link></Text>
                                                <Text><Link to='#'>Ikonic Professinal</Link></Text>
                                                <Text><Link to='#'>Nova</Link></Text>
                                                <Text><Link to='#'>Flawless</Link></Text>
                                            </Box>
                                            <Box className='column'>
                                                <h3 style={{fontWeight: 500}}>Quick Links</h3>
                                                <Text><Link to='#'>Combos @ Nykaa</Link></Text>
                                                <Text><Link to='#'>New Launches</Link></Text>
                                                <Text><Link to='#'>NFBA Nominees 2022</Link></Text>
                                                <Text><Link to='#'>Gifts @ Nykaa</Link></Text>
                                                <Text><Link to='#'>Herbal Hair Care</Link></Text>
                                                <Text><Link to='#'>Routine Finder</Link></Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Link></ListItem>
                            <ListItem><Link to="#">
                                <Box className="d">
                                    <Button className="d-btn">Bath & Body</Button>
                                    <Box className="d-content" >
                                        <Box className="row" style={{display: "flex"}}>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Bath & Shower</h3>
                                                <Text><Link to="#">Shower Gels & Body</Link></Text>
                                                <Text><Link to="#">Wash</Link></Text>
                                                <Text><Link to="#">Body Scrubs & Exfoliants</Link></Text>
                                                <Text><Link to="#">Soaps</Link></Text>
                                                <Text><Link to="#">Bath Salts</Link></Text>
                                                <Text><Link to="#">Bath Accessories</Link></Text>
                                            </Box>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Ferminine Hygiene</h3>
                                                <Text><Link to="#">Sanitry Napkins</Link></Text>
                                                <Text><Link to="#">Menstrual Cups</Link></Text>
                                                <Text><Link to="#">Tampons</Link></Text>
                                                <Text><Link to="#">Pantyliners</Link></Text>
                                                <Text><Link to="#">Period Panties</Link></Text>
                                                <Text><Link to="#">Intimate Wash</Link></Text>
                                                <Text><Link to="#">Other Period Essentials </Link></Text>
                                            </Box>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Men's Grooming</h3>
                                                <Text><Link to="#">Razors & Catridges</Link></Text>
                                                <Text><Link to="#">Shaving Cream, Doams &</Link></Text>
                                                <Text><Link to="#">Gels</Link></Text>
                                                <Text><Link to="#">Pre & Post Shaves</Link></Text>
                                                <Text><Link to="#">Shaving & Trimmers</Link></Text>
                                                <Text><Link to="#">Shaving Brush</Link></Text>
                                                <Text><Link to="#">Beard & Moustache Care</Link></Text>
                                                <Text><Link to="#">Intimate Care</Link></Text>
                                            </Box>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Hygiene Essentials</h3>
                                                <Text><Link to="#">Face Mask</Link></Text>
                                                <Text><Link to="#">Hand Sanitizer</Link></Text>
                                                <Text><Link to="#">Gloves, PPE & Face</Link></Text>
                                                <Text><Link to="#">Shields</Link></Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Link></ListItem>
                            <ListItem><Link to="#">
                                <Box className="d">
                                    <Button className="d-btn">Natural</Button>
                                    <Box className="d-content" >
                                        <Box className="row" style={{display: "flex"}}>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Skin</h3>
                                                <Text><Link to="#">Face Wash</Link></Text>
                                                <Text><Link to="#">Cleanser</Link></Text>
                                                <Text><Link to="#">Moisturizer</Link></Text>
                                                <Text><Link to="#">Face Cream</Link></Text>
                                                <Text><Link to="#">Face Mist</Link></Text>
                                                <Text><Link to="#">Facial Kits</Link></Text>
                                            </Box>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Skin</h3>
                                                <Text><Link to="#">Sheet Masks</Link></Text>
                                                <Text><Link to="#">Masks & Peels</Link></Text>
                                                <Text><Link to="#">Scrubs & Exafoliators</Link></Text>
                                                <Text><Link to="#">Face Tools</Link></Text>
                                                <Text><Link to="#">Face Gel</Link></Text>
                                                <Text><Link to="#">Lip Scurb</Link></Text>
                                            </Box>       <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Hair</h3>
                                                <Text><Link to="#">Shampoo & Cleanser</Link></Text>
                                                <Text><Link to="#">Conditioners</Link></Text>
                                                <Text><Link to="#">Hair Masks</Link></Text>
                                                <Text><Link to="#">Hair Oil</Link></Text>
                                                <Text><Link to="#">Hair Serum</Link></Text>
                                                <Text><Link to="#">Hair Color</Link></Text>
                                            </Box>       <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Makeup</h3>
                                                <Text><Link to="#">Lipstick</Link></Text>
                                                <Text><Link to="#">Kajal</Link></Text>
                                                <Text><Link to="#">Eyeliner</Link></Text>
                                                <Text><Link to="#">Mascara</Link></Text>
                                                <Text><Link to="#">Nail Polish</Link></Text>
                                                <Text><Link to="#">Lip Balm & Gloss</Link></Text>
                                            </Box>       <Box className="column">
                                                <h3 style={{fontWeight: 500}} >Top Brands</h3>
                                                <Text><Link to="#">Biotique</Link></Text>
                                                <Text><Link to="#">Lotus Herbals</Link></Text>
                                                <Text><Link to="#">The Body Shop</Link></Text>
                                                <Text><Link to="#">Nykaa Naturals</Link></Text>
                                                <Text><Link to="#">Kama Ayurveda</Link></Text>
                                                <Text><Link to="#">Forest Essentials</Link></Text>
                                            </Box>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Shop By Concern</h3>
                                                <Text><Link to="#">Tan Removal</Link></Text>
                                                <Text><Link to="#">Pigmentation</Link></Text>
                                                <Text><Link to="#">Acne Treatement</Link></Text>
                                                <Text><Link to="#">Skin Lightening</Link></Text>
                                                <Text><Link to="#">Anti Aging</Link></Text>
                                                <Text><Link to="#">Dark Circles</Link></Text>
                                            </Box>

                                        </Box>
                                    </Box>
                                </Box>
                            </Link></ListItem>
                            <ListItem><Link to="#">
                                <Box className="d">
                                    <Button className="d-btn">Mom & Baby</Button>
                                    <Box className="d-content" >
                                        <Box className="row" style={{display: "flex"}}>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Baby Care</h3>
                                                <Text><Link to="#">Body Wash</Link></Text>
                                                <Text><Link to="#">Baby Oil</Link></Text>
                                                <Text><Link to="#">Hair Oil</Link></Text>
                                                <Text><Link to="#">Lotions & Creams</Link></Text>
                                                <Text><Link to="#">Baby Powder</Link></Text>
                                                <Text><Link to="#">Sunscreen</Link></Text>
                                            </Box>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Kids Care</h3>
                                                <Text><Link to="#">Nutritional upplements</Link></Text>
                                                <Text><Link to="#">Body Wash & Soaps</Link></Text>
                                                <Text><Link to="#">Lotions & Creams</Link></Text>
                                                <Text><Link to="#">Hair Care</Link></Text>
                                                <Text><Link to="#">Sunscreen</Link></Text>
                                                <Text><Link to="#">Dental Care</Link></Text>
                                            </Box>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Maternity Care</h3>
                                                <Text><Link to="#">Stretch Mark Creams &</Link></Text>
                                                <Text><Link to="#">Oils</Link></Text>
                                                <Text><Link to="#">Breast Firming Gels &</Link></Text>
                                                <Text><Link to="#">Creams</Link></Text>
                                                <Text><Link to="#">Nipple Creams</Link></Text>
                                                <Text><Link to="#">Nutritional Supplements</Link></Text>
                                            </Box>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Nursing & Feeding</h3>
                                                <Text><Link to="#">Feeding Bottle & Nipples</Link></Text>
                                                <Text><Link to="#">Teethers & Soothers</Link></Text>
                                                <Text><Link to="#">Breast Pumps</Link></Text>
                                                <Text><Link to="#">Breast Pads</Link></Text>
                                                <Text><Link to="#">Cleaning & Feeding</Link></Text>
                                                <Text><Link to="#">Bibs</Link></Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Link></ListItem>
                            <ListItem><Link to="#">
                                <Box className="d">
                                    <Button className="d-btn">Health & Wellness</Button>
                                    <Box className="d-content" >
                                        <Box className="row" style={{display: "flex"}}>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Health Supplements</h3>
                                                <Text><Link to="#">Multivitamins</Link></Text>
                                                <Text><Link to="#">Calcium & Vitamin D</Link></Text>
                                                <Text><Link to="#">Magnesium & Zinc</Link></Text>
                                                <Text><Link to="#">Omega & Fish Oil</Link></Text>
                                                <Text><Link to="#">Vitamin C</Link></Text>
                                                <Text><Link to="#">Other Supplements</Link></Text>
                                            </Box>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Sports Nutrition</h3>
                                                <Text><Link to="#">Whey Protein</Link></Text>
                                                <Text><Link to="#">Plant Protein</Link></Text>
                                                <Text><Link to="#">BCAA & Other Muscle</Link></Text>
                                                <Text><Link to="#">Support</Link></Text>
                                                <Text><Link to="#">Protein & Energy Bars</Link></Text>
                                                <Text><Link to="#">Protein Snacks</Link></Text>
                                            </Box>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Health Foods</h3>
                                                <Text><Link to="#">Honey</Link></Text>
                                                <Text><Link to="#">Berries</Link></Text>
                                                <Text><Link to="#">Edible Seeds</Link></Text>
                                                <Text><Link to="#">Oils & Ghee</Link></Text>
                                                <Text><Link to="#">Herbal Tea</Link></Text>
                                                <Text><Link to="#">Heakth Drinks</Link></Text>
                                            </Box>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Pain Relief</h3>
                                                <Text><Link to="#">Muscle & Joints</Link></Text>
                                                <Text><Link to="#">Ortho Oils</Link></Text>
                                                <Text><Link to="#">Perios Cramps</Link></Text>
                                                <Text><Link to="#">Period Cramps</Link></Text>
                                                <Text><Link to="#">Cough & Cold</Link></Text>
                                            </Box>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Sexual Wellness</h3>
                                                <Text><Link to="#">Condoms</Link></Text>
                                                <Text><Link to="#">Lubricants</Link></Text>
                                                <Text><Link to="#">Sexual Enhancers</Link></Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Link></ListItem>
                            <ListItem><Link to="#">
                                <Box className="d">
                                    <Button className="d-btn">Men</Button>
                                    <Box className="d-content" >
                                        <Box className="row" style={{display: "flex"}}>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Shaving</h3>
                                                <Text><Link to="#">Razors & Cartridges</Link></Text>
                                                <Text><Link to="#">Shavers</Link></Text>
                                                <Text><Link to="#">Trimmers</Link></Text>
                                                <Text><Link to="#">Shaving Creams</Link></Text>
                                                <Text><Link to="#">Shaving Foams</Link></Text>
                                                <Text><Link to="#">Shaving Gels</Link></Text>
                                            </Box>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Beard Care</h3>
                                                <Text><Link to="#">Beard Oil</Link></Text>
                                                <Text><Link to="#">Beard Butter</Link></Text>
                                                <Text><Link to="#">Beard Softener</Link></Text>
                                                <Text><Link to="#">Beard Wax</Link></Text>
                                                <Text><Link to="#">Bread Wash</Link></Text>
                                                <Text><Link to="#">Moustache Oil</Link></Text>
                                            </Box>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Hair Care</h3>
                                                <Text><Link to="#">Shampoo</Link></Text>
                                                <Text><Link to="#">Conditioners</Link></Text>
                                                <Text><Link to="#">Hair Styling</Link></Text>
                                                <Text><Link to="#">Hair Color</Link></Text>
                                                <Text><Link to="#">Hair Oils</Link></Text>
                                                <Text><Link to="#">Professional Products</Link></Text>
                                            </Box>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Bath & Body</h3>
                                                <Text><Link to="#">Bath/Shower Gels</Link></Text>
                                                <Text><Link to="#">Soaps</Link></Text>
                                                <Text><Link to="#">Body Scrubs</Link></Text>
                                                <Text><Link to="#">Talc</Link></Text>
                                                <Text><Link to="#">Dental Care</Link></Text>
                                                <Text><Link to="#">Body Lotions</Link></Text>
                                            </Box>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Shop By Concern</h3>
                                                <Text><Link to="#">Anti Dandruff</Link></Text>
                                                <Text><Link to="#">Anti Damge</Link></Text>
                                                <Text><Link to="#">Anti Hairfall</Link></Text>
                                                <Text><Link to="#">Scalp Treatement</Link></Text>
                                                <Text><Link to="#">Anti Acne</Link></Text>
                                                <Text><Link to="#">Anti Ageing</Link></Text>
                                            </Box>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Top Brands</h3>
                                                <Text><Link to="#">Beardo</Link></Text>
                                                <Text><Link to="#">Gets-By</Link></Text>
                                                <Text><Link to="#">Gilette</Link></Text>
                                                <Text><Link to="#">Livon</Link></Text>
                                                <Text><Link to="#">Nivea</Link></Text>
                                                <Text><Link to="#">Park Avenue</Link></Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Link></ListItem>
                            <ListItem><Link to="#">
                                <Box className="d">
                                    <Button className="d-btn">Fragrance</Button>
                                    <Box className="d-content" >
                                        <Box className="row" style={{display: "flex"}}>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Womens Fragrance</h3>
                                                <Text><Link to="#">Perfumes (EDT / EDP )</Link></Text>
                                                <Text><Link to="#">Body Mists / Sprays</Link></Text>
                                                <Text><Link to="#">Deodorants / Roll-Ons</Link></Text>
                                            </Box>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Gifts & Combos</h3>
                                                <Text><Link to="#">Earthy & Woody</Link></Text>
                                                <Text><Link to="#">Floral</Link></Text>
                                                <Text><Link to="#">Spicy & Warm</Link></Text>
                                                <Text><Link to="#">Fresh & Aquatic</Link></Text>
                                                <Text><Link to="#">Oud Collection</Link></Text>
                                                <Text><Link to="#">Fruity</Link></Text>
                                            </Box>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Skin</h3>
                                                <Text><Link to="#">Nykaa Cosmetics</Link></Text>
                                                <Text><Link to="#">Moi By Nykaa</Link></Text>
                                                <Text><Link to="#">Dior</Link></Text>
                                                <Text><Link to="#">Gucci</Link></Text>
                                                <Text><Link to="#">Calvin Klein</Link></Text>
                                                <Text><Link to="#">Davidoff</Link></Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Link></ListItem>
                            <ListItem><Link to="#">
                                <Box className="d">
                                    <Button className="d-btn" di>Pop Ups</Button>
                                    <Box className="d-content" >
                                        <Box className="row" style={{display: "flex"}}>
                                            <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Bras</h3>
                                                <Text><Link to="#">T-Shirt Bra</Link></Text>
                                                <Text><Link to="#">Padded Bra</Link></Text>
                                                <Text><Link to="#">Non-Padded Bra</Link></Text>
                                                <Text><Link to="#">Wireless Bra</Link></Text>
                                                <Text><Link to="#">Underwired Bra</Link></Text>
                                                <Text><Link to="#">Strapless Bra</Link></Text>
                                            </Box> <Box className="column">
                                                <h3 style={{fontWeight: 500}}>Sleep & Lounge</h3>
                                                <Text><Link to="#">Sets</Link></Text>
                                                <Text><Link to="#">Nightdress</Link></Text>
                                                <Text><Link to="#">Babydolls</Link></Text>
                                                <Text><Link to="#">Pajamsa</Link></Text>
                                                <Text><Link to="#">Wraps</Link></Text>
                                                <Text><Link to="#">Shorts</Link></Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
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