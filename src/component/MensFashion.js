import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import './body.css'
function MensFashion() {
    const [menProduct, setMenProduct] = useState([]);
    const menProducts = async () =>{
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
       const menFilter = Object.values(data).filter((prod) =>  prod.category === "men's clothing");
       setMenProduct(menFilter)
    }
    
    useEffect(() => {
        menProducts();
    },[])
  return (
    <div className='productContainer-list'>
        {
            menProduct.map((prod) => {
                return <ProductCard  key = {prod.id} data={prod}/>
            })
        }
    </div>
  )
}

export default MensFashion;