import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockRow from './components/StockRow.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <table className="table mt-5">
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Price</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <StockRow ticker="apple"/>
            <StockRow ticker="google"/>
            <StockRow ticker="microsoft"/>
            <StockRow ticker="tesla"/>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
