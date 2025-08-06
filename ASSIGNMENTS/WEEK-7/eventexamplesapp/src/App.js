import React from 'react';
import Counter from './components/Counter';
import SayWelcome from './components/SayWelcome';
import OnPressButton from './components/OnPressButton';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Event Handling Examples</h1>
      <Counter />
      <hr />
      <SayWelcome />
      <hr />
      <OnPressButton />
      <hr />
      <CurrencyConverter />
    </div>
  );
}

export default App;
