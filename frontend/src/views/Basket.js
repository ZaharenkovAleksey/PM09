import React from 'react';
import './Basket.css';
import ProductBasket from '../components/ProductBasket';

function Basket({ basket, setBasket, basketPrice, setBasketPrice, basketQty, setBasketQty, setModalBox }) {
  function ShowOrderButton() {
    if (basketQty > 0) {
      return (<><button className="order" onClick={() => setModalBox('OrderBox')}>Участвовать</button></>)
    }
  }

  return (
    <div className="Basket">
      
      
      <div className="BasketContent">
        {basket.map((item) => <ProductBasket key={item.id} id={item.id}
          image={item.image} title={item.title}
          price={item.price} setBasket={setBasket}
          setBasketPrice={setBasketPrice}
          setBasketQty={setBasketQty} />)}
      
      </div>
      
    <ShowOrderButton />
      <p> {basketPrice} </p>
      
    </div>
  );
}

export default Basket;