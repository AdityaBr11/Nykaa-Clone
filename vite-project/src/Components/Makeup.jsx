import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import "../App.css";
import "./makeup.css"
const Makeup = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const luxe = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3.2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div id="makeup">
      <div >
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
              src="https://images-static.nykaa.com/uploads/0b00a228-1358-4b5a-8e30-44c2800a863c.jpg?tr=w-1200,cm-pad_resize"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="w-[100%] shadow-md"
              src="https://images-static.nykaa.com/uploads/2bb08f69-2f8b-4494-805c-89d203d90a95.jpg?tr=w-1200,cm-pad_resize"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="w-[100%] shadow-md"
              src="https://images-static.nykaa.com/uploads/0cf76bc5-d07b-432f-98a6-cdf1658cb645.jpg?tr=w-1200,cm-pad_resize"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="w-[100%] shadow-md"
              src="https://images-static.nykaa.com/uploads/3482885b-6dfd-4bd2-b4b9-66ea4ae20052.jpg?tr=w-1200,cm-pad_resize"
              alt=""
            />
          </div>
        </Carousel>
      </div>
      <Link to="/product">
      <div id="brand">
        <h1>BRANDS YOU WILL LOVE</h1>
        <div>
          {
            brand.map((el)=>(
              <div key={el.id}>
                <img src={el.image} alt="avtar" />
                <h2>{el.title}</h2>
                <p>{el.description}</p>
              </div>
            ))
          }
        </div>
      </div>
      </Link>
      <div id="category">
          <h1>SHOP BY CATEGORY</h1>
          <div>
            <img src="https://images-static.nykaa.com/uploads/9b5d2e95-9862-4210-9052-69d57e266c1a.png?tr=w-300,cm-pad_resize" alt="" />
            <img src="https://images-static.nykaa.com/uploads/50721198-7a1d-4bca-8ad8-41accc5e196a.png?tr=w-300,cm-pad_resize" alt="" />
            <img src="https://images-static.nykaa.com/uploads/f8f3978f-911f-4808-be05-cd2b076cbc41.png?tr=w-300,cm-pad_resize" alt="" />
            <img src="https://images-static.nykaa.com/uploads/69a2e1fb-af56-447b-a5e2-f7ed35e6631e.png?tr=w-300,cm-pad_resize" alt="" />
            <img src="https://images-static.nykaa.com/uploads/0407623b-584c-4353-8308-e78b9f2bd924.png?tr=w-300,cm-pad_resize" alt="" />
            <img src="https://images-static.nykaa.com/uploads/b60ac98f-c620-448c-af55-8cc80dc05514.png?tr=w-300,cm-pad_resize" alt="" />
            <img src="https://images-static.nykaa.com/uploads/92feebf7-949c-417f-8e4b-07a3a3f1b36d.png?tr=w-300,cm-pad_resize" alt="" />
            <img src="https://images-static.nykaa.com/uploads/f037423f-91b7-42d1-ad30-6b360134132c.png?tr=w-300,cm-pad_resize" alt="" />
          </div>
      </div>
      <div id="bestseller">
        <h1>BESTSELLERS</h1>
        <div>
          {
            bestseller.map((el)=>(
              <div key={el.id}>
                <img src={el.image} alt="" />
                <h2>{el.title}</h2>
                <h3>{el.gram}</h3>
                <div id="star"><i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>{" "}
                <h2>{el.star}</h2>
                </div>
                <div id="price">
                  <del>{el.preprice}</del>
                  <p>{el.price}</p>
                  <p className="dis">|{el.discount}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div id="luxe">
          <img src="https://images-static.nykaa.com/uploads/2a2bb648-fef5-40d8-a03f-5e4c235da630.png?tr=w-1200,cm-pad_resize" alt="" />
         
      </div>
      <div className="nykaa">
        <h1>ONLY AT NYKAA</h1>
        <div>
          <img src="https://images-static.nykaa.com/uploads/33ca8b7d-fa0a-4a4c-839c-407a62b72aee.jpg?tr=w-600,cm-pad_resize" alt="" />
          <img src="https://images-static.nykaa.com/uploads/afaee311-ee29-4dc8-a934-91c9ebb2ec1b.jpg?tr=w-600,cm-pad_resize" alt="" />
          <img src="https://images-static.nykaa.com/uploads/e9a9163a-0a45-4813-b425-aee0e9c33f86.jpg?tr=w-600,cm-pad_resize" alt="" />
        </div>
      </div>

      <div id="budget">
        <h1>BUDGET BUYS</h1>
        <div>
          <img src="https://images-static.nykaa.com/uploads/5764d121-1bcf-46ae-b3c5-fba44c70b02a.png?tr=w-300,cm-pad_resize" alt="" />
          <img src="https://images-static.nykaa.com/uploads/42bc1db7-bb18-4ad8-8ffe-3f6b238633b0.png?tr=w-300,cm-pad_resize" alt="" />
          <img src="https://images-static.nykaa.com/uploads/32417d1b-87f0-4444-81d6-d328aa5dd7be.png?tr=w-300,cm-pad_resize" alt="" />
          <img src="https://images-static.nykaa.com/uploads/05fac9db-b234-4910-9df9-ff8e7c15d7d0.png?tr=w-300,cm-pad_resize" alt="" />
        </div>
      </div>
      <div id="black">
        <img src="https://images-static.nykaa.com/uploads/2b3af26c-6dd4-461d-8451-ed0014d31b78.png?tr=w-1200,cm-pad_resize" alt="avtar" />
      </div>
      <div className="nyka">
        <h1>BUYING GUIDES</h1>
        <div>
          <img src="https://images-static.nykaa.com/uploads/b7ded18f-cc1c-47a1-86ca-1ff0c1926bcd.jpg?tr=w-400,cm-pad_resize" alt="" />
          <img src="https://images-static.nykaa.com/uploads/15fc2460-ea93-4086-9925-a98b7f542d25.jpg?tr=w-400,cm-pad_resize" alt="" />
          <img src="https://images-static.nykaa.com/uploads/08a262fd-7c51-4259-a44b-59e7b5d67bdd.jpg?tr=w-400,cm-pad_resize" alt="" />
        </div>
      </div>
      <div id="trending">
        <h1>TRENDING NOW</h1>
        <div>
          <img src="https://images-static.nykaa.com/uploads/3a4524e8-b765-400c-8d4b-903fc73c223c.jpg?tr=w-600,cm-pad_resize" alt="" />
          <img src="https://images-static.nykaa.com/uploads/c47bee3f-8359-4766-9fb8-76d20938f4c7.jpg?tr=w-600,cm-pad_resize" alt="" />
          <img src="https://images-static.nykaa.com/uploads/6ecc5e91-2fe3-4b8f-a077-6d64e21ca33f.jpg?tr=w-600,cm-pad_resize" alt="" />
          <img src="https://images-static.nykaa.com/uploads/8bc7754d-713a-4efc-8f01-96067896719c.jpg?tr=w-600,cm-pad_resize" alt="" />
        </div>
        
      </div>
      <div id="last">
      <img src="https://images-static.nykaa.com/uploads/2a2bb648-fef5-40d8-a03f-5e4c235da630.png?tr=w-1200,cm-pad_resize" alt="" />
      </div>
  
    </div>
  )
}



let brand=[
  {
    "css-13o7eu2 href": "https://www.nykaa.com/brands/c/2534",
    "image": "https://images-static.nykaa.com/creatives/a18ff99c-1dee-430a-86f0-aa4e05059409/default.jpg?tr=w-300,cm-pad_resize",
    "title": "Upto 10% Off",
    "description": "On Entire Range"
  },
  {
    "css-13o7eu2 href": "https://www.nykaa.com/brands/c/1937",
    "image": "https://images-static.nykaa.com/creatives/e28c64af-399f-422f-820b-e86d1e4b5d8a/default.jpg?tr=w-300,cm-pad_resize",
    "title": "Upto 40% Off",
    "description": "On entire range"
  },
  {
    "css-13o7eu2 href": "https://www.nykaa.com/brands/c/2347",
    "image": "https://images-static.nykaa.com/creatives/9b310496-5be6-4fb9-8829-e241f5635b40/default.jpg?tr=w-300,cm-pad_resize",
    "title": "Upto 35% Off",
    "description": "On Cult Favourites"
  },
  {
    "css-13o7eu2 href": "https://www.nykaa.com/brands/c/6166",
    "image": "https://images-static.nykaa.com/creatives/49423058-a4f3-416a-b486-5b7d81d748b3/default.jpg?tr=w-300,cm-pad_resize",
    "title": "Flat 10% off",
    "description": "On orders above ₹399"
  },
  {
    "css-13o7eu2 href": "https://www.nykaa.com/brands/c/8335",
    "image": "https://images-static.nykaa.com/creatives/c795eab6-4cfb-4c17-ab41-2fbdb9edf174/default.jpg?tr=w-300,cm-pad_resize",
    "title": "Upto 30% Off",
    "description": "On Entire Range"
  },
  {
    "css-13o7eu2 href": "https://www.nykaa.com/brands/c/596",
    "image": "https://images-static.nykaa.com/creatives/feb58eda-20b8-489b-89b4-2230f163f0a8/default.jpg?tr=w-300,cm-pad_resize",
    "title": "Upto 35% Off",
    "description": "Great Deals On Combos"
  },
  {
    "css-13o7eu2 href": "https://www.nykaa.com/brands/c/642",
    "image": "https://images-static.nykaa.com/creatives/b2a78bef-9c5e-4403-b90e-2c6f83191d26/default.jpg?tr=w-300,cm-pad_resize",
    "title": "Upto 50% Off",
    "description": "Free Lipcolour on Rs 699+"
  },
  {
    "css-13o7eu2 href": "https://www.nykaa.com/brands/c/2203",
    "image": "https://images-static.nykaa.com/creatives/bcd2704b-c4b2-427f-b9a1-705847a6e507/default.png?tr=w-300,cm-pad_resize",
    "title": "Up To 50% Off",
    "description": "On Entire Range"
  }
]

let bestseller=[
  {
    "offer": "OFFER",
    "css-u4u0nz href": "https://www.nykaa.com/l-a-girl-pro-conceal-hd/p/40862",
    "image": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/0/e/0e16918NYLAGRL000033_1.jpg",
    "title": "L.A. Girl Pro Conceal HD - Orange Corrector",
    "gram": "8gm",
    "star": 30364,
    "preprice": "₹695",
    "price": "₹626",
    "discount": "10% Off!",
    "bestseller": "",
    "css-1fbirh": ""
  },
  {
    "offer": "",
    "css-u4u0nz href": "https://www.nykaa.com/lakme-absolute-blur-perfect-makeup-primer-10-g/p/799168",
    "image": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/4/24815_h-8901030790065.jpg",
    "title": "Lakme Absolute Blur Perfect Makeup Primer - Mini",
    "gram": "10gm",
    "star": 15724,
    "preprice": "₹299",
    "price": "₹284",
    "discount": "5% Off!",
    "bestseller": "BESTSELLER",
    "css-1fbirh": ""
  },
  {
    "offer": "",
    "css-u4u0nz href": "https://www.nykaa.com/maybelline-volum-express-hyper-curl-mascara/p/809",
    "image": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/f/8/f8176746923492584206_1.jpg",
    "title": "Maybelline New York Hyper Curl Mascara - Waterproof Very ...",
    "gram": "9.2ml",
    "star": 73632,
    "preprice": "₹499",
    "price": "₹349",
    "discount": "30% Off!",
    "bestseller": "",
    "css-1fbirh": ""
  },
  {
    "offer": "",
    "css-u4u0nz href": "https://www.nykaa.com/m-a-c-strobe-cream-mini-hydratant-lumineux/p/822107",
    "image": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/0/b/0b50cb3773602575534.jpg",
    "title": "M.A.C Strobe Cream / Mini Hydratant Lumineux Pinklite",
    "gram": "15ml",
    "star": 6117,
    "preprice": "₹499",
    "price": "₹349",
    "discount": "30% Off!",
    "bestseller": "BESTSELLER",
    "css-1fbirh": "₹1100"
  },
  {
    "offer": "",
    "css-u4u0nz href": "https://www.nykaa.com/l-oreal-paris-voluminous-lash-paradise-mascara/p/326824",
    "image": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/9/0/900b16c71249343326.jpg",
    "title": "LOreal Paris Voluminous Lash Paradise Mascara - 204 Black...",
    "gram": "7.6ml",
    "star": 12124,
    "preprice": "₹849",
    "price": "₹636",
    "discount": "25% Off!",
    "bestseller": "BESTSELLER",
    "css-1fbirh": ""
  },
  {
    "offer": "",
    "css-u4u0nz href": "https://www.nykaa.com/swiss-beauty-long-lasting-makeup-fixer-natural-1/p/367161",
    "image": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/3/9/3900695NYSWISSB00122_1.jpg",
    "title": "Swiss Beauty Long Lasting Makeup Fixer Natural Aloe Vera ...",
    "gram": "70ml",
    "star": 40033,
    "preprice": "₹249",
    "price": "₹224",
    "discount": "10% Off!",
    "bestseller": "BESTSELLER",
    "css-1fbirh": ""
  },
  {
    "offer": "",
    "css-u4u0nz href": "https://www.nykaa.com/colorbar-precision-waterproof-liquid-eyeliner-with-shiny-silver-cap/p/4942",
    "image": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/0/6/066c973N_8904052432975_1.jpg",
    "title": "Colorbar Waterproof Liquid Eyeliner",
    "gram": "2.5ml",
    "star": 8691,
    "preprice": "₹425",
    "price": "₹340",
    "discount": "20% Off!",
    "bestseller": "BESTSELLER",
    "css-1fbirh": ""
  },
  {
    "offer": "",
    "css-u4u0nz href": "https://www.nykaa.com/kay-kohlstar-kajal-spade/p/573594",
    "image": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/d/b/dbeb4e88904330900424_1.jpg",
    "title": "Kay Beauty Waterproof 24 Hour Kajal - Spade - Black",
    "gram": "0.35g",
    "star": 16503,
    "preprice": "₹499",
    "price": "₹349",
    "discount": "30% Off!",
    "bestseller": "BESTSELLER",
    "css-1fbirh": "₹299"
  },
  {
    "offer": "",
    "css-u4u0nz href": "https://www.nykaa.com/pac-x-jovita-allyouneed-brush-kit-8-brushes/p/3800019",
    "image": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/c/a/ca52eecpacxx00000133_1.jpg",
    "title": "PAC X Jovita #AllYouNeed Brush Kit (8 Brushes)",
    "gram": "1 pcs",
    "star": 979,
    "preprice": "₹499",
    "price": "₹349",
    "discount": "30% Off!",
    "bestseller": "BESTSELLER",
    "css-1fbirh": "₹2995"
  },
  {
    "offer": "OFFER",
    "css-u4u0nz href": "https://www.nykaa.com/nykaa-so-creme-creamy-matte-lipstick-wakeup-makeup/p/683148",
    "image": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/7/279c0c58904245710927_0.jpg",
    "title": "Nykaa So Creme! Creamy Matte Lipstick - Wakeup Makeup",
    "gram": "4.2gm",
    "star": 69163,
    "preprice": "₹399",
    "price": "₹249",
    "discount": "30% Off!",
    "bestseller": "",
    "css-1fbirh": "₹325"
  }
]


export default Makeup

