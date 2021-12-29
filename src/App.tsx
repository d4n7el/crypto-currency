import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesApp from './routes/index';
import MenuApp from './infraestructura/components/menu';

import 'antd/dist/antd.css';
import './theme//base.scss';

function App() {
  return (
    <Router>
      <MenuApp />
      <RoutesApp />
    </Router>
  );
}

export default App;
