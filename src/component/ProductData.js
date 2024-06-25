import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './productData.css'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function ProductData() {
    const [product, setProduct] = useState('');
    const { id } = useParams();

     const productDetails = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const details = await res.json();
        setProduct(details);    
    } 
    useEffect(() => {
        productDetails();
    })
  return (

    <div className='productData'>
      <Link to='/'>
        <FontAwesomeIcon style={{marginLeft: '30px', fontSize: "30px"}} icon={faArrowLeft} />
      </Link>
        <div className='productData'>   
        <div>
          <img
            style={{ height: 300 }}
            src={product.image}
            alt={product.title}
          />
        </div>
          <div className=''>
            <h3>{product.title}</h3>
            <h3>Price: ${product.price}</h3>
            <h4>{product.category}</h4>
            <p> {product.description}</p>
          </div>
        </div>
    </div>
  )
}

export default ProductData