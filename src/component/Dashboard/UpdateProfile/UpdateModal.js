import React from 'react';

const UpdateModal = () => {
    return (
        <div>
            
    <section class="w-2/5 mt-5 p-6 mx-auto bg-slate-200 rounded-md shadow-2xl dark:bg-gray-800">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Update Your Profile</h2>
        
        <form>
            <div class=" gap-6 mt-4 sm:grid-cols-2">
                <div className='mb-4'>
                    
                    <input placeholder='Name' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                </div>
                <div className='mb-4'>
                    
                    <input placeholder='Your Institute Name' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                </div>
                <div className='mb-4'>
                    
                    <input placeholder='Department' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                </div>
                <div className='mb-4'>
                    
                    <input placeholder='Address' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                </div>
                <div className='mb-4'>
                    
                    <input placeholder='Number' type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                </div>
                <div className='mb-4'>
                    
                    <input placeholder='Linkedin link' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                </div>
                <div className='mb-4'>
                    
                    <input placeholder='Linkedin link' type="file" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                </div>

               

                
            </div>

            <div class=" mt-6">
                <button class="w-full px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-primary rounded-md focus:outline-none focus:bg-gray-600">Update</button>
            </div>
        </form>
    </section>
        </div>
    );
};

export default UpdateModal;