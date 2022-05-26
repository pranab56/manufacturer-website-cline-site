import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Page/Loading';
import TotalReview from './TotalReview';


const Review = () => {
    const { isLoading, error, data:reviews } = useQuery('repoData', () =>
    fetch('',{
            method:'GET',
            headers:{
                'authorization':`bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>res.json())
  )
  console.log(reviews);
  
  if(isLoading){
      return <Loading></Loading>
  }
    return (
        <nav>
            <h1 className='text-3xl text-center mb-5'>CUSTOMARS REVIEW</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
          {
            reviews.map(review=><TotalReview
            key={review._id}
            review={review}
            ></TotalReview>)
          }
         
        </div>
        </nav>
    );
};

export default Review;