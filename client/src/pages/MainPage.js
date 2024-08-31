import React, {useEffect,useState} from 'react';
import axios from "axios";

export default function MainPage () {
  const [Nowdate, setNowDate] = useState(new Date());
  const [SourceCurrency, setSourceCurrency] = useState("Select Source Currency");
  const [TargetCurrency, setTargetCurrency] = useState("Select Target Currency");
  const [AmountInCurrency, setAmountInCurrency] = useState("0");
  const [AmountInTargetCurrency, setAmountInTargetCurrency] = useState("0");
  const [currncyNames ,setCurrencyNames]=useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      Nowdate,
      SourceCurrency,
      TargetCurrency,
      AmountInCurrency
    );
  };

  useEffect(()=>{
    const getCurrencyNames= async() => {
    try{
      const responce=await axios.get("http://localhost:500/getAllCurrencies");
    

      setCurrencyNames(responce.data);
    }catch(err){
        console.error(err);
      }

    };
    getCurrencyNames();
  } ,[] )


  return (
    <div>
      <h1 className='text-4xl font-bold text-yellow-500 border'>
        Let's explore currency conversion simply
      </h1>
      <p className='lg:mx-32 opacity-40 py-5 font-bold text-white'>
        "Welcome to 'Convert your money' today! Easily convert 
        money with the latest rates. Plan trips, manage finances, 
        or explore currency values effortlessly with our tool."
      </p>

      <div className='mt-5 flex items-center justify-center flex-col'>
        <section className='w-full lg:w-1/2'>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label
                htmlFor="now-date"
                className='block mb-2 text-sm font-medium text-yellow-900 dark:text-white'>
                Now Date
              </label>
              <input 
                type="date" 
                onChange={(e) => setNowDate(e.target.value)}
                id="now-date"
                name="now-date"
                className="bg-yellow-50 border border-yellow-300 text-yellow-900
                  text-sm rounded-lg focus:ring-yellow-500 
                  focus:border-yellow-500 block w-full p-2.5 dark:bg-yellow-700 
                  dark:border-yellow-600 dark:placeholder-yellow-400 dark:text-white 
                  dark:focus:ring-yellow-500 dark:focus:border-yellow-500" 
                required
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor="source-currency"
                className='block mb-2 text-sm font-medium text-yellow-900 dark:text-white'>
                Source Currency
              </label>
              <select 
                onChange={(e) => setSourceCurrency(e.target.value)}
                id="source-currency"
                name="source-currency"
                className="bg-yellow-50 border border-yellow-300 text-yellow-900
                  text-sm rounded-lg focus:ring-yellow-500 
                  focus:border-yellow-500 block w-full p-2.5 dark:bg-yellow-700 
                  dark:border-yellow-600 dark:placeholder-yellow-400 dark:text-white 
                  dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                value={SourceCurrency}
                required
              >
                <option value='Select Source Currency'>Select Source Currency</option>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
                {/* Add more currency options as needed */}
              </select>
            </div>

            <div className='mb-4'>
              <label
                htmlFor="target-currency"
                className='block mb-2 text-sm font-medium text-yellow-900 dark:text-white'>
                Target Currency
              </label>
              <select 
                onChange={(e) => setTargetCurrency(e.target.value)}
                id="target-currency"
                name="target-currency"
                className="bg-yellow-50 border border-yellow-300 text-yellow-900
                  text-sm rounded-lg focus:ring-yellow-500 
                  focus:border-yellow-500 block w-full p-2.5 dark:bg-yellow-700 
                  dark:border-yellow-600 dark:placeholder-yellow-400 dark:text-white 
                  dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                value={TargetCurrency}
                required
              >
                <option value='Select Target Currency'>Select Target Currency</option>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
                {/* Add more currency options as needed */}
              </select>
            </div>

            <div className='mb-4'>
              <label
                htmlFor="amount-in-currency"
                className='block mb-2 text-sm font-medium text-yellow-900 dark:text-white'>
                Amount In Currency
              </label>
              <input 
                type="text"
                onChange={(e) => setAmountInCurrency(e.target.value)}
                id="amount-in-currency"
                name="amount-in-currency"
                className="bg-yellow-50 border border-yellow-300 text-yellow-900
                  text-sm rounded-lg focus:ring-yellow-500 
                  focus:border-yellow-500 block w-full p-2.5 dark:bg-yellow-700 
                  dark:border-yellow-600 dark:placeholder-yellow-400 dark:text-white 
                  dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                placeholder="Enter Your Currency Amount"  
                required
              />
            </div>

            <button className='bg-green-600 hover:bg-green-700 
              text-white font-medium py-2 px-4 rounded-md'>
              Get the currency
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
