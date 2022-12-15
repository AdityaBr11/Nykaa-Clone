//Aditya
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../App.css";

//data for fav section
const fav = [
  {
    id: 1,
    src: "https://images-static.nykaa.com/uploads/4162f650-31a3-4d41-a420-ac02caccce89.jpg?tr=w-240,cm-pad_resize",
    tit: "Highlighters",
  },
  {
    id: 2,
    src: "https://images-static.nykaa.com/uploads/144c95cd-e1d3-4b0d-8d5a-a9ecda42e737.jpg?tr=w-240,cm-pad_resize",
    tit: "Body Lotions",
  },
  {
    id: 3,
    src: "https://images-static.nykaa.com/uploads/0d1737ff-11ae-42e4-95df-937ef71a752b.jpg?tr=w-240,cm-pad_resize",
    tit: "Face Serum",
  },
  {
    id: 4,
    src: "https://images-static.nykaa.com/uploads/92447a8b-4cbc-4cfa-9c65-818137cbddf7.jpg?tr=w-240,cm-pad_resize",
    tit: "Bridal Makeup",
  },
  {
    id: 5,
    src: "https://images-static.nykaa.com/uploads/8d0d6d65-4c38-461a-8fa2-81c43b4e3052.jpg?tr=w-240,cm-pad_resize",
    tit: "Eyeliners",
  },
  {
    id: 6,
    src: "https://images-static.nykaa.com/uploads/b2df2716-c39d-40a7-b2a5-76c728a2590b.jpg?tr=w-240,cm-pad_resize",
    tit: "Feminine Hygiene",
  },
  {
    id: 7,
    src: "https://images-static.nykaa.com/uploads/4ea35342-cbb3-44ef-a556-9f1c0f749d93.jpg?tr=w-240,cm-pad_resize",
    tit: "Foundation",
  },
  {
    id: 8,
    src: "https://images-static.nykaa.com/uploads/abfde2f7-4d53-4e07-b9f7-4f088b801595.jpg?tr=w-240,cm-pad_resize",
    tit: "Fragrances",
  },
  {
    id: 9,
    src: "https://images-static.nykaa.com/uploads/7d79d30f-b511-459c-872b-2cad46a7eee6.jpg?tr=w-240,cm-pad_resize",
    tit: "Gifts Sets",
  },
  {
    id: 10,
    src: "https://images-static.nykaa.com/uploads/b21dc0cc-ff53-44e6-988c-624c0cc95c18.jpg?tr=w-240,cm-pad_resize",
    tit: "Moisturisers",
  },
];

const essentials = [
  {
    id: 1,
    src: "https://images-static.nykaa.com/uploads/c59db0d6-872e-4fd1-bc64-8331897b3965.jpg?tr=w-240,cm-pad_resize",
    tit: "Moisturisers",
  },
  {
    id: 2,
    src: "https://images-static.nykaa.com/uploads/8f8b55d5-0bfc-4545-ba05-df0177672474.jpg?tr=w-240,cm-pad_resize",
    tit: "Bath & Body",
  },
  {
    id: 3,
    src: "https://images-static.nykaa.com/uploads/aff3b609-5b3e-4d8c-8ccb-ad9157824b2d.jpg?tr=w-240,cm-pad_resize",
    tit: "Face wash",
  },
  {
    id: 4,
    src: "https://images-static.nykaa.com/uploads/e3424d3e-3c6f-4dd2-9cd3-d9ce46570133.jpg?tr=w-240,cm-pad_resize",
    tit: "Budget Makeup",
  },
  {
    id: 5,
    src: "https://images-static.nykaa.com/uploads/4bec33e3-9145-442b-9171-308834402eb3.jpg?tr=w-240,cm-pad_resize",
    tit: "Value Combos",
  },
  {
    id: 6,
    src: "https://images-static.nykaa.com/uploads/d4eba2cb-bbf9-4f6c-ac47-281819f52385.jpg?tr=w-240,cm-pad_resize",
    tit: "Shampoo & Conditionals",
  },
];

