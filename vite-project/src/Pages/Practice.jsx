import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom';
import { getProducts } from '../redux/products/actions'

const Practice = () => {
    const [SearchParams,setSearchParams]=useSearchParams();
    const [searchparam]=useSearchParams()
    const initialCategory=SearchParams.getAll("category");
    // console.log("initialCategory",initialCategory);
    const initialSort=SearchParams.getAll("sort");
    console.log(initialSort);

    const location=useLocation();

    console.log(location);


    const [category,setCategory]=useState(initialCategory || []) ;

    const [sort,setSortBy]=useState(initialSort[0] || '') ;
   

    const products=useSelector(store=>store.products);
    const loading=useSelector(store=>store.isLoading);
    const dispatch=useDispatch()


    const handleSort=(e)=>{
        setSortBy(e.target.value)
    }
    const handleCatChange=(e)=>{
        //check if the data is present in the category
        const newCategory=[...category];
        //if yes then remove it (the user has uncheck the checkbox)
        if(newCategory.includes(e.target.value)){
            //remove it
            newCategory.splice(newCategory.indexOf(e.target.value),1)
        }else{
            newCategory.push(e.target.value)
        }
        setCategory(newCategory)
    }
    console.log(category);
    

    

    useEffect(()=>{
        //if the category changes then update the value in the url search params.
        let param={}
        param.category=category;

        sort && (param.sort=sort);

        setSearchParams(param)
        ///
        if(location||products.length===0){
            const SortBy=searchparam.get("sort")
            const getProductParam={
                params:{
                    category:searchparam.getAll("category"),
                    _sort:SortBy && 'price',
                    _order:SortBy
                }
            }
            dispatch(getProducts(getProductParam))
        }
    },[products.length,dispatch,category,SearchParams,location.search,sort])
    console.log(products);

    if(loading){
        return(
            <div className='mt-[200px] text-center'>
                <h1>Loading....</h1>
            </div>
        )
    }
  return (
    <div className='mt-32'>
        <div className='flex'>
            <div className='ml-40 border-2 w-60'>
                <h1>filter section</h1>
                <hr />
                <h1>price</h1>
                <div  className='flex flex-col justify-center items-center'>
                <div onChange={handleSort}>
                    <input type="radio" value='asc' name='sortBy' defaultChecked={sort==="asc"}/> <label>price low-high</label>
                </div>
                <div onChange={handleSort}>
                    <input type="radio" value='desc' name='sortBy' defaultChecked={sort==="desc"}/> <label>price high-low</label>
                </div>
                </div>
                <hr />


                <h1>cat</h1>
                <div className='flex flex-col justify-center items-center'>
                <div>
                  <input type='checkbox' value='lipstick' checked={category.includes('lipstick')} onChange={handleCatChange} /> <label >Lipstick</label>
                </div>
                 <div>
                    <input type="checkbox" value='eyeliner' checked={category.includes('eyeliner')} onChange={handleCatChange} /> <label >Eyeliner</label>
                 </div>
                <div>
                   <input type="checkbox" value='eyekajal' checked={category.includes('eyekajal')} onChange={handleCatChange} /><label>Eyekajal</label>
                </div>
                <div>
                    <input type="checkbox" value='nailpant' checked={category.includes('nailpant')} onChange={handleCatChange} /><label>Nailpant</label>
                </div>
                </div>
                <hr />
                <h1>dis</h1>
                <h1>more than 10% dis</h1>
            </div>
        <div className='w-[60%] mx-auto grid grid-cols-4 gap-4 border border-red-500'>
            {products.map((el)=>(
                <div key={el.id} className=' bg-cyan-200'>
                    <h1>{el.id}</h1>
                    <img className='w-[100px]' src={el.image} alt="" />
                    <h1>{el.title}</h1>
                    <div>
                        <h1>price:{el.price} --- {el.discount}</h1>
                    </div>
                    <h1>{el.category}</h1>
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Practice
