import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [printerBrand, setPrinterBrand] = useState('');
  const [printerSeries, setPrinterSeries] = useState('');
  const [printerModel, setPrinterModel] = useState('');

  const handleFindCartridges = () => {
    console.log(`Searching for ${printerBrand} ${printerSeries} ${printerModel}`);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-top" text-align="center">  
          <span>Franchise Opportunities</span>
          <span>Help</span>
          <span>Feedback</span>
        </div>
        <div className="header-main">
          <img src="logo2.jpg"/>
          <h1 className="logo">CARTRIDGE KINGS</h1>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
          <button className="cart-button">Cart (1)</button>
        </div>
        <nav className="navbar">
          <a href="#">Home</a>
          <a href="#">Ink Cartridges</a>
          <a href="#">Toner Cartridges</a>
          <a href="#">Contact Us</a>
          <a href="#">Login / Register</a>
        </nav>
      </header>

      <main className="main">
        <section className="find-cartridge">
          <h2>Find the Right Cartridges for Your Printer</h2>
          <div className="search-form">
            <select onChange={(e) => setPrinterBrand(e.target.value)}>
              <option value="">1. Printer Brand</option>
              <option value="HP">HP</option>
              <option value="Canon">Canon</option>
            </select>
            <select onChange={(e) => setPrinterSeries(e.target.value)}>
              <option value="">2. Printer Series</option>
              <option value="Series 1">Series 1</option>
              <option value="Series 2">Series 2</option>
            </select>
            <select onChange={(e) => setPrinterModel(e.target.value)}>
              <option value="">3. Printer Model</option>
              <option value="Model 1">Model 1</option>
              <option value="Model 2">Model 2</option>
            </select>
            <button onClick={handleFindCartridges}>Find Cartridges</button>
          </div>
        </section>

        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="product-list">
            <div className="product">
              <img src="prod1.png" alt="HP 62 Black Ink Cartridge" />
              <p>HP 62 Black Ink Cartridge</p>
              <p>$9.49</p>
              <button>Add to Cart</button>
            </div>
            <div className="product">
              <img src="prod2.png" alt="Canon MF-3110 Toner" />
              <p>Canon MF-3110 Toner</p>
              <p>$36.45</p>
              <button>Add to Cart</button>
            </div>
            <div className="product">
              <img src="prod1.png" alt="HP 62 Black Ink Cartridge" />
              <p>HP 62 Black Ink Cartridge</p>
              <p><span className="old-price">$9.49</span> <span className="new-price">$5.99</span></p>
              <button>Add to Cart</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Cartridge Kings. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
