import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MainPage() {
  const [date, setDate] = useState(() => {
    const today = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
    return today;
  });  const [sourceCurrency, setSourceCurrency] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [amountInSourceCurrency, setAmountInSourceCurrency] = useState(0);
  const [amountInTargetCurrency, setAmountInTargetCurrency] = useState(0);
  const [sourceCurrencyName, setSourceCurrencyName] = useState('');
  const [targetCurrencyName, setTargetCurrencyName] = useState('');
  const [pressed, setPressed] = useState(false);
  const [currencyRates, setCurrencyRates] = useState({});

  // Static list of currency names
  const currencyNames = {
    AED: 'United Arab Emirates Dirham',
    AFN: 'Afghan Afghani',
    ALL: 'Albanian Lek',
    AMD: 'Armenian Dram',
    ANG: 'Netherlands Antillean Guilder',
    AOA: 'Angolan Kwanza',
    ARS: 'Argentine Peso',
    AUD: 'Australian Dollar',
    AWG: 'Aruban Florin',
    AZN: 'Azerbaijani Manat',
    BBD: 'Barbadian Dollar',
    BDT: 'Bangladeshi Taka',
    BGN: 'Bulgarian Lev',
    BHD: 'Bahraini Dinar',
    BIF: 'Burundian Franc',
    BMD: 'Bermudian Dollar',
    BND: 'Brunei Dollar',
    BRL: 'Brazilian Real',
    BSD: 'Bahamian Dollar',
    BTC: 'Bitcoin',
    BTN: 'Bhutanese Ngultrum',
    BWP: 'Botswana Pula',
    BYN: 'Belarusian Ruble',
    CAD: 'Canadian Dollar',
    CHF: 'Swiss Franc',
    CLP: 'Chilean Peso',
    CNY: 'Chinese Yuan',
    COP: 'Colombian Peso',
    CRC: 'Costa Rican Colón',
    CUP: 'Cuban Peso',
    CZK: 'Czech Koruna',
    DKK: 'Danish Krone',
    DOP: 'Dominican Peso',
    DZD: 'Algerian Dinar',
    EGP: 'Egyptian Pound',
    EUR: 'Euro',
    GBP: 'British Pound Sterling',
    GHS: 'Ghanaian Cedi',
    HKD: 'Hong Kong Dollar',
    INR: 'Indian Rupee',
    JPY: 'Japanese Yen',
    USD: 'US Dollar',
    ZAR: 'South African Rand',
    // Add more currencies as needed
  };

  // Fetching currency rates on component mount
  useEffect(() => {
    const getTheCurrencies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getAllCurrency', {
          params: { date }, // Pass the date as a query parameter
        });
        setCurrencyRates(response.data.rates);
      } catch (err) {
        console.error(err);
      }
    };
    getTheCurrencies();
  }, [date]);

  // Handle conversion when form is submitted
  const getTheTargetAmount = async (event) => {
    event.preventDefault();
    setPressed(true);
    try {
      const response = await axios.get('http://localhost:5000/getAllCurrency', {
        params: { date },
      });

      const rates = response.data.rates;
      const sourceRate = rates[sourceCurrency];
      const targetRate = rates[targetCurrency];

      if (sourceRate && targetRate) {
        const calculatedAmount = (amountInSourceCurrency / sourceRate) * targetRate;
        setAmountInTargetCurrency(calculatedAmount);
        setSourceCurrencyName(currencyNames[sourceCurrency] || sourceCurrency);
        setTargetCurrencyName(currencyNames[targetCurrency] || targetCurrency);
      } else {
        console.error('Rates for selected currencies not available');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-yellow-500 border">
        Let's explore currency conversion simply
      </h1>
      <p className="lg:mx-32 opacity-40 py-5 font-bold text-white">
        "Welcome to 'Convert your money' today! Easily convert 
        money with the latest rates. Plan trips, manage finances, 
        or explore currency values effortlessly with our tool."
      </p>

      <div className="mt-5 flex items-center justify-center flex-col">
        <section className="w-full lg:w-1/2">
          <form onSubmit={getTheTargetAmount}>
            {/* Date input */}
            <div className="mb-4">
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-yellow-900 dark:text-white">
                Date
              </label>
              <input
                type="date"
                onChange={(e) => setDate(e.target.value)}
                id="date"
                name="date"
                className="bg-yellow-50 border border-yellow-300 text-yellow-900
                  text-sm rounded-lg focus:ring-yellow-500 
                  focus:border-yellow-500 block w-full p-2.5 dark:bg-yellow-700 
                  dark:border-yellow-600 dark:placeholder-yellow-400 dark:text-white 
                  dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                required
              />
            </div>

            {/* Source currency selection */}
            <div className="mb-4">
              <label
                htmlFor="sourceCurrency"
                className="block mb-2 text-sm font-medium text-yellow-900 dark:text-white">
                Source Currency
              </label>
              <select
                onChange={(e) => setSourceCurrency(e.target.value)}
                id="sourceCurrency"
                name="sourceCurrency"
                className="bg-yellow-50 border border-yellow-300 text-yellow-900
                  text-sm rounded-lg focus:ring-yellow-500 
                  focus:border-yellow-500 block w-full p-2.5 dark:bg-yellow-700 
                  dark:border-yellow-600 dark:placeholder-yellow-400 dark:text-white 
                  dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                value={sourceCurrency}
                required
              >
                <option value="">Select Source Currency</option>
                {Object.keys(currencyRates).map((currency) => (
                  <option className="p-1" key={currency} value={currency}>
                    {currencyNames[currency] || currency}
                  </option>
                ))}
              </select>
            </div>

            {/* Target currency selection */}
            <div className="mb-4">
              <label
                htmlFor="targetCurrency"
                className="block mb-2 text-sm font-medium text-yellow-900 dark:text-white">
                Target Currency
              </label>
              <select
                value={targetCurrency}
                onChange={(e) => setTargetCurrency(e.target.value)}
                id="targetCurrency"
                name="targetCurrency"
                className="bg-yellow-50 border border-yellow-300 text-yellow-900
                  text-sm rounded-lg focus:ring-yellow-500 
                  focus:border-yellow-500 block w-full p-2.5 dark:bg-yellow-700 
                  dark:border-yellow-600 dark:placeholder-yellow-400 dark:text-white 
                  dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                required
              >
                <option value="">Select Target Currency</option>
                {Object.keys(currencyRates).map((currency) => (
                  <option className="p-1" key={currency} value={currency}>
                    {currencyNames[currency] || currency}
                  </option>
                ))}
              </select>
            </div>

            {/* Amount input */}
            <div className="mb-4">
              <label
                htmlFor="amountInSourceCurrency"
                className="block mb-2 text-sm font-medium text-yellow-900 dark:text-white">
                Amount In Source Currency
              </label>
              <input
                type="number"
                onChange={(e) => setAmountInSourceCurrency(e.target.value)}
                id="amountInSourceCurrency"
                name="amountInSourceCurrency"
                className="bg-yellow-50 border border-yellow-300 text-yellow-900
                  text-sm rounded-lg focus:ring-yellow-500 
                  focus:border-yellow-500 block w-full p-2.5 dark:bg-yellow-700 
                  dark:border-yellow-600 dark:placeholder-yellow-400 dark:text-white 
                  dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                placeholder="Amount in source currency..."
                required
              />
            </div>

            <button className="bg-green-600 hover:bg-green-700 
              text-white font-medium py-2 px-4 rounded-md">
              Get the Target Currency
            </button>
          </form>
        </section>

        {/* Conversion result */}
        <h3 className="flex items-center justify-start py-5 text-lg">
          {pressed && (
            <div>
              <span className="text-xl">{amountInSourceCurrency}</span>{" "}
              {sourceCurrencyName} is equal to
              <span className="text-xl font-bold text-green-400">
                {" "}{amountInTargetCurrency.toFixed(2)}
              </span>{" "}
              {targetCurrencyName}
            </div>
          )}
        </h3>
      </div>
    </div>
  );
}
