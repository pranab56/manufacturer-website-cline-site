import React from "react";
import { useNavigate } from "react-router-dom";



const Product = ({ product}) => {

  const {_id, name, img, description, price, orderquantity, availablequantity } = product;
  const navigate = useNavigate();
  const handleOnBuy = product =>{
    
    navigate(`/productdetails/${product._id}`)
      
  }
  


  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-2xl mb-10">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>
            <span className="font-bold">description :</span> {description}
          </p>
          <p>
            <span className="font-bold">Price :</span> ${price}
          </p>
          <p>
            <span className="font-bold">OrderQuantity : </span> {orderquantity}
          </p>
          <p>
            <span className="font-bold">AvailableQuantity :</span>{" "}
            {availablequantity}
          </p>

          <div class="card-actions justify-center mt-3 ">
            <button onClick={()=>handleOnBuy(product)} class="btn btn-primary w-full">Book Now</button>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default Product;
