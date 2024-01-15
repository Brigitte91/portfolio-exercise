/* eslint-disable */
import React, { useState } from 'react';
import './App.css';
import { portfolioItems } from './utils/data';
import { PortfolioItemPage } from './pages/PortfolioItemPage';
import { PortfolioPage } from './pages/PortfolioPage';


export const App = () => {
  const [selectedItem, setSelectedItem] = useState(portfolioItems[1]);


  return <div className="App">
    {selectedItem ?
  <PortfolioItemPage item={selectedItem}/> :
  <PortfolioPage />
}
  </div>;
};
