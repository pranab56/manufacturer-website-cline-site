import React from "react";

const Product = ({ product }) => {
  const { name, img, description, price, orderquantity, availablequantity } =
    product;
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl mb-10">
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
            <button class="btn btn-primary w-full">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
