import React from 'react'
import Carousel from 'react-multi-carousel';
import '../App.css'

const pho=[
    {
        id:1,
        src:"https://images-static.nykaa.com/uploads/8a3f3046-e49f-4a9f-827d-884d55e66d43.jpg?tr=w-1200,cm-pad_resize"
    },
    {
        id:2,
        src:"https://images-static.nykaa.com/uploads/d3661216-7ecc-405e-8be0-edc8e13d0a97.jpg?tr=w-1200,cm-pad_resize"
    },
    {
        id:3,
        src:"https://images-static.nykaa.com/uploads/6da5f167-2fd9-4f88-bc8b-dd17c013ca98.jpg?tr=w-1200,cm-pad_resize"
    },
    {
        id:4,
        src:"https://images-static.nykaa.com/uploads/1e0764ff-053f-466a-82fb-8f88ac4dc606.jpg?tr=w-1200,cm-pad_resize"
    },
    {
        id:5,
        src:"https://images-static.nykaa.com/uploads/e5c2f7ba-1736-47cc-95e5-065c6b07fc12.jpg?tr=w-1200,cm-pad_resize"
    },
]
export const ApplTop=()=>{
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
    return(
        <div className='w-full'>
            <Carousel 
             responsive={responsive}
             autoPlay="true"
             infinite="false"
             pauseOnHover="true"
             arrows={true}
            //  showDots={true}
             autoPlaySpeed={2500}
             
             className="-z-0 slide">
                {pho.map((e)=>(
                    <div className='' key={e.id}>
                        <img className='w-[100%]' src={e.src} alt="" />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}
//★★★★☆

const B=[
    {
        id:1,
        src:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/9/4/94573948904320002060_1.jpg",
        src2:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/0/1/01bd2798009031110339_1.jpg",
        h:"Agaro Hair Curler (HC-8001) ",
        star:"★★★★☆",
        rt:3283,
        bp:"1595",
        ap:"799",
        off:"50%"
    },
    {
        id:2,
        src:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/d/ad59d3dDYSON00000031_1.jpg",
        src2:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/3/7/373bd23PHIAA00000083.jpg",
        h:"Dyson Corrale Hair Straightener - Bright",
        star:"★★★★☆",
        rt:9,
        bp:"38900",
        ap:"29899",
        off:"23%"
    },
    {
        id:3,
        src:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/1/5/15f625a8904086303074_1.jpg",
        src2:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/4/f/4f4df368904320009588__1_.jpg",
        h:"VEGA VHSCC-01 3 In 1 Hair Styler",
        star:"★★★★☆",
        rt:3283,
        bp:"2328",
        ap:"1520",
        off:"20%"
    },
    {
        id:4,
        src:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/f/d/fd6116c8710103897392.jpg",
        src2:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/b/a/ba6b25a8904086303050_1.jpg",
        h:"Philips Heated Straightening Brush",
        star:"★★★☆☆",
        rt:1255,
        bp:"5620",
        ap:"4500",
        off:"27%"
    },
    {
        id:5,
        src:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/3/9/39ab3444210201171171_1.jpg",
        src2:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/5/85cbda6LORAA00000004_1.jpg",
        h:" Braun Facespa 851v 3-in-1 Facial Epilating, Cleansing &",
        star:"★★★☆☆",
        rt:80,
        bp:"800",
        ap:"750",
        off:"5%"
    },
    {
        id:6,
        src:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/9/8901762140893zx.png",
        src2:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/9/6/96f42d58809254803922.jpg",
        h:"Havells FDSO000 Lady Facial Hair Remover. Batterv",
        star:"★★★☆☆",
        rt:865,
        bp:"1595",
        ap:"799",
        off:"50%"
    },
    {
        id:7,
        src:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/n/h/nht-1149-kit_1.jpeg",
        src2:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/e/a/ea581f1ALANT00000042_2.jpg",
        h:"Nova SuperGroom-8 NG1149 Recharaeable Hair",
        star:"★★★★☆",
        rt:3283,
        bp:"2583",
        ap:"1456",
        off:"30%"
    },
]
const NewS=[
    {
        id:1,
        src:"https://images-static.nykaa.com/uploads/816d0f47-6ce7-4b5a-8915-760f683f9d3b.jpg?tr=w-400,cm-pad_resize"
    },
    {
        id:2,
        src:"https://images-static.nykaa.com/uploads/75b4f020-228d-4c10-b70e-83b0ec36f1b5.jpg?tr=w-400,cm-pad_resize"
    },
    {
        id:3,
        src:"https://images-static.nykaa.com/uploads/2b234409-64f4-443b-8fa7-36dc228a1426.jpg?tr=w-400,cm-pad_resize"
    },
    {
        id:4,
        src:"https://images-static.nykaa.com/uploads/23a7af4e-2dad-4760-90a7-671151ef0614.jpg?tr=w-400,cm-pad_resize"
    },
    {
        id:5,
        src:"https://images-static.nykaa.com/uploads/d1bc914f-f8e7-4a7c-b8b1-a33bf25565d1.jpg?tr=w-400,cm-pad_resize"
    },
    {
        id:6,
        src:"https://images-static.nykaa.com/uploads/33b4db88-e169-43ce-9725-c17dd9fa4ede.jpg?tr=w-400,cm-pad_resize"
    },
    
]
export const ApplB=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3,
        },
      };
      const responsive1 = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4,
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
    return(
        <div className='w-[100%] bg-[#f3f3f3] py-7 mt-3'>
            <div className='w-[80%] mx-auto mt-5 mb-2'>
                <h1 className='text-center text-3xl text-gray-500 mt-2 mb-2'>Bestsellers</h1>
                <Carousel
                responsive={responsive}
                arrows={true} className='z-0'>
                    {B.map((e)=>(
                        <div key={e.id} className="border border-gray-200 py-2 h-[380px] bg-white">
                            <h1 className='absolute top-3 ml-1 border border-green-400 text-[10px] font-semibold text-green-600 bg-green-50 px-1 tracking-wider bestS'>BEST SELLER</h1>
                            <img className='w-[100%]' src={e.src} alt="" />
                            <h1 className='px-3'>{e.h}</h1>
                            <div className='px-3'>
                                <h1 className='text-xs'>{e.star} {e.rt}</h1>
                            </div>
                            <div className='flex gap-4 px-3'>
                                <div className='flex gap-2'>
                                    <h1 className='line-through text-gray-500'>₹{e.bp}</h1>
                                    <p>₹{e.ap}</p>
                                </div>
                                <h1 className='text-green-700'>{e.off} Off!</h1>
                            </div>
                            <button className='mt-3 text-center  w-full font-semibold text-red-500 hover:scale-[1.08] duration-200'>View</button>
                        </div>
                    ))}
                </Carousel>
                <div className='mt-8'>
                    <img className='w-[100%] rounded-md' src="https://images-static.nykaa.com/uploads/b5a50309-ecb6-44ef-9028-be5d7d514d00.jpg?tr=w-1200,cm-pad_resize" alt="" />
                </div>
            </div>

            <div className='w-[95%] mx-auto mt-16'>
                <h1 className="text-xl md:text-3xl font-medium mt-10 text-center">BUDGET BUYS</h1>
                <div className='flex flex-row gap-6 mt-4'>
                    <img className='w-[20%] md:w-[100%] rounded-xl' src="https://images-static.nykaa.com/uploads/57b60835-d50a-4dc6-a89e-44e17dc486b7.jpg?tr=w-300,cm-pad_resize" alt="" />
                    <img className='w-[20%] md:w-[100%] rounded-xl' src="https://images-static.nykaa.com/uploads/db6058e0-4031-4db9-bade-0fbfdfbed8ba.jpg?tr=w-300,cm-pad_resize" alt="" />
                    <img className='w-[20%] md:w-[100%] rounded-xl' src="https://images-static.nykaa.com/uploads/cfd27cc6-bc15-4c3e-af3f-6092d5fdc02f.jpg?tr=w-300,cm-pad_resize" alt="" />
                    <img className='w-[20%] md:w-[100%] rounded-xl' src="https://images-static.nykaa.com/uploads/36132cee-4e7c-4d0e-aa05-1b99ea535aa5.jpg?tr=w-300,cm-pad_resize" alt="" />
                </div>
            </div>

            <div className='w-[100%] mt-16 bg-[#e2e5ea]'>
                <div className='w-[80%] mx-auto py-8'>
                <img className='w-[100%]' src="https://images-static.nykaa.com/uploads/6e7e5102-a88f-451c-8438-48c94464efd4.jpg?tr=w-1200,cm-pad_resize" alt="" />
                </div>
            </div>

            <div className='w-[80%] mx-auto mt-5 mb-2 car'>
                <Carousel
                responsive={responsive}
                arrows={true} className="z-0">
                    {B.map((e)=>(
                        <div key={e.id} className="border border-gray-200 py-2 h-[380px] bg-white">
                            <h1 className='absolute top-3 ml-1 border border-green-400 text-[10px] font-semibold text-green-600 bg-green-50 px-1 tracking-wider bestS'>BEST SELLER</h1>
                            <img className='w-[100%]' src={e.src2} alt="" />
                            <h1 className='px-3'>{e.h}</h1>
                            <div className='px-3'>
                                <h1 className='text-xs'>{e.star} {e.rt}</h1>
                            </div>
                            <div className='flex gap-4 px-3'>
                                <div className='flex gap-2'>
                                    <h1 className='line-through text-gray-500'>₹{e.bp}</h1>
                                    <p>₹{e.ap}</p>
                                </div>
                                <h1 className='text-green-700'>{e.off} Off!</h1>
                            </div>
                            <button className='mt-3 text-center  w-full font-semibold text-red-500 hover:scale-[1.08] duration-200'>View</button>
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className='w-[95%] mx-auto mt-20'>
            <h1 className="text-xl md:text-4xl font-medium mt-4 mb-6 text-center">NEW AT NYKAA</h1>
               <Carousel responsive={responsive1}  arrows={true} className="z-0">
                {NewS.map((e)=>(
                    <div key={e.id} className='mr-5'>
                        <img className='w-[100%] rounded-md shadow-md' src={e.src} alt="" />
                    </div>
                ))}
                </Carousel>
            </div>
            <div className='w-[80%] mx-auto'>
                <img className='w-[100%] mt-16 mb-4 rounded-md' src="https://images-static.nykaa.com/uploads/b5a50309-ecb6-44ef-9028-be5d7d514d00.jpg?tr=w-1200,cm-pad_resize" alt="" />
            </div>
        </div>
    )
}
