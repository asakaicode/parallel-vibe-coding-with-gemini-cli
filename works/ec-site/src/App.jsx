import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>ECサイト</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">商品一覧</Link>
              </li>
              <li>
                <Link to="/cart">カート</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
