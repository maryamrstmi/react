import React, { useEffect, useState } from 'react'
import ProductCard from './product-card';

const ProductsList = () => {

    const [list , setList] = useState ([]);


    async function fetchData () {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setList(data);
        
    }
    // fetchData();
    useEffect (()=> {
      fetchData();
    }, [])


    const ProductCardList = list.map ((product , index)=>{
        return <ProductCard ProductData={product} key={index}/> 
        
    } );
         
    
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2'>
        {ProductCardList}
    </div>
  )
}

export default ProductsList;

// fake list 