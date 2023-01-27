import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../App.css";
import "./skin.css";

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
];

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

const skincare = [
  {
    id: 1,
    src: "https://images-static.nykaa.com/uploads/050a6ccb-288c-42c5-a32b-d7ed71f777a6.jpg?tr=w-400,cm-pad_resize",
    tit: "Highlighters",
  },
  {
    id: 2,
    src: "https://images-static.nykaa.com/uploads/f901fb3b-707a-4de8-a81b-d1c24997606e.jpg?tr=w-400,cm-pad_resize",
    tit: "Body Lotions",
  },
  {
    id: 3,
    src: "https://images-static.nykaa.com/uploads/2ae6668a-5e4d-4b13-a2bd-29f8e5aa8f2a.jpg?tr=w-400,cm-pad_resize",
    tit: "Face Serum",
  },
  {
    id: 4,
    src: "https://images-static.nykaa.com/uploads/eca5dd45-8c78-475f-9f32-bf56253d02ae.jpg?tr=w-400,cm-pad_resize",
    tit: "Bridal Makeup",
  },
  {
    id: 5,
    src: "https://images-static.nykaa.com/uploads/4a101340-2025-46ba-8d73-ffb84e83c146.jpg?tr=w-400,cm-pad_resize",
    tit: "Eyeliners",
  },
  {
    id: 6,
    src: "https://images-static.nykaa.com/uploads/4a101340-2025-46ba-8d73-ffb84e83c146.jpg?tr=w-400,cm-pad_resize",
    tit: "Feminine Hygiene",
  },
];

const luxe = [
  {
    id: 1,
    src: "https://images-static.nykaa.com/uploads/7be5502f-ebf2-48b3-9431-fda36af9620a.jpg?tr=w-400,cm-pad_resize",
    tit: "Highlighters",
  },
  {
    id: 2,
    src: "https://images-static.nykaa.com/uploads/07090132-c2b8-4c85-b8d2-68f72ca4165e.jpg?tr=w-400,cm-pad_resize",
    tit: "Body Lotions",
  },
  {
    id: 3,
    src: "https://images-static.nykaa.com/uploads/ec14f13c-7bc0-47bd-9174-63d1df2b5d24.jpg?tr=w-400,cm-pad_resize",
    tit: "Face Serum",
  },
  {
    id: 4,
    src: "https://images-static.nykaa.com/uploads/6db0b9c6-7610-48ea-b02e-d62e71f47f87.jpg?tr=w-400,cm-pad_resize",
    tit: "Bridal Makeup",
  },
  {
    id: 5,
    src: "https://images-static.nykaa.com/uploads/01c53aba-e503-49aa-9b7f-26764a1d29d7.jpg?tr=w-400,cm-pad_resize",
    tit: "Eyeliners",
  },
];

const onlyat = [
  {
    id: 1,
    src: "https://images-static.nykaa.com/uploads/e0a5b5fe-cf83-4613-97dc-e38eeba83529.jpg?tr=w-600,cm-pad_resize",
    tit: "Highlighters",
  },
  {
    id: 2,
    src: "https://images-static.nykaa.com/uploads/baeac1f9-68dc-4e75-8ac4-227bb5760a03.jpg?tr=w-600,cm-pad_resize",
    tit: "Body Lotions",
  },
  {
    id: 3,
    src: "https://images-static.nykaa.com/uploads/c0a49b47-e1dd-4095-aa4c-45d48b2fc9dc.jpg?tr=w-600,cm-pad_resize",
    tit: "Face Serum",
  },
  {
    id: 4,
    src: "https://images-static.nykaa.com/uploads/4c4eaa7b-5742-4136-bb5a-a10e861fc89e.jpg?tr=w-600,cm-pad_resize",
    tit: "Bridal Makeup",
  },
];

const buying = [
  {
    id: 1,
    src: "https://images-static.nykaa.com/uploads/733d7e62-7793-40f0-8f70-fc91403a8418.jpg?tr=w-400,cm-pad_resize",
    tit: "Highlighters",
  },
  {
    id: 2,
    src: "https://images-static.nykaa.com/uploads/4d3a5b59-ed35-4ec7-b6de-f3b35b1970eb.jpg?tr=w-400,cm-pad_resize",
    tit: "Body Lotions",
  },
  {
    id: 3,
    src: "https://images-static.nykaa.com/uploads/8792925f-412e-442f-9f6f-22fe972f4369.jpg?tr=w-400,cm-pad_resize",
    tit: "Face Serum",
  },
];

