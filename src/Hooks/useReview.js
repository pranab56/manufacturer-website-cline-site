import { useEffect, useState } from "react";

const useReview=()=>{
    const [reviews,setreview]=useState([]);
    useEffect(()=>{
        fetch('Review.json')
        .then(res=>res.json())
        .then(data=>setreview(data))
    },[])
    return [reviews]
}
export default useReview;