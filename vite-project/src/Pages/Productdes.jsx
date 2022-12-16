import React from "react";
import "./Product.css";

const Product = () => {
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
              src="https://images-static.nykaa.com/media/catalog/product/d/2/d22e139OLAYBND000098_1.jpg"
            />
          </div>
        </div>
        <div className="subdiv2">
          <div>
            <h1 style={{ height: "auto", fontSize: "20px", textAlign: "left" }}>
              Olay Total Effects Night & Day Cream Combo
            </h1>
            <p style={{ height: "auto", fontSize: "14px", textAlign: "left" }}>
              <span>★★★★☆ </span> 4.4/5 7973 ratings & 12 reviews Q&As
            </p>
            <p style={{ textAlign: "left" }}>
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
            <p style={{ textAlign: "left", fontSize: "16px", color: "grey" }}>
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
                >
                  Add to Bag
                </button>
              </div>
              <div
                style={{ paddingLeft: "30px", textAlign: "top", width: "40%" }}
              >
                <p
                  style={{ fontSize: "18px", color: "grey", fontWeight: "500" }}
                >
                  Delivery Options
                </p>
                <div style={{ marginBottom: "30px" }}>
                  {" "}
                  <input
                    style={{ width: "100%", height: "40px", fontSize: "16px" }}
                    type="text"
                    placeholder="Enter Pincode"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="details">
            <div>100% Genuine Products</div>
            <div>Easy Return Policy</div>
            <div>Sold by :NYKAA E RETAIL PR</div>
          </div>
        </div>
      </div>
      <h2 style={{ textAlign: "left" }}>Product Description</h2>
      <div
        style={{
          display: "flex",
          //   border: "1px solid black",
          justifyContent: "space-between",
        }}
        className="description"
      >
        <div style={{ width: "74%", height: "auto" }}>
          <div
            className="text"
            style={{
              textAlign: "left",
              padding: "20px 20px 40px 18px",
              height: "auto",
            }}
          >
            {" "}
            <p style={{ textAlign: "left" }}>
              Olay Total Effects Night & Day Cream Combo Contains:
            </p>
            <p style={{ textAlign: "left" }}>
              Explore the entire range of Kits & Combos available on Nykaa. Shop
              more Olay products here.You can browse through the complete world
              of Olay Kits & Combos .Olay Total Effects 7 In One Day Cream -
              Niacinamide SPF 15 Normal: (MRP: 899.00/-) | Quantity: 1 | Expiry
              Date: 15 July 2025
            </p>
          </div>
          <h2 style={{ textAlign: "left" }}>Customers also Viewed</h2>
          <div></div>
        </div>
        <div
          style={{ width: "20%", paddingTop: "30px", position: "sticky" }}
          className="sideimage"
        >
          <img
            style={{ width: "80%" }}
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
          <p>★★★★☆ </p>
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

export default Product;
