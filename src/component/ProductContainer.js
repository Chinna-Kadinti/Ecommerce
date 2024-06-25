import "./body.css";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProductContainer() {
  const [searchText, setSearchText] = useState("");
  const [filteredProductList, setFilteredProductList] = useState([]);
  const [productsList, setProductsList] = useState([]);

  async function productData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProductsList(data);
    setFilteredProductList(data);
  }
  useEffect(() => {
    productData();
  }, []);
  return (
    <div className="productContainer">
      <div className="productContainer-left">
        <div>
          <h1>Fashion Week</h1>
          <p>Get best deals in Fashion</p>
          <span>
            <p>Filter</p>
            <span>
              <button
                onClick={() => {
                  const search = productsList.filter((res) =>
                    res.title.includes(searchText)
                  );
                  search.length !== 0
                    ? setFilteredProductList(search)
                    : setFilteredProductList(productsList);
                }}
                style={{ backgroundColor: "transparent" }}
              >
                Reset
              </button>
            </span>
          </span>
        </div>
        <hr />
        <div className="productContainer-search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="search-input"
            placeholder="Search Product"
          />

          <button
            onClick={
              searchText.length > 0
                ? () => {
                    const search = productsList.filter((res) =>
                      res.title.includes(searchText)
                    );
                    search.length !== 0
                      ? setFilteredProductList(search)
                      : setFilteredProductList(productsList);
                  }
                : null
            }
            className="search-button"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <button
            onClick={() => {
              const filterProducts = productsList.filter(
                (e) => e.rating.rate > 4.6
              );
              setFilteredProductList(filterProducts);
            }}
            className="search-button"
          >
            Above 4 Star
          </button>
        </div>
      </div>

      <div className="productContainer-list">
        {filteredProductList
          ? filteredProductList.map((prod) => {
              return <ProductCard key={prod.id} data={prod} />;
            })
          : "Loading.."}
      </div>
    </div>
  );
}

export default ProductContainer;
