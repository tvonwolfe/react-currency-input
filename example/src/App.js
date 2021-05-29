import React from 'react';
import CurrencyInput from 'react-currency-input';

const App = () => (
  <div
    style={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      margin: '0'
    }}
  >
    <div style={{ margin: 'auto' }}>
      <CurrencyInput
        allowFractionalValue
        onInput={(amount) => console.log(amount)}
      />
    </div>
  </div>
);

export default App;
