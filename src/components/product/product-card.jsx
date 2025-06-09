import React from 'react'

const ProductCard = ({ProductData}) => {
    console.log('productdata:', ProductData);
    
  return (
    <div className='p-2 border rounded-sm m-2 border-gray-500  hover:shadow-lg hover:rounded-lg transition-all'>
        <img src={ProductData.image} alt='picture' width={80} height={80}/>
        <h2>
          {ProductData.title}
        </h2>
        <p>{ProductData.price}</p>
    </div>
  )
}

export default ProductCard;