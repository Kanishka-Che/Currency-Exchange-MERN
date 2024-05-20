import React from 'react'

export default function MainPage () {
  return (
    <div>
        <h1 className='text-4xl font-bold text-yellow-500 border '>Let's explore currency converson simply</h1>
        <p className='lg:mx-32 opacity-40 py-5 font-bold text-white'>"Welcome to 'Convert your money' today! Easily convert 
        money with the latest rates. Plan trips, manage finances, 
        or explore currency values   effortlessly with our tool."
         </p>
   
       
        <div className='mt-5 flex items-center justify-center flex-col'>   
            <section className='w-full lg:w-1/2'>
                <form>
                <div className='mb-4'>

<label  
    htmlFor=''
    className='block mb-2 text-sm font-mediumtext-yellow-900 dark:text-white'>

        Now Date
</label>


<input 
    type="Date" 
    id=""
    className="bg-yellow-50 border border-yellow-300 text-yellow-900
    text-sm rounded-lg focus:ring-yellow-500 
    focus:border-yellow-500 block w-full p-2.5 dark:bg-yellow-700 
    dark:border-yellow-600 dark:placeholder-yellow-400 dark:text-white 
    dark:focus:ring-yellow-500 dark:focus:border-yellow-500" 
    placeholder="name@flowbite.com"  
    required
/>

</div>
<div className='mb-4'>
                                <label  
                                    htmlFor=''
                                    className='block mb-2 text-sm font-medium text-yellow-900 dark:text-white'
                                >
                                    Source Currency
                                </label>
                                <select className="bg-yellow-50 border border-yellow-300 text-yellow-900
                                        text-sm rounded-lg focus:ring-yellow-500 
                                        focus:border-yellow-500 block w-full p-2.5 dark:bg-yellow-700 
                                        dark:border-yellow-600 dark:placeholder-yellow-400 dark:text-white 
                                        dark:focus:ring-yellow-500 dark:focus:border-yellow-500" 
                                        placeholder="SourceCurrency"  
                                        required
                                        
                                        name=''
                                        id=''>
                                            <option value=''>Sellect Source currency</option>


                                </select>
                            </div>


 <div className='mb-4'>
                                <label  
                                    htmlFor=''
                                    className='block mb-2 text-sm font-medium text-white-900 dark:text-White'
                                >
                                    Target Currency
                                </label>
                                <select className="bg-yellow-50 border border-yellow-300 text-yellow-900
                                        text-sm rounded-lg focus:ring-yellow-500 
                                        focus:border-yellow-500 block w-full p-2.5 dark:bg-yellow-700 
                                        dark:border-yellow-600 dark:placeholder-yellow-400 dark:text-white 
                                        dark:focus:ring-yellow-500 dark:focus:border-yellow-500" 
                                        placeholder=" Target Currency"  
                                        required
                                        
                                        name=''
                                        id=''>
                                            <option value=''>Sellect  Target Currency</option>


                                </select>
                            </div>

                            <div className='mb-4'>

<label  
    htmlFor=''
    className='block mb-2 text-sm font-mediumtext-yellow-900 dark:text-white'>

        Amount Currency
</label>


<input 
    type="text" 
    id=""
    className="bg-yellow-50 border border-yellow-300 text-yellow-900
    text-sm rounded-lg focus:ring-yellow-500 
    focus:border-yellow-500 block w-full p-2.5 dark:bg-yellow-700 
    dark:border-yellow-600 dark:placeholder-yellow-400 dark:text-white 
    dark:focus:ring-yellow-500 dark:focus:border-yellow-500" 
    placeholder="Enter Your Currency Amount"  
    required
/>

</div>

                    
                </form>
            </section>



        </div>
    </div>
);
}
