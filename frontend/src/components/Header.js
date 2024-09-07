import React from 'react';
import './Header.css';
import UserBox from './UserBox';

function Header({ setPage, setModalBox, token, setToken }) {
  function BasketLink() {
    if (token !== null) {
      return (
        <>
        
          <li onClick={() => setPage('Basket')}>События</li>
          
        </>
      )
    }
  }

  return (
    <div className="Header">
      <ul>

       <img width="80px" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Porsche_hood_emblem.png"></img>
        <li onClick={() => setPage('Main')}>Главная</li>
        <BasketLink />
      </ul>
      <UserBox setModalBox={setModalBox} token={token} setToken={setToken} setPage={setPage} />
            <img width="80px" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Porsche_hood_emblem.png"></img>
    </div>

  );
}

export default Header;