onst Quote = require('../models/quote');

// Define the calculatePrice function within the controller
function calculatePrice(input) {
  const fuelPrice = input * 3.95; // Calculate the price
  const totalPrice = fuelPrice * 1.05; // Apply 5% tax
  return totalPrice;
}

// Create a new quote and save it to the database
router.post('/quotes', async (req, res) => {
  try {
    const { input } = req.body;
    const price = calculatePrice(input); // Calculate the price directly in the controller

    const newQuote = new Quote({ input, price });
    await newQuote.save();

    res.status(201).json(newQuote);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create a quote.' });
  }
});

module.exports = router;
