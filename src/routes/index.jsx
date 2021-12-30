import { Route, Routes } from 'react-router-dom';
import Currencies from '../currency/infraestructa/container/currencies';

const RoutesApp = () => {
  return (
    <Routes>
      <Route exact path="/crypto-currencies" element={<Currencies />} />
      <Route exact path="/" element={<Currencies />} />
    </Routes>
  );
};

export default RoutesApp;
