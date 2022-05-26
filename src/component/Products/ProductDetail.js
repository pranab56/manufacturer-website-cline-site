import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderModal from "./OrderModal";

const ProductDetail = (product) => {
  const { id } = useParams();
  const [Products, setproducts] = useState([]);
  const [order,setOrder]=useState([])
  useEffect(() => {
    fetch(`https://protected-headland-11600.herokuapp.com/productDetails/${id}`)
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, [id]);

  return (
    <div>
        {
    order && <OrderModal
    product={Products}
    order={order}
    setOrder={setOrder}
    ></OrderModal>
  } 
      <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div class="flex justify-center items-center lg:ml-20 sm:ml-0 lg:flex-row flex-col gap-8">
          <div class="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
            <p class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600  dark:text-white">
              Home / Furniture / Wooden Stool
            </p>
            <h2 class="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white mt-4">
              {Products.name}
            </h2>

            <div class="flex flex-row justify-between mt-5">
              <img
                class="dark:hidden"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg1.svg"
                alt="stars"
              />
              <img
                class="hidden dark:block"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg1dark.svg"
                alt="stars"
              />
              <p class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 dark:text-white duration-100 cursor-pointer">
                22 reviews
              </p>
            </div>

            <p class="font-normal text-base leading-6 text-gray-600  mt-7">
              {Products.description}
            </p>
            <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 dark:text-white">
              $ {Products.price}
            </p>
            <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 dark:text-white">
              Available Quantity : {Products.availablequantity}
            </p>
            <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 dark:text-white">
              Order Quantity : {Products.orderquantity}
            </p>

            <div class="lg:mt-11 mt-10">
              
              <hr class="bg-gray-200 w-full my-2" />
            </div>

            <label htmlFor="Order-modal" onclick={()=>setOrder(product)} class="btn btn  focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full mt-5 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
              Add to shopping bag
            </label>
           
          </div>

          <div class="w-full sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col sm:gap-6">
            <div class="w-auto bg-gray-100">
              <img src={Products.img} alt="Wooden Chair Previw" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
