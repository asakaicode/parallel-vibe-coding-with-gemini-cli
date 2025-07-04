import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: '商品A', price: 1000, image: 'https://via.placeholder.com/250' },
  { id: 2, name: '商品B', price: 2000, image: 'https://via.placeholder.com/250' },
  { id: 3, name: '商品C', price: 3000, image: 'https://via.placeholder.com/250' },
];

function ProductList() {
  return (
    <div className="container">
      <h2>商品一覧</h2>
      <div class="products">
        {products.map(product => (
          <div className="product" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
            </Link>
            <p>{product.price}円</p>
            <button>カートに追加</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;