import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import ProductItem from './ProductItem';


const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [BestSeller,setBeseSeller] = useState([]);

    useEffect (()=>{
        const bestProduct = products.filter((item)=>(item.BestSeller));
        setBeseSeller(bestProduct.slice(0,5))
    },[])
  return (
    <div className='my-10'>
        <div className='text-center text-3*1 py-8'>
            <Title text1={'Best'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the.
</p>
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
{
    BestSeller.map((item,index)=>(
        <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>

    ))
}


</div>




        </div>
    </div>
  )
}

export default BestSeller