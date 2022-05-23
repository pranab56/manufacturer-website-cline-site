import React, { useEffect, useState } from 'react';
import BussinessSummary from '../BussinessSummary/BussinessSummary';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Review from '../Review/Review';
import Reviews from '../Review/Reviews';

import Carousel from './Carousel';

const Home = () => {
    const [reviews,setreview]=useState([]);
    useEffect(()=>{
        fetch('Review.json')
        .then(res=>res.json())
        .then(data=>setreview(data))
    },[])

    return (
        <div>
            
            <Carousel></Carousel>
            <BussinessSummary></BussinessSummary>
            <Products></Products>
            
            <nav>
            <h1 className='text-3xl text-center mt-5 mb-5'>CUSTOMARS REVIEW</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
            
            {
                reviews.slice(1,4).map(review=><Reviews
                key={review.id}
                review={review}
                ></Reviews>)
            }
        </div>
        </nav>
          <Footer></Footer>
        </div>
    );
};

export default Home;