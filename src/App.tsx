import React, { useEffect, useState } from 'react';
import { getCryptoCurrencyService } from './domain/services/cryptoCurrency.service';
import { ICryptoCurrency } from './infraestructura/dto/cryptoCurrencyDTO';
import './App.css';

function App() {
  const [cryptoCurrency, setCryptoCurrency] = useState<ICryptoCurrency[]>([]);

  useEffect(() => {
    get_data();
  }, []);

  const get_data = async () => {
    const data = await getCryptoCurrencyService();
    setCryptoCurrency(data);
  };

  return <div className="App">hola</div>;
}

export default App;
