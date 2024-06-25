import React, { useEffect, useState } from "react";
import "./ProductDetails.css";

function ProductDetails() {
  const [data, setData] = useState([]);

  const productDetails = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const details = await res.json();
    console.log(details);
    setData(details);
  };
  useEffect(() => {
    productDetails();
  }, []);
  return (
    <>
      <h1>ProductDetails</h1>
      <div className="productDetails">
        <table className="table">
          <thead className="table-head">
            <tr>
              <th>ID</th>
              <th>Price</th>
              <th>Rate</th>
              <th>Count</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data.map((item, idx) => {
                let Category = item.category[0].toUpperCase() + item.category.slice(1);
                return (
                  <tr key={idx}>
                    <td>{item.id}</td>
                    <td>{item.price}</td>
                    <td>{item.rating.rate}</td>
                    <td>{item.rating.count}</td>
                    <td>{Category}</td>
                  </tr>
                  
                  
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProductDetails;