export const Skin = () => {
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

  const resp = {
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

  const respo = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const respon = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="w-full">
      <div className="w-[100%] mx-auto text-center h-[375px] mt-2 cursor-pointer mt-32">
        <Carousel
          responsive={resp}
          autoPlay="true"
          infinite="false"
          pauseOnHover="true"
          arrows={true}
          showDots={true}
          rewind
          autoPlaySpeed={2500}
          className=""
        >
          <div className="cursor-pointer">
            <img
              className="w-[100%] shadow-md  h-autol"
              src="https://images-static.nykaa.com/uploads/eb22d7be-c2ff-47ae-9a04-953608d526ff.jpg?tr=w-1200,cm-pad_resize"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="w-[100%] shadow-md  h-autol"
              src="https://images-static.nykaa.com/uploads/bf9dc3d5-706b-4b29-98f0-ca811dd62c19.jpg?tr=w-1200,cm-pad_resize"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="w-[100%] shadow-md  h-autol"
              src="https://images-static.nykaa.com/uploads/52bde73c-f3cd-4e5e-8230-e505cdc55ee2.jpg?tr=w-1200,cm-pad_resize"
              alt=""
            />
          </div>
        </Carousel>
      </div>
      <h1 className="h">BRANDS YOU WILL LOVE</h1>
      <div className="brand">
        <div className="brand-image-1">
          <div>
            <img
              src="https://images-static.nykaa.com/uploads/81b1200b-f023-4f15-8058-45ba72985341.jpg?tr=w-300,cm-pad_resize"
              alt="estee-lauder"
            />
            <p>Bestseller Minis</p>
            <p>Starting At Rs.1350</p>
          </div>
          <div>
            <img
              src="https://images-static.nykaa.com/uploads/d07196c0-796c-4719-92ef-ea42fd144501.jpg?tr=w-300,cm-pad_resize"
              alt="clinique"
            />
          </div>
          <div>
            <img
              src="https://images-static.nykaa.com/uploads/813efe87-d2f0-47b9-8caa-20efc4a48f99.jpg?tr=w-300,cm-pad_resize"
              alt="tac"
            />
            <p>Flat 20% Off</p>
            <p>On Entire Range</p>
          </div>
          <div>
            <img
              src="https://images-static.nykaa.com/uploads/2a1a379d-4873-47c1-84f1-02ec26da90b5.jpg?tr=w-300,cm-pad_resize"
              alt="nykaa-naturals"
            />
            <p>Flat 30% Off</p>
            <p>On Entire Range</p>
          </div>
        </div>
        <div className="brand-image-2">
          <div>
            <img
              src="https://images-static.nykaa.com/uploads/9495dabe-5780-4260-b34a-f6f2f5efe10b.png?tr=w-300,cm-pad_resize"
              alt="ras"
            />
            <p>Flat 25% Off</p>
            <p>On Entire Range</p>
          </div>
          <div>
            <img
              src="https://images-static.nykaa.com/uploads/19fee3b7-95a3-4726-b2db-368e16cd787e.jpg?tr=w-300,cm-pad_resize"
              alt="only"
            />
            <p>Flat 30% Off</p>
            <p>On Entire Range</p>
          </div>
        </div>
      </div>
      <h2 className="h">SHOP BY CATEGORY</h2>
      <div className="shop">
        <div>
          <img src="https://images-static.nykaa.com/uploads/523d7014-5e8b-4eee-a2dc-d237d3099ea3.png?tr=w-300,cm-pad_resize" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/uploads/2e100c07-4244-4492-8e07-dcea640d72cc.png?tr=w-300,cm-pad_resize" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/uploads/01764611-c997-477c-8dcb-cb59a832a9c1.png?tr=w-300,cm-pad_resize" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/uploads/5cb9240c-dcb6-4611-afda-9bdca7e83da0.png?tr=w-300,cm-pad_resize" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/uploads/827cc6f1-aac8-4b26-8783-dcc0e17f744a.png?tr=w-300,cm-pad_resize" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/uploads/99836a18-3459-485c-889b-b610d828a743.png?tr=w-300,cm-pad_resize" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/uploads/4619d014-4c2d-4836-a89a-fdcdca3c746c.png?tr=w-300,cm-pad_resize" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/uploads/d979218d-69fd-4a74-8847-87a5e733d7ef.jpg?tr=w-300,cm-pad_resize" />
        </div>
      </div>
      <h2 className="h" style={{ marginTop: "30px" }}>
        SHBEST SELLER
      </h2>
      <div className="w-[95%] mx-auto mt-4">
        <div>
          <div>
            <Carousel responsive={responsive} className="  cursor-pointer ">
              {best.map((e) => (
                <div style={{ border: "0.5px solid #757575" }} key={e.id}>
                  <img
                    className="tex-2xl rounded-xl h-[156px] w-[80%]"
                    src={e.src}
                    alt=""
                  />
                  <div style={{ height: "127px", padding: "0 15px 0 15px" }}>
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
      <div className="banner-skincare">
        <img src="https://images-static.nykaa.com/uploads/95ea0697-646b-43a6-8690-2a4d9546d452.png?tr=w-1200,cm-pad_resize" />
      </div>
      <h2 className="h">SHOP BY SKIN TYPE</h2>
      <div className="skin-type">
        <div>
          <img src="https://images-static.nykaa.com/uploads/8c8a865f-8215-48fe-ba71-d49143f278fc.png?tr=w-300,cm-pad_resize" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/uploads/768efc26-207a-4960-8e1f-05479a95fc04.jpg?tr=w-300,cm-pad_resize" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/uploads/e063daf9-da76-4038-945b-eb8b6a244a6a.jpg?tr=w-300,cm-pad_resize" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/uploads/f2cd325a-b4ff-46c7-ab80-42a15c0940d7.jpg?tr=w-300,cm-pad_resize" />
        </div>
      </div>
      <h2 className="h">SHOP BY SKIN CONCERN</h2>
      <div className="w-[95%] mx-auto mt-4" style={{ marginTop: "10px" }}>
        <div>
          <div>
            <Carousel responsive={respo} className="  cursor-pointer">
              {skincare.map((e) => (
                <div key={e.id}>
                  <img
                    style={{ width: "100%", height: "auto" }}
                    src={e.src}
                    alt=""
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <h2 className="h">LUXE INDULGENCES</h2>
      <div className="w-[95%] mx-auto mt-12" style={{ marginTop: "10px" }}>
        <div>
          <div>
            <Carousel responsive={respo} className=" cursor-pointer">
              {luxe.map((e) => (
                <div style={{ marginRight: "10px" }} key={e.id}>
                  <img
                    style={{ width: "463px", height: "auto" }}
                    src={e.src}
                    alt=""
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <h2 className="h">ONLY AT NYKAA</h2>
      <div className="w-[95%] mx-auto mt-12" style={{ marginTop: "10px" }}>
        <div>
          <div>
            <Carousel responsive={respon} className=" cursor-pointer">
              {onlyat.map((e) => (
                <div
                  style={{ width: "500px", height: "auto", marginRight: "5px" }}
                  key={e.id}
                >
                  <img
                    style={{ width: "100%", height: "350px" }}
                    src={e.src}
                    alt=""
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <div className="try-buy">
        <img src="https://images-static.nykaa.com/uploads/3df85e95-5d80-46b7-a8fb-75fd485c35ba.jpg?tr=w-1200,cm-pad_resize" />
      </div>
      <h2 className="h">BUDGET BUYS</h2>
      <div className="budget-buys">
        <div>
          <img src="https://images-static.nykaa.com/uploads/22d8c420-439a-497e-a1d5-00f83c9434e0.png?tr=w-300,cm-pad_resize" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/uploads/2dc12744-1f91-4773-832a-0c4b4159e514.png?tr=w-300,cm-pad_resize" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/uploads/9a5f0327-6631-4864-a483-189a58dec58a.png?tr=w-300,cm-pad_resize" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/uploads/1e03ecd2-16b4-4812-a839-ae10a3ccfc36.png?tr=w-300,cm-pad_resize" />
        </div>
      </div>

      <h2 className="h">BUYING GUIDES</h2>
      <div className="w-[95%] mx-auto mt-12" style={{ marginTop: "10px" }}>
        <div>
          <div>
            <Carousel responsive={respon} className=" cursor-pointer">
              {buying.map((e) => (
                <div style={{ width: "493px", height: "350px" }} key={e.id}>
                  <img
                    style={{ width: "100%", height: "auto" }}
                    src={e.src}
                    alt=""
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <h2 className="h">TRENDING NOW</h2>
      <div className="trending">
        <div>
          <img src="https://images-static.nykaa.com/uploads/70b46a4c-deff-478e-b0fd-836877e46591.png?tr=w-600,cm-pad_resize" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/uploads/9ca4f436-9fc8-4584-a7b8-d64b95724e5c.png?tr=w-600,cm-pad_resize" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/uploads/77c24e83-7a20-4a6a-a5c1-f4a2e19354a0.png?tr=w-600,cm-pad_resize" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/uploads/d7f3b045-6ecd-49eb-bdb1-5df9c37638e7.png?tr=w-600,cm-pad_resize" />
        </div>
      </div>
      <div className="banner-skincare">
        <img src="https://images-static.nykaa.com/uploads/95ea0697-646b-43a6-8690-2a4d9546d452.png?tr=w-1200,cm-pad_resize" />
      </div>
    </div>
  );
};