//home top section slider part
export const TopSlider = () => {
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
    <div className="w-full">
      <div>
      <div className="w-[97%] mx-auto mt-32">
            <h1 className="text-2xl font-bold">Best In Beauty</h1>
            <p className="text-lg font-semibold text-gray-600">
            Today’s Top Offers
            </p>
          </div>
      </div>
      <div className="w-[97%] mx-auto text-center h-[375px] mt-2 rounded-2xl cursor-pointer">
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
              className="w-[100%] shadow-md rounded-2xl h-autol"
              src="https://images-static.nykaa.com/uploads/ae238ad7-9d3a-48ec-b143-a9af8e1f1a0c.jpg?tr=w-1200,cm-pad_resize"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="w-[100%] shadow-md rounded-2xl h-autol"
              src="https://images-static.nykaa.com/uploads/48f735bd-2a72-4782-b526-310da18c49b1.jpg?tr=w-1200,cm-pad_resize"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="w-[100%] shadow-md rounded-2xl h-autol"
              src="https://images-static.nykaa.com/uploads/fa43fefd-74f3-4a34-9877-6780d228f813.jpg?tr=w-1200,cm-pad_resize"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="w-[100%] shadow-md rounded-2xl h-autol"
              src="https://images-static.nykaa.com/uploads/8280762d-b8ba-48e9-9959-d5cfb5f6468b.jpg?tr=w-1200,cm-pad_resize"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="w-[100%] shadow-md rounded-2xl h-autol"
              src="https://images-static.nykaa.com/uploads/c62ed2c6-e8cc-4e01-a601-709c1345b985.jpg?tr=w-1200,cm-pad_resize"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="w-[100%] shadow-md rounded-2xl h-autol"
              src="https://images-static.nykaa.com/uploads/1b38d8d2-c4f1-46ca-9698-5394169fd8e7.png?tr=w-1200,cm-pad_resize"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="w-[100%] shadow-md rounded-2xl h-autol"
              src="https://images-static.nykaa.com/uploads/101b002c-d9cc-437c-a0c7-fbf713e0140b.jpg?tr=w-1200,cm-pad_resize"
              alt=""
            />
          </div>
        </Carousel>
      </div>
      <div className="w-[95%] mx-auto">
        <div className="flex justify-between -mt-60 md:mt-8 items-center ">
          <div className="cursor-pointer hover:scale-[1.01] duration-200">
            <img
              className="rounded-2xl mx-auto w-[85%] md:w-[90%] lg:w-[100%]"
              src="https://images-static.nykaa.com/uploads/c2e6510d-e26b-4eb6-9af8-db8a0edec8f5.jpg?tr=w-700,cm-pad_resize"
              alt=""
            />
          </div>
          <div className="cursor-pointer hover:scale-[1.01] duration-200">
            <img
              className="rounded-2xl w-[85%] mx-auto md:w-[90%] lg:w-[100%]"
              src="https://images-static.nykaa.com/uploads/29e748a5-2bb8-43d0-96a6-7729d1306eb3.gif?tr=w-700,cm-pad_resize"
              alt=""
            />
          </div>
        </div>

        <div className="mt-2 md:mt-16 cursor-pointer hover:scale-[1.01] duration-200">
          <img
            className="rounded-2xl w-[90%] mx-auto md:w-[100%]"
            width="100%"
            height="118px"
            src="https://images-static.nykaa.com/uploads/ede59af5-1112-4c73-bbf8-e0aa0c08444b.jpg?tr=w-1200,cm-pad_resize"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

//Favourites section part of homePage
export const FabSec = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5.5,
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
  return (
    <div className="w-[95%] mx-auto mt-12">
      <div className="">
        <h1 className="text-2xl font-bold">Discover Our Favourites</h1>
        <p className="text-lg font-semibold text-gray-600">
          Selection Of Our Finest 10 Products
        </p>
      </div>
      <div className="mt-4 cursor-pointer hover:scale-[1.01] duration-200">
        <img
          className="w-[100%] rounded-xl"
          src="https://images-static.nykaa.com/uploads/7395e652-4706-4bff-b964-e958ff38a891.jpg?tr=w-1200,cm-pad_resize"
          alt=""
        />
      </div>
      <div className="mt-10">
        <div className="border border-gray-200 h-[330px] shadow-md px-4 ">
          <Carousel responsive={responsive} className=" h-[360px] cursor-pointer -z-0">
            {fav.map((e) => (
              <div key={e.id} className=" rounded-2xl">
                <img
                  className="tex-2xl rounded-xl h-[100%]"
                  src={e.src}
                  alt=""
                />
                <p className="relative bottom-8 text-xs md:text-lg font-semibold w-[93%] px-4 py-1 bg-[#f1f4f588] rounded-b-xl">
                  {e.tit}
                </p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

//Everydays Essentials sections

export const Essential = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5.5,
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
  return (
    <div>
      <div className="w-[100%] bg-[#e5f2f4] py-2 mt-12">
        <div className="w-[95%] mx-auto  ">
          <div className="">
            <h1 className="text-2xl font-bold">Everyday Essentials</h1>
            <p className="text-lg font-semibold text-gray-600">
              Daily Deals On Beauty Needs
            </p>
          </div>
          <div className="mt-4 cursor-pointer">
            <img
              className="w-[100%] rounded-xl"
              src="https://images-static.nykaa.com/uploads/f6f096d9-e16d-4442-9207-b4cfe79db784.jpg?tr=w-1200,cm-pad_resize"
              alt=""
            />
          </div>
          <div className="mt-10">
            <div className="border border-gray-200 h-[330px] shadow-md px-4">
              <Carousel responsive={responsive} className=" h-[360px] -z-0">
                {essentials.map((e) => (
                  <div key={e.id} className=" rounded-2xl  mr-2 cursor-pointer">
                    <img
                      className="tex-2xl rounded-md md:h-[270px] w-full"
                      src={e.src}
                      alt=""
                    />
                    <p className="relative bottom-8 text-xs md:text-base font-bold w-[99%] px-6 py-3 bg-white rounded-b-md">
                      {e.tit}
                    </p>
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="w-[99%] mx-auto mt-2 cursor-pointer hover:scale-[1.01] duration-200">
              <img
                className="w-[100%]"
                src="https://images-static.nykaa.com/uploads/0a7a21b4-f072-4baa-9ee0-ede6ef74bba9.png?tr=w-1200,cm-pad_resize"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Categories In Focus */}
      <div className="w-[95%] mx-auto mt-5">
        <div className="w-[100%] mx-auto">
          <h1 className="text-2xl font-bold">Categories In Focus</h1>
          <p className="text-lg font-semibold text-gray-600">
            Shop Our Special Curations
          </p>
        </div>
        <div className="flex justify-between mt-5 mb-5">
          <div className="rounded-2xl border hover:scale-[1.01] duration-200">
            <img
              className="w-[100%] rounded-t-2xl cursor-pointer"
              src="https://images-static.nykaa.com/uploads/a88efad0-ca06-400f-aa49-d6d8193c9575.jpg?tr=w-700,cm-pad_resize"
              alt=""
            />
            <h1 className="px-6 py-2 text-base md:text-xl font-bold">
              Toners Up To 30% off
            </h1>
          </div>

          <div className="rounded-2xl border hover:scale-[1.01] duration-200">
            <img
              className="w-100% rounded-t-2xl cursor-pointer"
              src="https://images-static.nykaa.com/uploads/15d20764-328b-47af-9962-be47f31b7765.jpg?tr=w-700,cm-pad_resize"
              alt=""
            />
            <h1 className="px-6 py-2 text-base md:text-xl font-bold">
              Upto 70% off
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

// brands slider part
const brandDa=[
  {
    id:1,
    src:"https://images-static.nykaa.com/uploads/84558a60-19d4-4f37-a9a2-8a7ab6249a53.jpeg?tr=w-240,cm-pad_resize",
    src2:"https://images-static.nykaa.com/uploads/60d820d5-5ea2-4187-8e18-588e70e8c6c4.jpg?tr=w-240,cm-pad_resize",
    src3:"https://images-static.nykaa.com/uploads/8ed75d65-948a-46b6-92e3-563d9f105c84.jpg?tr=w-240,cm-pad_resize",
    h:"High Perfomance",
    h2:"Min.10% Off",
    h3:"Facial at Home",
    p:"Makeup And Brushes",
    p2:"On Intire Range",
    p3:"Flat 15% off"
  },
  {
    id:2,
    src:"https://images-static.nykaa.com/uploads/90a3004f-79a5-4bf9-84ff-8d656c0c9c4b.jpg?tr=w-240,cm-pad_resize",
    src2:"https://images-static.nykaa.com/uploads/23951d99-e2f3-48e2-ac05-49d88e4d52f1.jpg?tr=w-240,cm-pad_resize",
    src3:"https://images-static.nykaa.com/uploads/0769ac4a-3dda-45bb-9995-bae2c2c41925.png?tr=w-240,cm-pad_resize",
    h2:"Upto 20% Off",
    h3:"Enhances Glow",
    p2:"On Intire Range",
    p3:"Boosts Radients",
    h:"Fragrances By Huda",
    p:"& Mona Kattan"
  },
  {
    id:3,
    src:"https://images-static.nykaa.com/uploads/e6f5bfa6-0e1e-4042-b29f-531f557ce678.jpg?tr=w-240,cm-pad_resize",
    src2:"https://images-static.nykaa.com/uploads/99ebb1cf-690f-4827-9f5d-c9739b24db9f.jpg?tr=w-240,cm-pad_resize",
    src3:"https://images-static.nykaa.com/uploads/a6ffd5f1-6999-491e-861b-edea34bb2016.jpg?tr=w-240,cm-pad_resize",
    h2:"Mega Febulous &",
    h3:"Tonners That",
    p2:"Multi-Use Minis",
    p3:"Works Wonders",
    h:"Complimentary Gift",
    p:"On All Orders"
  },
  {
    id:4,
    src:"https://images-static.nykaa.com/uploads/78c539f1-c06c-4c1c-8bce-534f0b1a0ced.jpg?tr=w-240,cm-pad_resize",
    src2:"https://images-static.nykaa.com/uploads/80f76120-674c-40d3-9870-76077b6f544b.jpg?tr=w-240,cm-pad_resize",
    src3:"https://images-static.nykaa.com/uploads/77dc552f-ec75-4bfb-b851-604a052eca69.png?tr=w-240,cm-pad_resize",
    h2:"Flat 20% Off",
    h3:"Gentle Skin Care",
    p2:"On the Intire Range",
    p3:"By Huda Kuttan",
    h:"Exclusive Offers",
    p:"On Bestsellers"
  },
  {
    id:5,
    src:"https://images-static.nykaa.com/uploads/75ad06b4-e18c-4258-a6ff-ce3d78ee4162.jpg?tr=w-240,cm-pad_resize",
    src2:"https://images-static.nykaa.com/uploads/9543baff-6b4e-4d1d-ab9c-e7bded753c9c.jpg?tr=w-240,cm-pad_resize",
    src3:"https://images-static.nykaa.com/uploads/e1482d8b-a194-4229-be79-ad1e80851e23.jpg?tr=w-240,cm-pad_resize",
    h2:"Up To 40% Off ",
    h3:"Collagen Rich",
    p2:"On the Intire Range",
    p3:"Body Care",
    h:"Gifts Worth ₹550",
    p:"On ₹1000"
  },
  {
    id:6,
    src:"https://images-static.nykaa.com/uploads/7fbe51fb-f11e-44bb-8188-5f624c1285e0.jpg?tr=w-240,cm-pad_resize",
    src2:"https://images-static.nykaa.com/uploads/27d2c518-32f0-4d8a-a956-6baf9a27d00a.jpg?tr=w-240,cm-pad_resize",
    src3:"https://images-static.nykaa.com/uploads/f0ea4956-76d4-4b7c-95b5-ea1a1b8768b3.jpg?tr=w-240,cm-pad_resize",
    h2:"View All",
    h3:"View All",
    p2:"Makup",
    p3:"Skin Care",
    h:"View All",
    p:"Luxe"
  }
]


export const BrandSlider=()=>{
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5.5,
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
  return(
    <div className="w-full">
       <div className="w-[95%] mx-auto">
       <div className="mt-4">
            <h1 className="text-2xl font-bold">Brands You Can't Miss</h1>
            <p className="text-lg font-semibold text-gray-600">
              More Offers On Beauty
            </p>
          </div>

          {/* carousel */}
          <div>
            <h1 className="text-xm font-bold mt-2">Luxe</h1>
            <div className="mt-2">
            <Carousel responsive={responsive}  className="-z-0">
              {brandDa.map((e)=>(
                <div key={e.id} className="mr-6 border border-gray-200 md:w-[241px] rounded-xl shadow-lg cursor-pointer" >
                   <img className="w-[100%] rounded-t-xl" src={e.src} alt="" />
                   <h1 className="text-lg font-semibold px-4 mt-2">{e.h}</h1>
                   <p className="text-base text-gray-600 px-4 mb-2">{e.p}</p>
                </div>
              ))}
            </Carousel>
            </div>
          </div>

          <div>
            <h1 className="text-xm font-bold mt-3">Makeup</h1>
            <div className="mt-2">
            <Carousel responsive={responsive}  className="-z-0">
              {brandDa.map((e)=>(
                <div key={e.id} className="mr-6 border border-gray-200 md:w-[241px] rounded-xl shadow-lg cursor-pointer">
                   <img className="w-[100%] rounded-t-xl" src={e.src2} alt="" />
                   <h1 className="text-lg font-semibold px-4 mt-2">{e.h2}</h1>
                   <p className="text-base text-gray-600 px-4 mb-2">{e.p2}</p>
                </div>
              ))}
            </Carousel>
            </div>
          </div>

          <div>
            <h1 className="text-xm font-bold mt-3">Skin</h1>
            <div className="mt-2">
            <Carousel responsive={responsive}  className="-z-0" >
              {brandDa.map((e)=>(
                <div key={e.id} className="mr-6 border border-gray-200 md:w-[241px] rounded-xl shadow-lg cursor-pointer">
                   <img className="w-[100%] rounded-t-xl" src={e.src3} alt="" />
                   <h1 className="text-lg font-semibold px-4 mt-2">{e.h3}</h1>
                   <p className="text-base text-gray-600 px-4 mb-2">{e.p3}</p>
                </div>
              ))}
            </Carousel>
            </div>
          </div>
          <div>
            <img className="w-full mt-4 cursor-pointer" src="https://images-static.nykaa.com/uploads/f4c3f4d7-a236-4e7a-92f8-e5ba0417c05e.png?tr=w-1200,cm-pad_resize" alt="" />
          </div>

       </div>
    </div>
  )
}

//Editor Choice Section

const Edc=[
  {
    id:1,
    src:"https://images-static.nykaa.com/uploads/d120171d-a4a5-44a2-b2d3-a3e2b43375b9.jpg?tr=w-240,cm-pad_resize",
    h1:"Min or Max",
    p:"The Bridal Edit",
  },
  {
    id:2,
    src:"https://images-static.nykaa.com/uploads/c99834e6-8953-41b7-bfe4-a75a84db09a6.jpg?tr=w-240,cm-pad_resize",
    h1:"Skin Loving'Sesh",
    p:'For Ultimate Glow',
  },
  {
    id:3,
    src:"https://images-static.nykaa.com/uploads/d8c3d941-15e0-442c-80c9-a1b57e54495b.jpg?tr=w-240,cm-pad_resize",
    h1:"Your D Day Tools",
    p:'For Perfect Hairstyles',
  },
  {
    id:4,
    src:"https://images-static.nykaa.com/uploads/9e5568ae-0398-44a5-bf0a-af37788f4f5b.jpg?tr=w-240,cm-pad_resize",
    h1:"Get Your Glow On",
    p:'With Body Essentials',
  },{
    id:5,
    src:"https://images-static.nykaa.com/uploads/58177876-f4ee-4744-ae45-642ba8b97a4d.jpg?tr=w-240,cm-pad_resize",
    h1:"Makup Must-Haves",
    p:'Moments Of Self-Care',
  }
]
export const EditorC=()=>{

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return(
    <div className="w-full">
      <div className="w-[95%] mx-auto mt-8 mb-10">
        <div>
        <h1 className="text-2xl font-bold">Editor’s Choice</h1>
            <p className="text-lg font-semibold text-gray-600">
            Handpicked By Our Experts
            </p>
        </div>

        <div className="">
          <Carousel responsive={responsive}  className="-z-0">
            {Edc.map((e)=>(
              <div key={e.id} className="mr-6 border border-gray-200 rounded-xl shadow-xl mt-2">
                <img className="w-full rounded-t-xl" src={e.src} alt="" />
                <div className="px-4 py-2">
                <h1 className="text-lg font-semibold">{e.h1}</h1>
                <p>{e.p}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}