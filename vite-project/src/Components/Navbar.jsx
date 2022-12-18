//Varinder
import React,{useState} from 'react'
import {Box,Heading,Text,Button,Input,InputGroup,InputLeftElement,Image,useDisclosure,Container,Center} from "@chakra-ui/react";
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
} from '@chakra-ui/react';
import {BsArrowLeft} from "react-icons/bs";
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
import {FcGoogle} from "react-icons/fc";
import "../App.css";
import Logo from '../../public/loGo1.jpg';
import Menus from './Menu';
import DrawerLogin from './DrawerLogin';
import Drawers from './DrawerNologin';
const Navbar=() =>
{

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

            <Box width={'full'} h={10} backgroundImage={`url(https://adn-static1.nykaa.com/media/wysiwyg/2022/cms/banner/top_strip_16dec22.jpg)`} position={'fixed'} top='0' className='z-20'>

                <Box display={'flex'} w={{base: '100%',md: '80%',lg: '80%'}} m={'auto'} justifyContent={{base: 'space-between',md: 'none'}} Text={2} alignItems={'center'} textAlign='center'  >
                    <Link to="#" rel='noopener noreferrer'><Text fontWeight={{base: 650}} fontSize={{base: '11.8px',md: '14px',lg: '18px'}} _hover={{color: 'white'}} color='white'>BEAUTY BONANZA Get Your Daily Dose Of Amazing Deals</Text></Link>
                    <Menus />
                    <Box display={'flex'}> {
                        Nav1List.map((e) =>
                        {
                            return (<Box display={{base: 'none',md: 'none',lg: 'flex'}} fontSize={{base: '10px',md: '11px',lg: '15px'}} flexDirection={{base: 'none',s: "none",md: 'row'}} alignItems={'center'} fontWeight={{base: 100,lg: 500}} _hover={{color: 'white'}} color='white' m={{base: '0px',lg: '0rem 0.9rem'}}>
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
                            <Heading textAlign={'center'} ><Link to="/"><Image w={'83px'} src={Logo} /></Link></Heading>

                            <ListItem _hover={{color: 'white'}} textAlign={{base: "start",md: 'center',lg: 'center'}}>
                                <li><Link to="#" ><Box className="d">
                                    <Button className="d-btn">Categories</Button> </Box> </Link> </li> </ListItem>
                            <ListItem>
                                <Link to="#">
                                    <Box className="d">
                                        <Button className="d-btn">Brands</Button>
                                        <Box className="d-content b-content">
                                            <Box className="row text-xs font-thin" style={{backgroundColor: 'white',zIndex: 'inherit'}} >
                                                <Box className="column">
                                                    <h3>HTML and CSS</h3>
                                                    <Link to="#">Learn HTML</Link>
                                                    <Link to="#">Learn CSS</Link>
                                                    <Link to="#">Bootstrap 4</Link>
                                                </Box>
                                                <Box className="column">
                                                    <h3>Server Side</h3>
                                                    <Link to="#">Learn PHP</Link>
                                                    <Link to="#">Learn Python</Link>
                                                    <Link to="#">Learn Node.js</Link>
                                                </Box>
                                                <Box className="column">
                                                    <h3>Frameworks</h3>
                                                    <Link to="#">VueJS</Link>
                                                    <Link to="#">Laravel</Link>
                                                    <Link to="#">CodeIgniter</Link>
                                                </Box>
                                                <Box className="column">
                                                    <h3>Frameworks</h3>
                                                    <Link to="#">VueJS</Link>
                                                    <Link to="#">Laravel</Link>
                                                    <Link to="#">CodeIgniter</Link>
                                                </Box>
                                                <Box className="column">
                                                    <h3>Frameworks</h3>
                                                    <Link to="#">VueJS</Link>
                                                    <Link to="#">Laravel</Link>
                                                    <Link to="#">CodeIgniter</Link>
                                                </Box>
                                                <Box className="column">
                                                    <h3>Frameworks</h3>
                                                    <Link to="#">VueJS</Link>
                                                    <Link to="#">Laravel</Link>
                                                    <Link to="#">CodeIgniter</Link>
                                                </Box>
                                            </Box>
                                        </Box>
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

                        {detial.length==0? <Menu>
                            <MenuButton as={Button} colorScheme='pink' fontSize={{base: 1,s: 5,md: 10}}>
                                Sign in
                            </MenuButton>
                            <MenuList float={'left'} width={21} Text={2}>
                                <MenuGroup >
                                    <Heading fontSize={20} fontWeight={400} m={"8px 0"}>Login / Create Account</Heading>
                                    <Text fontSize={10}>Register Now and get <b>2000 Nykaa reward point instantly!</b></Text>
                                    <MenuItem>
                                        <Button w={'100%'} fontSize={13}>
                                            <Link to='/login'>
                                                Sign in with Mobile/Email
                                            </Link>
                                        </Button>
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
                                <Menus text={e.name} logout={onOpen} />
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
                        )

                        )}
                        {count===1? 

                           <Drawers />
                      
                            :
                            <DrawerLogin verfiy={verfiy} handleClick={handleClick} offerPrice={offerPrice} quantity={quantity} Price={Price} price={price} discount={discount} shipping={shipping} />
                        }
                    </Box>
                </Box>

            </Box>
            <Box boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;' position={'relative'} className='z-10 bg-white' w='100%' top={'100px'}>
                <Box w={'80%'} h={{lg: 38,md: "auto",s: "auto"}} m={'auto'} display={'flex'} justifyContent={'space-between'} fontWeight={100} fontSize={'14px'}>
                    <Box display={{base: 'grid',lg: 'flex'}} justifyContent={'space-evenly'} alignItems='center' gap={10} textAlign={'start'}>
                        <List display={{base: 'grid',md: 'flex',lg: 'flex'}}>

                            <ListItem>
                                <Link to="#">
                                    <Box className="d"  >
                                        <Button className="d-btn">Makeup</Button>
                                        <Box className="d-content b-content">
                                            <Box className="row">
                                                <Box className="column">
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
                                                </Box>
                                                <Box className="column">
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

                                                </Box>
                                                <Box className="column">
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
                                                </Box>
                                                <Box className="column">
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
                                                    <Box className="column">
                                                        <h3>Multi-Functional Makeup Palettes</h3>
                                                    </Box>
                                                </Box>

                                                <br />


                                            </Box>
                                            <Box className="column">
                                                <h3>Top Brands</h3>
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
                                                <h3>Quicj Links</h3>
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
                                <Link to="#">
                                    <Box className="d">
                                        <Button className="d-btn">Skin</Button>
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
                                        <Button className="d-btn">Hair</Button>
                                        <Box className="d-content">
                                            <Box className="row" style={{display: 'flex'}}>
                                                <Box className="column">
                                                    <h3>What is new?</h3>
                                                    <Text><Link to="">Recently Added</Link></Text>
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
                                    <Button className="d-btn">Appliances</Button>
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
                            <ListItem><Link to="#">
                                <Box className="d">
                                    <Button className="d-btn">Bath & Body</Button>
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
                            <ListItem><Link to="#">
                                <Box className="d">
                                    <Button className="d-btn">Natural</Button>
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
                            <ListItem><Link to="#">
                                <Box className="d">
                                    <Button className="d-btn">Mom & Baby</Button>
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
                            <ListItem><Link to="#">
                                <Box className="d">
                                    <Button className="d-btn">Health & Wellness</Button>
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
                            <ListItem><Link to="#">
                                <Box className="d">
                                    <Button className="d-btn">Men</Button>
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
                            <ListItem><Link to="#">
                                <Box className="d">
                                    <Button className="d-btn">Fragrance</Button>
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
                            <ListItem><Link to="#">
                                <Box className="d">
                                    <Button className="d-btn" di>Pop Ups</Button>
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

                        </Box>

                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default Navbar