import React, { useEffect, useState } from "react";
import "./product.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "../App.css";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Checkbox,
  Box,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, addCarts, getCartItem } from "../redux/products/actions";
import Skelton from "./Skelton";

const Product = () => {
  const [SearchParams, setSearchParams] = useSearchParams();
  const [searchparam] = useSearchParams();
  const location = useLocation();
  const initialCategory = SearchParams.getAll("category");
  // console.log("initialCategory",initialCategory);
  const initialSort = SearchParams.getAll("sort");
  const [category, setCategory] = useState(initialCategory || []);
  const [sort, setSortBy] = useState(initialSort[0] || "");
  const [page, setPage] = useState(1);
  // console.log(location);

  const products = useSelector((store) => store.productsReducer.products);
  const loading = useSelector((store) => store.productsReducer.isLoading);
  const cartItem = useSelector((store) => store.productsReducer.cart);
  const dispatch = useDispatch();

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };
  const handleCatChange = (e) => {
    //check if the data is present in the category
    const newCategory = [...category];
    //if yes then remove it (the user has uncheck the checkbox)
    if (newCategory.includes(e.target.value)) {
      //remove it
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };
  // console.log(category);

  // console.log(page);

  const handleCart = (cartIteam) => {
    dispatch(addCarts(cartIteam))
      .then(() => dispatch(dispatch(getCartItem())))
    
      toast.success('Product Added!', {
        position: "top-center",
        });
  };

  useEffect(() => {
    //if the category changes then update the value in the url search params.
    let param = {};
    param.category = category;
    sort && (param.sort = sort);
    setSearchParams(param);
    ///
    if (location || products.length === 0) {
      const SortBy = searchparam.get("sort");
      const getProductParam = {
        params: {
          category: searchparam.getAll("category"),
          _sort: SortBy && "price",
          _order: SortBy,
          _limit: 18,
          _page: page,
        },
      };
      dispatch(getProducts(getProductParam));
      dispatch(getCartItem());
    }
  }, [
    products.length,
    dispatch,
    category,
    SearchParams,
    location.search,
    sort,
    page,
  ]);
  // console.log(products);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="product" className="mb-20">
      <ToastContainer />
      <h1 className="heading">Swiss Beauty</h1>
      <div id="Carousel">
        <Carousel
          responsive={responsive}
          autoPlay="true"
          infinite="false"
          pauseOnHover="true"
          arrows={true}
          showDots={true}
          rewind
          autoPlaySpeed={2500}
          className="-z-0"
        >
          <div className="cursor-pointer">
            <img
              className="w-[100%] shadow-md"
              src="https://images-static.nykaa.com/uploads/dc9268d9-d6b2-4d6e-91df-2895d40ae13e.jpg?tr=w-1200,cm-pad_resize"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="w-[100%] shadow-md"
              src="https://images-static.nykaa.com/uploads/a92f02a8-bb23-465f-9309-d215e603e6ae.jpg?tr=w-1200,cm-pad_resize"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[100%] shadow-md"
              src="https://images-static.nykaa.com/uploads/b30dba91-33c3-4fd0-8b35-6aa9e9a54374.jpg?tr=w-1200,cm-pad_resize"
              alt=""
            />
          </div>
        </Carousel>
      </div>
      <h1 className="heading">All Products</h1>
      <div id="box">
        <div id="chakra" className="shadow-xl">
          <div>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton h={"60px"}>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"600"}
                      fontSize="20px"
                    >
                      Sort By : Popularity
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>

                <AccordionPanel pb={4} className="flex justify-between">
                  Popularity <Checkbox ml="160px" value="popul"></Checkbox>{" "}
                </AccordionPanel>
                <AccordionPanel pb={4} className="flex justify-between">
                  Discount <Checkbox ml="170px"></Checkbox>
                </AccordionPanel>
                <AccordionPanel pb={4} className="flex justify-between">
                  Name <Checkbox ml="190px"></Checkbox>
                </AccordionPanel>
                <AccordionPanel pb={4} className="flex justify-between">
                  Customer Top Rated <Checkbox ml="89px"></Checkbox>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton h={"60px"}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"600"}
                    fontSize="20px"
                  >
                    Category
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="flex justify-between">
                {/* Lipstick{" "} */}
                <h1>Lipstick</h1>
                <Checkbox
                  type="checkbox"
                  ml="180px"
                  value="lipstick"
                  defaultChecked={category.includes("lipstick")}
                  onChange={handleCatChange}
                ></Checkbox>
              </AccordionPanel>

              <AccordionPanel pb={4} className="flex justify-between">
                Kajal{" "}
                <Checkbox
                  type="checkbox"
                  ml="200px"
                  value="eyekajal"
                  defaultChecked={category.includes("eyekajal")}
                  onChange={handleCatChange}
                ></Checkbox>
              </AccordionPanel>

              <AccordionPanel pb={4} className="flex justify-between">
                Eyeliner{" "}
                <Checkbox
                  type="checkbox"
                  ml="180px"
                  value="eyeliner"
                  defaultChecked={category.includes("eyeliner")}
                  onChange={handleCatChange}
                ></Checkbox>
              </AccordionPanel>

              <AccordionPanel pb={4} className="flex justify-between">
                Cream{" "}
                <Checkbox
                  type="checkbox"
                  ml="190px"
                  value="cream"
                  defaultChecked={category.includes("cream")}
                  onChange={handleCatChange}
                ></Checkbox>
              </AccordionPanel>

              <AccordionPanel pb={4} className="flex justify-between">
                Oil{" "}
                <Checkbox
                  type="checkbox"
                  ml="215px"
                  value="oil"
                  defaultChecked={category.includes("oil")}
                  onChange={handleCatChange}
                ></Checkbox>
              </AccordionPanel>

              <AccordionPanel pb={4} className="flex justify-between">
                Shampoo{" "}
                <Checkbox
                  type="checkbox"
                  ml="168px"
                  value="shampoo"
                  defaultChecked={category.includes("shampoo")}
                  onChange={handleCatChange}
                ></Checkbox>
              </AccordionPanel>

              <AccordionPanel pb={4} className="flex justify-between">
                Nightcream{" "}
                <Checkbox
                  type="checkbox"
                  ml="152px"
                  value="nightcream"
                  defaultChecked={category.includes("nighcream")}
                  onChange={handleCatChange}
                ></Checkbox>
              </AccordionPanel>

              <AccordionPanel pb={4} className="flex justify-between">
                NailPolish{" "}
                <Checkbox
                  type="checkbox"
                  ml="165px"
                  value="nailpant"
                  defaultChecked={category.includes("nailpant")}
                  onChange={handleCatChange}
                ></Checkbox>
              </AccordionPanel>

              <AccordionPanel pb={4} className="flex justify-between">
                Mirror{" "}
                <Checkbox
                  type="checkbox"
                  ml="190px"
                  value="mirror"
                  defaultChecked={category.includes("mirror")}
                  onChange={handleCatChange}
                ></Checkbox>
              </AccordionPanel>

              <AccordionPanel pb={4} className="flex justify-between">
                Eye Shadow{" "}
                <Checkbox
                  type="checkbox"
                  ml="150px"
                  value="kit"
                  defaultChecked={category.includes("kit")}
                  onChange={handleCatChange}
                ></Checkbox>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton h={"60px"}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"600"}
                    fontSize="20px"
                  >
                    Price
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="flex justify-between">
                Price: High To Low{" "}
                <Checkbox
                  ml="100px"
                  value="desc"
                  name="sortBy"
                  defaultChecked={sort === "desc"}
                  onChange={handleSort}
                ></Checkbox>
              </AccordionPanel>
              <AccordionPanel pb={4} className="flex justify-between">
                Price: Low To High{" "}
                <Checkbox
                  ml="100px"
                  value="asc"
                  name="sortBy"
                  defaultChecked={sort === "asc"}
                  onChange={handleSort}
                ></Checkbox>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton h={"60px"}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"600"}
                    fontSize="20px"
                  >
                    Discount
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="flex justify-between">
                10% And Above <Checkbox ml="120px"></Checkbox>
              </AccordionPanel>
              <AccordionPanel pb={4} className="flex justify-between">
                All Discount Products <Checkbox ml="80px"></Checkbox>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton h={"60px"}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"600"}
                    fontSize="20px"
                  >
                    Avg Customer Rating
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="flex justify-between">
                4 Star & above 120 <Checkbox ml="100px"></Checkbox>
              </AccordionPanel>
              <AccordionPanel pb={4} className="flex justify-between">
                3 Star & above 126 <Checkbox ml="100px"></Checkbox>
              </AccordionPanel>
              <AccordionPanel pb={4} className="flex justify-between">
                2 Star & above 126 <Checkbox ml="100px"></Checkbox>
              </AccordionPanel>
              <AccordionPanel pb={4} className="flex justify-between">
                1 Star & above 126 <Checkbox ml="100px"></Checkbox>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton h={"60px"}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"600"}
                    fontSize="20px"
                  >
                    Preference
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="flex justify-between">
                Paraben Free 61 <Checkbox ml="117px"></Checkbox>
              </AccordionPanel>
              <AccordionPanel pb={4} className="flex justify-between">
                Cruelty-Free 40 <Checkbox ml="123px"></Checkbox>
              </AccordionPanel>
              <AccordionPanel pb={4} className="flex justify-between">
                Waterproof 39 <Checkbox ml="130px"></Checkbox>
              </AccordionPanel>
              <AccordionPanel pb={4} className="flex justify-between">
                Vitamin E 29 <Checkbox ml="143px"></Checkbox>
              </AccordionPanel>
              <AccordionPanel pb={4} className="flex justify-between">
                Oil Free 39 <Checkbox ml="155px"></Checkbox>
              </AccordionPanel>
              <AccordionPanel pb={4} className="flex justify-between">
                Soap Free 29 <Checkbox ml="140px"></Checkbox>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton h={"60px"}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"600"}
                    fontSize="20px"
                  >
                    Gender
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="flex justify-between">
                Female <Checkbox ml="180px"></Checkbox>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton h={"60px"}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"600"}
                    fontSize="20px"
                  >
                    Finish
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="flex justify-between">
                Matte 45 <Checkbox ml="160px"></Checkbox>
              </AccordionPanel>
              <AccordionPanel pb={4} className="flex justify-between">
                Natural 19 <Checkbox ml="150px"></Checkbox>
              </AccordionPanel>
              <AccordionPanel pb={4} className="flex justify-between">
                Glossy 18 <Checkbox ml="158px"></Checkbox>
              </AccordionPanel>
              <AccordionPanel pb={4} className="flex justify-between">
                Luminous/Radiant 15 <Checkbox ml="77px"></Checkbox>
              </AccordionPanel>
              <AccordionPanel pb={4} className="flex justify-between">
                Satin 9 <Checkbox ml="180px"></Checkbox>
              </AccordionPanel>
              <AccordionPanel pb={4} className="flex justify-between">
                Shimmer 7 <Checkbox ml="155px"></Checkbox>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton h={"60px"}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"600"}
                    fontSize="20px"
                  >
                    Concern
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="flex justify-between">
                Dark Spots 11 <Checkbox ml="139px"></Checkbox>
              </AccordionPanel>
              <AccordionPanel pb={4} className="flex justify-between">
                Brightening 19 <Checkbox ml="133px"></Checkbox>
              </AccordionPanel>
              <AccordionPanel pb={4} className="flex justify-between">
                Under Eye Concern 18 <Checkbox ml="80px"></Checkbox>
              </AccordionPanel>
              <AccordionPanel pb={4} className="flex justify-between">
                Pores/Blakheads 15 <Checkbox ml="100px"></Checkbox>
              </AccordionPanel>
              <AccordionPanel pb={4} className="flex justify-between">
                Whiteheads 9 <Checkbox ml="140px"></Checkbox>
              </AccordionPanel>
              <AccordionPanel pb={4} className="flex justify-between">
                Anti Aging 7 <Checkbox ml="150px"></Checkbox>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>

        <div id="item" className="py-3 h-auto">
          {loading ? (
            <>
              {products.map((e, i) => (
                <Skelton key={i} />
              ))}
            </>
          ) : (
            <>
              {products.map((el) => (
                <div key={el.id} className=" shadow-xl rounded-md">
                  <div className="flex text-start w-[100%] gap-3 mt-2 text-xs px-3 font-semibold">
                    <h1 className="text-pink-600 animate-pulse duration-200">
                      FEATURED
                    </h1>
                    <h1 className="text-green-600 animate-pulse duration-100">
                      BESTSELLER
                    </h1>
                  </div>
                  <Link to={`/product/${el.id}`}>
                    <div className="overflow-hidden">
                      <img
                        className="w-[219px] h-[220px] px-2 py-2 hover:scale-125 duration-500"
                        src={el.image}
                        alt=""
                      />
                    </div>
                  </Link>
                  <h2 className="font-semibold text-center h-6 text-gray-500 px-2">
                    {el.title}
                  </h2>

                  <div id="price">
                    <h1>MRP :</h1>
                    <del className="text-gray-500"> {el.preprice}</del>
                    <p className="font-semibold text-gray-600">₹ {el.price}</p>
                    <p className="dis">| {el.discount}</p>
                  </div>
                  <div id="star" className="text-gray-600">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>{" "}
                    <h2>( {el.rating} )</h2>
                  </div>
                  <div className="w-[100%] cursor-pointer">
                    <div id="addbag" className="h-24">
                      <div
                        id="heart"
                        className="bg-white shadow-sm shadow-pink-300"
                      >
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div
                        id="bag"
                        onClick={() => handleCart(el)}
                        className="shadow-pink-400 shadow-sm"
                      >
                        Add to bag
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <div className=" w-[20%] mx-auto mt-7 mb-6 flex flex-row gap-3 ml-[50%] justify-center items-center">
        <Button
          disabled={page == 1}
          onClick={() => setPage((pre) => pre - 1)}
          size="sm"
          colorScheme="pink"
          variant="outline"
        >
          <BsChevronLeft />{" "}
        </Button>
        <Button size="md" disabled colorScheme="pink">
          {page}
        </Button>
        <Button
          disabled={products.length == 4}
          onClick={() => setPage((pre) => pre + 1)}
          size="sm"
          colorScheme="pink"
          variant="outline"
        >
          <BsChevronRight />{" "}
        </Button>
      </div>
    </div>
  );
};

export default Product;
