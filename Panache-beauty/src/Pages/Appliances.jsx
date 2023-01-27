import React from "react";
import { ApplB, ApplTop} from "../Components/ApplSec";

const Appliances = () => {
  return (
    <div className="mt-[110px]">
      <ApplTop />
      <div className="w-[95%] mx-auto text-center">
        <h1 className="text-xl md:text-3xl font-medium mt-10">BRANDS YOU WILL LOVE</h1>
        <div className="flex flex-row justify-between mt-4 py-2 ">
          <div>
            <img
            className="rounded-xl w-[60%] md:w-[100%]"
              src="https://images-static.nykaa.com/uploads/ec7a2f19-13ce-4b98-b32a-f1eb6f5c80f8.jpg?tr=w-300,cm-pad_resize"
              alt=""
            />
            <h1 className="text-xm md:text-lg font-semibold">Up To 20% Off</h1>
            <p>On Entire Range</p>
          </div>
          <div>
            {" "}
            <img
            className="rounded-xl w-[60%] md:w-[100%]"
              src="https://images-static.nykaa.com/uploads/c9b126e0-1266-4f82-aa65-de8ec8292dcc.jpg?tr=w-300,cm-pad_resize"
              alt=""
            />
            <h1 className="text-xm md:text-lg font-semibold">The world's Leading</h1>
            <p>Beauty Tech Brand</p>
          </div>
          <div>
            <img
            className="rounded-xl w-[60%] md:w-[100%]"
              src="https://images-static.nykaa.com/uploads/2764b6d3-f9cb-4724-8df0-f0742ef2b01f.jpg?tr=w-300,cm-pad_resize"
              alt=""
            />
            <h1 className="text-xm md:text-lg font-semibold">Up to 20% off</h1>
            <p>On Entire Range</p>
          </div>
          <div>
            <img
            className="rounded-xl w-[60%] md:w-[100%]"
              src="https://images-static.nykaa.com/uploads/57557d88-ae19-4422-9b9b-b1c983c76648.jpg?tr=w-300,cm-pad_resize"
              alt=""
            />
            <h1 className="text-xm md:text-lg font-semibold">Up To ₹9000 Off</h1>
            <p>On Corrale & Red Airwrap</p>
          </div>
        </div>

        <div className="flex flex-row justify-between mt-6 py-2 ">
          <div>
            <img
            className="rounded-xl w-[60%] md:w-[100%]"
              src="https://images-static.nykaa.com/uploads/837814b1-f8bf-4e26-a907-4ff50a843f3d.jpg?tr=w-300,cm-pad_resize"
              alt=""
            />
            <h1 className="text-xm md:text-xm font-semibold">Up To 20% Off</h1>
            <p className="text-sm md:text-base">On Entire Range</p>
          </div>
          <div>
            {" "}
            <img
            className="rounded-xl w-[60%] md:w-[100%]"
              src="https://images-static.nykaa.com/uploads/5a04ac7d-e4f5-44ea-8aae-5be6c9323149.jpg?tr=w-300,cm-pad_resize"
              alt=""
            />
            <h1 className="text-xm md:text-lg font-semibold">The world's Leading</h1>
            <p>Beauty Tech Brand</p>
          </div>
          <div>
            <img
            className="rounded-xl w-[60%] md:w-[100%]"
              src="https://images-static.nykaa.com/uploads/cc9bdcb4-2b59-4bb5-b7ec-d8c9396d262f.jpg?tr=w-300,cm-pad_resize"
              alt=""
            />
            <h1 className="text-xm md:text-lg font-semibold">Up to 20% off</h1>
            <p>On Entire Range</p>
          </div>
          <div>
            <img
            className="rounded-xl w-[60%] md:w-[100%]"
              src="https://images-static.nykaa.com/uploads/c9b126e0-1266-4f82-aa65-de8ec8292dcc.jpg?tr=w-300,cm-pad_resize"
              alt=""
            />
            <h1 className="text-xm md:text-lg font-semibold">Up To ₹9000 Off</h1>
            <p>On Corrale & Red Airwrap</p>
          </div>
        </div>
      </div>
      <ApplB/>
    </div>
  );
};

export default Appliances;
