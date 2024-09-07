import React, { useState } from 'react';
import './ProductBasket.css';

function ProductBasket({ id, image, title, price, setBasket, setBasketPrice, setBasketQty }) {

  const [qty, setQty] = useState(1)

  function deleteBasket() {
    setBasket(current => current.filter(product => product.id !== id))
    setBasketPrice(current => current - (price * qty))
    setBasketQty(current => current - qty)
  }

  return (
    <div className="ProductBasket">
<img width="200px" src="https://upload.wikimedia.org/wikipedia/commons/8/82/Porsche_Autobau_%28Ank_kumar%2C_Infosys_Limited%29_04.jpg" alt='Изображение товара' />
      <h1>{title}</h1>
      
      
      <div className='basketQty'>
      </div>
      <button className='del' onClick={() => deleteBasket()}>Удалить</button>
    </div>
  );
}

export default ProductBasket;