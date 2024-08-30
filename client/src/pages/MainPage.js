import React, {useState} from 'react';

export default function MainPage () {
const [Nowdate , setNowDate]= useState(new Date());
const [SourceCurrency , setSourceCurrency]= useState('GBP');
const [AmountInCurrency , setAmountInCurrency]= useState("USD");
const [TargetCurrency , setTargetCurrency]= useState(0);

const handleSubmit=(e)=>{};



  return (
    <div>
        <h1 className='text-4xl font-bold text-yellow-500 border '>Let's explore currency converson simply</h1>
        <p className='lg:mx-32 opacity-40 py-5 font-bold text-white'>"Welcome to 'Convert your money' today! Easily convert 
        money with the latest rates. Plan trips, manage finances, 
        or explore currency values   effortlessly with our tool."
         </p>
   
       
        <div className='mt-5 flex items-center justify-center flex-col'>   
            <section className='w-full lg:w-1/2'>
                <form onSubmit={handleSubmit}>
                <div className='mb-4'>

<label  
    htmlFor={Nowdate}
    className='block mb-2 text-sm font-mediumtext-yellow-900 dark:text-white'>

        Now Date
</label>


<input 
    type="Date" 
    onChange={(e)=>setNowDate(e.target.value)}
    id={Nowdate}
    name={Nowdate}
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
                                    htmlFor={SourceCurrency}

                                    className='block mb-2 text-sm font-medium text-yellow-900 dark:text-white'
                                >
                                    Source Currency
                                </label>
                                <select onChange={(e)=>setSourceCurrency(e.target.value)}
                                 className="bg-yellow-50 border border-yellow-300 text-yellow-900
                                        text-sm rounded-lg focus:ring-yellow-500 
                                        focus:border-yellow-500 block w-full p-2.5 dark:bg-yellow-700 
                                        dark:border-yellow-600 dark:placeholder-yellow-400 dark:text-white 
                                        dark:focus:ring-yellow-500 dark:focus:border-yellow-500" 
                                        placeholder="SourceCurrency"  
                                        required
                                        
                                        name={SourceCurrency}
                                        id={SourceCurrency}
                                        value={SourceCurrency}>
                                            <option value=''>Sellect Source currency</option>


                                </select>
                            </div>


 <div className='mb-4'>
                                <label  
                                    htmlFor={TargetCurrency}
                                    className='block mb-2 text-sm font-medium text-white-900 dark:text-White'
                                >
                                    Target Currency
                                </label>
                                <select onChange={(e)=>setTargetCurrency(e.target.value)}
                                className="bg-yellow-50 border border-yellow-300 text-yellow-900
                                        text-sm rounded-lg focus:ring-yellow-500 
                                        focus:border-yellow-500 block w-full p-2.5 dark:bg-yellow-700 
                                        dark:border-yellow-600 dark:placeholder-yellow-400 dark:text-white 
                                        dark:focus:ring-yellow-500 dark:focus:border-yellow-500" 
                                        placeholder=" Target Currency"  
                                        required
                                        
                                        name={TargetCurrency}
                                        id={TargetCurrency}
                                        value={TargetCurrency}
                                         >
                                            <option value=''>Sellect  Target Currency</option>


                                </select>
                            </div>

                            <div className='mb-4'>

<label  
    htmlFor={AmountInCurrency}
    className='block mb-2 text-sm font-mediumtext-white-900 dark:text-white'>

        Amount In Currency
</label>


<input 
onChange={(e)=>setAmountInCurrency(e.target.value)}
    type="text" 
    id={AmountInCurrency}
    className="bg-yellow-50 border border-yellow-300 text-yellow-900
    text-sm rounded-lg focus:ring-yellow-500 
    focus:border-yellow-500 block w-full p-2.5 dark:bg-yellow-700 
    dark:border-yellow-600 dark:placeholder-white-400 dark:text-black 
    dark:focus:ring-yellow-500 dark:focus:border-yellow-500" 
    placeholder="Enter Your Currency Amount"  
    required
    name={AmountInCurrency}
    
    />

</div>

<button className='bg-green-600 hover:bg-green-700 
text-white font-medium py-2 px-4 rounded-md'>
    Give the currency</button>

                    
                </form>
            </section>



        </div>
    </div>
);
}
