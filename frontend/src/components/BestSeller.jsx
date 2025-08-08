import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
   {
      const bestProduct = products.filter((item) => (item.bestSeller));
      setBestSeller(bestProduct.slice(0, 5));
    }
  }, []);

  return (
    <div className="my-10">
      <div className="py-8 text-3xl text-center">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
          {
            bestSeller.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))

            
           }
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
