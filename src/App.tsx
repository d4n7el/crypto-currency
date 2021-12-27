import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesApp from './infraestructura/routes/index';
import './infraestructura/theme/base.scss';

function App() {
  return (
    <Router>
      <RoutesApp />
    </Router>
  );
}

export default App;
