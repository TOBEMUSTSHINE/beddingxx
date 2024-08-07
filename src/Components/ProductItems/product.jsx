import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./items.css";
// import { ShopContext } from "../../context/shop-context";
export const Product = (props) => {
  const { id, productName, price, productImage, description } = props.data;
  
  // const { addToCart } = useContext(ShopContext);
  return (
    <>
      <div className="">
        <div className="Items">
          <img src={productImage} alt="" />
          <div className="item-description">
            <p className="prod">{productName}</p>
            <b>
              <p>${price}</p>
            </b>
            <p>{description}</p>
            <div className="rating">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="7"
                viewBox="0 0 7 7"
                fill="none"
              >
                <path
                  d="M3.5 0L4.2858 2.41844H6.8287L4.77145 3.91312L5.55725 6.33156L3.5 4.83688L1.44275 6.33156L2.22855 3.91312L0.171302 2.41844H2.7142L3.5 0Z"
                  fill="#3CAE14"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="7"
                viewBox="0 0 7 7"
                fill="none"
              >
                <path
                  d="M3.5 0L4.2858 2.41844H6.8287L4.77145 3.91312L5.55725 6.33156L3.5 4.83688L1.44275 6.33156L2.22855 3.91312L0.171302 2.41844H2.7142L3.5 0Z"
                  fill="#3CAE14"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="7"
                viewBox="0 0 7 7"
                fill="none"
              >
                <path
                  d="M3.5 0L4.2858 2.41844H6.8287L4.77145 3.91312L5.55725 6.33156L3.5 4.83688L1.44275 6.33156L2.22855 3.91312L0.171302 2.41844H2.7142L3.5 0Z"
                  fill="#3CAE14"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="7"
                viewBox="0 0 7 7"
                fill="none"
              >
                <path
                  d="M3.5 0L4.2858 2.41844H6.8287L4.77145 3.91312L5.55725 6.33156L3.5 4.83688L1.44275 6.33156L2.22855 3.91312L0.171302 2.41844H2.7142L3.5 0Z"
                  fill="#3CAE14"
                />
              </svg>
            </div>
            <div className="item-btn">
              <Link
                to="/product=1"
                style={{ textDecoration: "none", color: "#1E1E1E" }}
              >
                {" "}
                <button className="">Buy Now</button>
              </Link>
              <button className="">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
