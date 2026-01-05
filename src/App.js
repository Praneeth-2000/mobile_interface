import React from 'react';
import './css/App.css';
import HomeContainer from './components/HomeContainer';
import PortfolioContainer from './components/PortfolioContainer';

function App() {
  return (
    <div className="app-container">
      <HomeContainer />
      <PortfolioContainer />
    </div>
  );
}

export default App;
