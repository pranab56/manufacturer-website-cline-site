import React, { useEffect, useState } from 'react';
import useReview from '../../Hooks/useReview';
import Reviews from './Reviews';

const Review = () => {
   const [reviews]=useReview()
    return (
        <nav>
            <h1 className='text-3xl text-center mb-5'>CUSTOMARS REVIEW</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
            
            {
                reviews.map(review=><Reviews
                key={review.id}
                review={review}
                ></Reviews>)
            }
        </div>
        </nav>
    );
};

export default Review;