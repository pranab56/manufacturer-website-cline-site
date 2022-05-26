import React from 'react';
import image1 from '../../carousel/slider-1.jpg';
import 'animate.css';
import { Link } from 'react-router-dom';


const Carousel = () => {
    return (
    <div class=" flex justify-center items-center md:justify-start">
        <img class="hidden lg:block h-screen mb-20 w-full" src={image1} alt="randeer"/>
       
    <div class="flex lg:absolute justify-start flex-col md:flex-row items-center md:space-y-12 md:space-y-0">
        <div class=" py-0 sm:py-0  md:hidden"></div>
        <div class=" lg:w-auto custom sm:mt-96 md:mt-0 h-full flex px-4 md:px-0  z-10 justify-center items-center md:items-start flex-col md:pl-20 lg:px-20 2xl:px-44">
            <p class="animate__animated animate__bounceInRight text-xl sm:text-2xl xl:text-5xl text-center md:text-left font-serif leading-6 xl:leading-10 text-black  md:w-96 2xl:w-2/3" >The World Of Metal </p>
            <p class="mt-4 md:w-80 lg:w-2/3 xl:w-2/4 text-center md:text-left  text-base leading-normal text-black" >Buying Scrap metal in every part of the world made easy by Salvex. You can buy any kind of scrap and metal even you can sell your stuff as well.</p>
            <button class="mt-6 shrink-0 w-full md:w-auto  lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700 bg-green-400  items-center text-base border-2 border-white transition hover:-translate-y-1 hover:bg-lime-400 hover:text-gray-800 font-medium text-white">
               <Link to={'/shop'}>Explore Now</Link>
            </button>   
        </div>        
    </div>
</div>

       
    );
};

export default Carousel;