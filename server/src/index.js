

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

require("dotenv").config();
console.log(process.env.APP_ID);

app.use(express.json());
app.use(cors());

app.get("/getAllCurrency", async (req, res) => {
    const { date, sourceCurrency, targetCurrency, amountInSourceCurrency } = req.query;

    // Check if the date is valid
    if (!date || isNaN(new Date(date))) {
        return res.status(400).json({ error: "Invalid date format. Use YYYY-MM-DD." });
    }

    const currencyURL = `https://openexchangerates.org/api/historical/${date}.json?app_id=d1c93afb7d0e499c94b7b097a9acfe94`;
    const nameURL = `https://openexchangerates.org/api/latest.json?app_id=d1c93afb7d0e499c94b7b097a9acfe94`;

    try {
        const namesResponse = await axios.get(currencyURL);
        const nameData = namesResponse.data;

        return res.json(nameData);

    } catch (err) {
        console.error(err);

        // Handle the error with a meaningful response
        if (err.response) {
            return res.status(err.response.status).json({ error: err.response.data });
        } else {
            return res.status(500).json({ error: "An internal server error occurred." });
        }
    }
});

app.listen(5000, () => {
    console.log("SERVER STARTED on port 5000");
});
