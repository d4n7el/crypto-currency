import { Route, Routes } from 'react-router-dom';
import Currencies from '../currency/infraestructa/container/currencies';
import Page404 from '../infraestructura/view/errors/notFound';

const RoutesApp = () => {
  return (
    <Routes>
      <Route exact path="/crypto-currencies" element={<Currencies />} />
      <Route exact path="/" element={<Currencies />} />
      <Route exact path="*" element={<Page404 />} />
    </Routes>
  );
};

export default RoutesApp;
