import { Route, Routes } from 'react-router-dom';
import ListCurrencyes from '../components/cryptoCurrencies/criptoCurrenciesView';

const RoutesApp = () => {
  return (
    <Routes>
      <Route exact path="/crypto-currencies" element={<ListCurrencyes />} />
    </Routes>
  );
};

export default RoutesApp;
