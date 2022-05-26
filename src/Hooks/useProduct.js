import { useEffect, useState } from "react";

const useProduct=()=>{
    const [products,setproduct]=useState([]);
useEffect(()=>{
    fetch('https://protected-headland-11600.herokuapp.com/product')
    .then(res=>res.json())
    .then(data=>setproduct(data))
},[])
return [products]
}
export default useProduct;


