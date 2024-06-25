import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import './body.css'
function WomenFashion() {
    const [womenProduct, setWomenProduct] = useState([]);
    const womenProducts = async () =>{
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
       const womenFilter = Object.values(data).filter((prod) =>  prod.category === "women's clothing");
       setWomenProduct(womenFilter)
    }
    
    useEffect(() => {
        womenProducts();
    },[])
  return (
    <div className='productContainer-list'>
        {
            womenProduct.map((prod) => {
                return <ProductCard  key = {prod.id} data={prod}/>
            })
        }
    </div>
  )
}

export default WomenFashion;