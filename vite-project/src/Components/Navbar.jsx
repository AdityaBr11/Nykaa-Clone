//Varinder
import React from 'react'
import {Box,Heading,Text,Button,Input,InputGroup,InputLeftElement,Image,Flex} from "@chakra-ui/react";
import {AiOutlineMobile,AiOutlineGift} from "react-icons/ai";
import {GoLocation,GoSearch} from "react-icons/go";
import {IoIosHelpCircleOutline} from "react-icons/io";
import {MdOutlineShoppingBasket} from "react-icons/md";
import {Link} from 'react-router-dom';
import
{
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react';

import "../App.css"
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

    return (
        <Box>
            <Box width={'full'} h={10} backgroundImage={`url(https://adn-static1.nykaa.com/media/wysiwyg/2021/common-strip.jpg)`} position={'fixed'} top='0'>
                <Box display={'flex'} w={{base: '100%',md: '80%',lg: '80%'}} m={'auto'} justifyContent={{base: 'space-between',md: 'none'}} p={2} alignItems={'center'} textAlign='center'  >
                    <Link to="#" rel='noopener noreferrer'><Text fontWeight={{base: 650}} fontSize={{base: '11.8px',md: '20px',lg: '20px'}} _hover={{color: 'white'}}>BEAUTY BONANZA Get Your Daily Dose Of Amazing Deals</Text></Link>

                    <Box display={'flex'}> {
                        Nav1List.map((e) =>
                        {
                            return (<Box display={{base: 'none',md: 'none',lg: 'flex'}} fontSize={{base: '10px',md: '19px',lg: '1xl'}} flexDirection={{base: 'none',s: "none",md: 'row'}} alignItems={'center'} fontWeight={{base: 100,lg: 500}} _hover={{color: 'white'}} m={{base: '0px',lg: '0rem 0.9rem'}}>
                                <Text fontSize={22}>{e.icon}</Text>
                                <Text>{e.name} |</Text>
                            </Box>
                            )
                        })
                    }
                    </Box>
                </Box>
            </Box>
            <Box boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' position={'fixed'} w='100%' top={10}>
                <Box w={'80%'} h={{lg: 68,md: "auto",s: "auto"}} m={'auto'} display={'flex'} justifyContent={'space-between'} fontWeight={500} fontSize={'16px'}>
                    <Box display={{base: 'grid',lg: 'flex'}} justifyContent={'space-evenly'} alignItems='center' gap={10} textAlign={'start'}>
                        <List spacing={3} display={{base: 'grid',md: 'flex',lg: 'flex'}}>
                            <Heading><Link to="#">Logo</Link></Heading>

                            <ListItem _hover={{color: 'white'}} textAlign={{base: "start",md: 'center',lg: 'center'}}>
                                <li><Link to="#" ><div class="d">
                                    <button class="d-btn">Categories</button>
                                </div></Link></li>
                            </ListItem>
                            <ListItem>
                                <Link to="#">
                                    <div class="d">
                                        <button class="d-btn">Brands</button>
                                        <div class="d-content b-content">
                                            <div class="row">
                                                <div class="column">
                                                    <h3>HTML and CSS</h3>
                                                    <a href="">Learn HTML</a>
                                                    <a href="">Learn CSS</a>
                                                    <a href="">Bootstrap 4</a>
                                                </div>
                                                <div class="column">
                                                    <h3>Server Side</h3>
                                                    <a href="">Learn PHP</a>
                                                    <a href="">Learn Python</a>
                                                    <a href="">Learn Node.js</a>
                                                </div>
                                                <div class="column">
                                                    <h3>Frameworks</h3>
                                                    <a href="">VueJS</a>
                                                    <a href="">Laravel</a>
                                                    <a href="">CodeIgniter</a>
                                                </div>
                                                <div class="column">
                                                    <h3>Frameworks</h3>
                                                    <a href="">VueJS</a>
                                                    <a href="">Laravel</a>
                                                    <a href="">CodeIgniter</a>
                                                </div>
                                                <div class="column">
                                                    <h3>Frameworks</h3>
                                                    <a href="">VueJS</a>
                                                    <a href="">Laravel</a>
                                                    <a href="">CodeIgniter</a>
                                                </div>
                                                <div class="column">
                                                    <h3>Frameworks</h3>
                                                    <a href="">VueJS</a>
                                                    <a href="">Laravel</a>
                                                    <a href="">CodeIgniter</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to="#">
                                    <div class="d">
                                        <button class="d-btn">Luxe</button>
                                        <div class="d-content">
                                            <div class="row">
                                                <div class="column">
                                                    <h3>Makeup Collection Face</h3>
                                                   <p><a href="#">Foundation</a></p> 
                                                   <p><a href="#">Compact</a></p> 
                                                   <p><a href="#">Highlighter</a></p> 
                                                   <p><a href="#">Setting Spray</a></p> 
                                                   <p><a href="#">Primer</a></p> 
                                                   <p><a href="#">Concealer</a></p> 
                                                   <p><a href="#">Blush</a></p> 
                                                   <p><a href="#">Loose Powder</a></p> 
                                                   <p><a href="#">Bronzer</a></p> 
                                                   <p><a href="#">Makeup Remover</a></p> 
                                                   <p><a href="#">Tinted Moisturizer</a></p> 
                                                   <p><a href="#">Contouring</a></p> 
                                                   <p><a href="#">BB & CC Cream</a></p> 
                                                   <p><a href="#">Face Palette</a></p> 
                                                </div>
                                                <div class="column">
                                                    <h3>Eyes</h3>
                                                   <p><a href="#">Eye Shadow</a></p> 
                                                   <p><a href="#">Mascra</a></p> 
                                                   <p><a href="#">Eyliner & kajal</a></p> 
                                                   <p><a href="#">Brows</a></p> 
                                                   <p><a href="#">Eye Primer</a></p> 
                                                   <p><a href="#">Conclealer</a></p> 
                                                   <p><a href="#">Lashes</a></p> 
                                                </div>
                                                <div class="column">
                                                    <h3>Lips</h3>
                                                    <p><a href="#">Lipstick</a></p> 
                                                    <p><a href="#">Liquid Lipstick</a></p> 
                                                    <p><a href="#">Lip Balm</a></p> 
                                                    <p><a href="#">Lip Plumper</a></p> 
                                                    <p><a href="#">Lip Liner</a></p> 
                                                    <p><a href="#">Lip Tint</a></p>
                                                    <br />
                                                    <h3>Nails</h3>
                                                   <p><a href="#">Nail Polish</a></p> 
                                                   <p><a href="#">Nail Care</a></p> 
                                                   <p><a href="#">Nail Polish Remover</a></p> 
                                                </div>
                                                <div class="column">
                                                    <h3>Tools & Brushes</h3>
                                                   <p><a href="#">Face Brush</a></p> 
                                                   <p><a href="#">Eye Brush</a></p> 
                                                   <p><a href="#">Applicators</a></p> 
                                                   <p><a href="#">Lip Brush</a></p>                                                     
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </ListItem>

                            <ListItem>
                                <Link to="#">
                                    <div class="d">
                                        <button class="d-btn"> Nykaa Fashion</button>
                                        <div class="d-content">
                                            <div class="row" style={{display: 'flex'}}>
                                                <div class="column">
                                                    <h3>What is new?</h3>
                                                    <p><a href="">Recently Added</a></p>
                                                    <br />
                                                    <h3>Women</h3>
                                                    <p><a href="#">Indianwear</a></p>
                                                    <p><a href="#">Westerwear</a></p>
                                                    <p><a href="#">Footwear</a></p>
                                                    <p><a href="#">Bags</a></p>
                                                    <p><a href="#">Lingerie</a></p>
                                                    <p><a href="#">Sportswear</a></p>
                                                    <p><a href="#">Sleep & Lounge</a></p>
                                                    <p><a href="#">Jewellery</a></p>
                                                    <p><a href="#">Watches</a></p>
                                                    <p><a href="#">Accessories</a></p>
                                                    <br />
                                                    <h3>Global Store</h3>
                                                    <br />
                                                    <h3>Men</h3>

                                                    <p><a href="#">Topwear</a></p>
                                                    <p><a href="#">Bottomwear</a></p>
                                                    <p><a href="#">Ethnicwear</a></p>
                                                </div>
                                                <div class="column">
                                                    <p><a href="#">Topwear</a></p>
                                                    <p><a href="#">Bottomwear</a></p>
                                                    <p><a href="#">Ethnicwear</a></p>
                                                    <p><a href="#">Footwear</a></p>
                                                    <p><a href="#">Atheisure</a></p>
                                                    <p><a href="#">Innerwear & Sleepwear</a></p>
                                                    <p><a href="#">Watches</a></p>
                                                    <p><a href="#">Accessories</a></p>
                                                    <p><a href="#">Bags</a></p>
                                                    <br />
                                                    <h3>Style Guide</h3>
                                                    <br />
                                                    <h3>Tech</h3>
                                                    <p><a href="#">Smart Wearables</a></p>
                                                    <p><a href="#">Headphones</a></p>
                                                    <p><a href="#">Speakers</a></p>
                                                    <p><a href="#">Chargers & Cables</a></p>
                                                    <p><a href="#">Power Bank</a></p>
                                                    <br />
                                                    <h3>Kids</h3>
                                                    <p><a href="#">Westernwear</a></p>
                                                    <p><a href="#">Indianwear</a></p>
                                                </div>
                                                <div class="column">
                                                    <p><a href="#">Winterwear</a></p>
                                                    <p><a href="#">Footwear</a></p>
                                                    <p><a href="#">Toys & Games</a></p>
                                                    <p><a href="#">Feeding</a></p>
                                                    <p><a href="#">Sportswear</a></p>
                                                    <p><a href="#">Sleep & Lounge</a></p>
                                                    <br />
                                                    <h3>Home</h3>
                                                    <br />
                                                    <p><a href="#">Kitchen & Dining</a></p>
                                                    <p><a href="#">Decor</a></p>
                                                    <p><a href="#">Bedding</a></p>
                                                    <p><a href="#">Bath</a></p>
                                                    <p><a href="#">Storage</a></p>
                                                    <p><a href="#">Floor Coverings</a></p>
                                                    <p><a href="#">Kitchen Appliances</a></p>
                                                    <br />
                                                    <h3>House of Nykaa</h3>
                                                    <br />
                                                    <p><a href="#">Twenty Dresses By</a></p>
                                                    <p><a href="#">Gajra Gang</a></p>
                                                    <p><a href="#">Nykaa Feshion</a></p>
                                                    <p><a href="#">RSVP By Nykaa Fashion</a></p>
                                                    <p><a href="#">Nykaa By Nykaa</a></p>
                                                </div>
                                                <div class="column">
                                                    <p><a href="#">Pipa Bella</a></p>
                                                    <p><a href="#">IYKYK By Nykaa Fashion</a></p>
                                                    <p><a href="#">Kica</a></p>
                                                    <p><a href="#">Twig And Twine</a></p>
                                                    <p><a href="#">Likha By Nykaa Fashion</a></p>
                                                    <p><a href="#">Gloot</a></p>
                                                    <p><a href="#">Nyri</a></p>
                                                    <p><a href="#">Azai By Nykaa Fashion</a></p>
                                                    <br />
                                                    <h3>Top Brands</h3>
                                                    <p><a href="#">ONLY</a></p>
                                                    <p><a href="#">W</a></p>
                                                    <p><a href="#">Vero Moda</a></p>
                                                    <p><a href="#">Fabindia</a></p>
                                                    <p><a href="#">Na-Kd</a></p>
                                                    <p><a href="#">AND</a></p>
                                                    <p><a href="#">Revolve</a></p>
                                                    <p><a href="#">Label Shaurya Sanadhya</a></p>
                                                    <p><a href="#">Biba</a></p>
                                                    <p><a href="#">Koton</a></p>
                                                    <p><a href="#">I Saw It First</a></p>
                                                    <p><a href="#">Swatantra</a></p>
                                                    <p><a href="#">Forever New</a></p>
                                                </div>
                                              

                                                <div class="column">
                                                    <Image src='https://www.nykaa.com/media/wysiwyg/2022/NF-megamenua.jpg' alt='photo' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </ListItem>
                            <ListItem><Link to="#">
                                <div class="d">
                                    <button class="d-btn">Beauty Advice</button>
                                    <div class="d-content" >
                                        <div class="row" style={{display: "flex"}}>
                                            <div class="column">

                                                <Image src='https://adn-static2.nykaa.com/media/wysiwyg/beautybook_2img.jpg' alt='nyka first' />
                                                <h3>Beauty Book</h3>
                                                <p>Nykaa's Digital Magzine</p>
                                            </div>
                                            <div class="column">
                                                <Image src='https://adn-static2.nykaa.com/media/wysiwyg/megamenu/nykaatv_1_img.png' alt='nyka center' />
                                                <h3>NYKAA TV</h3>
                                                <p>MasterClasses By Experts & Vloggers</p>
                                            </div>
                                            <div class="column">
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

                        <Button colorScheme='pink' fontSize={{base: 1,s: 5,md: 10}}>Sign in</Button>
                        <MdOutlineShoppingBasket fontSize={{base: "20px",md: 29}} />
                    </Box>
                </Box>

            </Box>

        </Box>
    )
}

export default Navbar