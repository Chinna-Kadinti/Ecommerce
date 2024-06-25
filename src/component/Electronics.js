import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import './body.css'
function Electronics() {
    const [electronicProduct, setElectronicProduct] = useState([]);
    const electronicsProducts = async () =>{
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
       const electronicFilter = Object.values(data).filter((prod) =>  prod.category === "electronics");
       setElectronicProduct(electronicFilter)
    }
    
    useEffect(() => {
        electronicsProducts();
    },[])
  return (
    <div className='productContainer-list'>
        {
            electronicProduct.map((prod) => {
                return <ProductCard  key = {prod.id} data={prod}/>
            })
        }
    </div>
  )
}

export default Electronics;