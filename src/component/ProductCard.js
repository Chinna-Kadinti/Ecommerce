import React from 'react'
import './body.css'
import { Link } from 'react-router-dom'
function ProductCard({data}) {
  return (
    // <div className='productCard'>
    //     <img src={data.thumbnail} alt ='' width="200px" height="100px"/>
    //         <h4>{data.title}</h4>
    //         <p>Rating {data.rating}</p>
    //         <p>{data.description}</p>
    // </div>
    <div className='container'>
      <Link to= {`/products/${data.id}`}>
          <div className='product-image'>
            <img src={data.image} alt ='' />
          </div>
          <div className='product-body'>
            <h4>{data.title}</h4>
            <p>{data.category}</p>
            <p> ${data.price} {data.rating.rate} ⭐ | {data.rating.count}</p>
           
          </div>
      </Link>
      <button>Add to Bag</button>
      
              
    </div>
  )
}

export default ProductCard