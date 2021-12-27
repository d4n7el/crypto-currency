import { Route, Routes } from 'react-router-dom';
import ListCurrencyes from '../components/criptoCurrenciesView';

const RoutesApp = () => {
  return (
    <Routes>
      <Route exact path="/crypto-currencies" element={<ListCurrencyes />} />
    </Routes>
  );
};

export default RoutesApp;
