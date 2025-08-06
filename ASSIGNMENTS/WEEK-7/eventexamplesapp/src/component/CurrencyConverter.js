import React, { useState } from 'react';

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [converted, setConverted] = useState(0);

  const convert = () => {
    setConverted(amount * 83); // Assume 1 USD = 83 INR
  };

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        placeholder="Amount in USD"
      />
      <button onClick={convert}>Convert to INR</button>
      <p>INR: ₹{converted}</p>
    </div>
  );
}

export default CurrencyConverter;
