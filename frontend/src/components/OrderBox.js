import React from 'react';
import './OrderBox.css';

function OrderBox({ setModalBox, setMessage, setBasket, setBasketQty, setBasketPrice }) {
    function order() {

        if (!validNum || !validExp || !validCvc) {
            document.getElementById('orderError').innerText = "Вы ввели данные неправильно!"
            return
        }

        setTimeout(() => {
            setBasket([])
            setBasketQty(0)
            setBasketPrice(0)
            setMessage('Вы участвуете в событии!')
            setModalBox('MessageBox')
        }, 100)
    }


    return (
        <div className="OrderBox">
            <h1>Оформлен</h1>
            <button id='send' onClick={() => order()}>Вы участвуете в событии</button>
            
        </div>
    );
}

export default OrderBox;