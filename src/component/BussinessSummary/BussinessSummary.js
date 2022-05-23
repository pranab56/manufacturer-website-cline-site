import React from 'react';
import CountUp from 'react-countup';
import { FlagIcon,  LibraryIcon,  PresentationChartLineIcon,  ThumbUpIcon } from '@heroicons/react/solid'

const BussinessSummary = () => {
    return (
        <nav>
            <p className='text-center text-3xl font-bold mb-12'>BUSINESS SUMMARY</p>
            <div className='flex justify-around mb-20'>
            
            <div>
            <FlagIcon className='text-green-400' width={100}></FlagIcon>
             <p className='font-bold text-2xl ml-3'><CountUp duration={10} end={100} />+</p>
             <p className='font-bold text-green-400 ml-2'>Country</p>
            </div>
             <div>
               <PresentationChartLineIcon className='text-green-400' width={100}></PresentationChartLineIcon>
               <p className='font-bold text-2xl ml-5'><CountUp duration={10} end={350} />+</p>
                <p className='font-bold text-green-400 ml-4'>products</p>
             </div>
             <div>
                 <LibraryIcon className='text-green-400' width={100}></LibraryIcon>
                 <p className='font-bold text-2xl ml-3'><CountUp duration={10} end={140} />M+</p>
                <p className='font-bold text-green-400'>Yearly Income</p>
             </div>
 
            <div>
                <ThumbUpIcon className='text-green-400' width={100}></ThumbUpIcon>
                <p className='font-bold text-2xl ml-4'><CountUp duration={20} end={650} />+</p>
                <p className='font-bold text-green-400 ml-3'>FeedBacks</p>
            </div>
            
             
         </div>
        </nav>
    );
};

export default BussinessSummary;