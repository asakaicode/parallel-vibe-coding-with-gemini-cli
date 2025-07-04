import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: '商品A', price: 1000, description: '商品Aの詳細です。', image: 'https://via.placeholder.com/250' },
  { id: 2, name: '商品B', price: 2000, description: '商品Bの詳細です。', image: 'https://via.placeholder.com/250' },
  { id: 3, name: '商品C', price: 3000, description: '商品Cの詳細です。', image: 'https://via.placeholder.com/250' },
];

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>商品が見つかりません</div>;
  }

  return (
    <div className="container">
      <div className="product-detail">
        <img src={product.image} alt={product.name} />
        <div className="product-info">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}円</p>
          <button>カートに追加</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;