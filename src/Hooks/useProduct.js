import { useEffect, useState } from "react";

const useProduct=()=>{
    const [products,setproduct]=useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/product')
    .then(res=>res.json())
    .then(data=>setproduct(data))
},[])
return [products]
}
export default useProduct;


