import { useQuery } from 'react-query';

import BussinessSummary from '../BussinessSummary/BussinessSummary';
import Footer from '../Footer/Footer';
import Loading from '../Page/Loading';
import Products from '../Products/Products';
import TotalReview from '../Review/TotalReview';



import Carousel from './Carousel';

const Home = () => {
    const { isLoading, error, data:reviews } = useQuery('repoData', () =>
    fetch('https://protected-headland-11600.herokuapp.com/review',{
      method:'GET',
      headers:{
          'authorization':`bearer ${localStorage.getItem('accessToken')}`
      }
  }).then(res =>res.json()
    )
  )
  
  if(isLoading){
      return <Loading></Loading>
  }
    return (
        <div>
            
            <Carousel></Carousel>
            <BussinessSummary></BussinessSummary>
            <Products></Products>
            
            <nav>
            <h1 className='text-3xl text-center mt-5 mb-5'>CUSTOMARS REVIEW</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
            
          {
            reviews?.map(review=><TotalReview
            key={review._id}
            review={review}
            ></TotalReview>)
          }
        </div>
        </nav>
          <Footer></Footer>
        </div>
    );
};

export default Home;