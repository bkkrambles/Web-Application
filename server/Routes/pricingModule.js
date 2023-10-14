router.post('/fuel-price', async (req, res) => {
  const { amount } = req.body;
  const price = amount * 3.95 * 1.05; // Calculate the price
  res.json({ price }); // Send the price back to the client
});
