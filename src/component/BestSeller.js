import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import './body.css'
function BestSeller() {
    const [bestProduct, setBestProduct] = useState([]);
    const bestProducts = async () =>{
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
       const bestFilter = data.filter((prod) =>  prod.rating.rate > 3.5);
       setBestProduct(bestFilter)
    }
    
    useEffect(() => {
        bestProducts();
    },[])
  return (
    <div className='productContainer-list'>
        {
            bestProduct.map((prod) => {
                return <ProductCard  key = {prod.id} data={prod}/>
            })
        }
    </div>
  )
}

export default BestSeller;