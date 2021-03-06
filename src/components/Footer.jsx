import React from 'react';
import NavFooter from './NavFooter';
import '../styles/components/Footer.styl';
import Logo from '../../images/Logo_gray.png';

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__Deck">
        <figure className="Deck__logoFigure">
          <img className="Deck__logo" src={Logo} alt="" />
        </figure>
        <span className="">© 2018 Deck</span>
        <span>Component based UI Kit</span>
      </div>

      <div className="Footer__Social">
        <form action="/subscribe/" className="Social__form">
          <input
            className="form__email"
            type="text"
            placeholder="Your E-mail"
            id="email"
          />
          <button className="form__buttom" type="button">
            SUBSCRIBE
          </button>
        </form>
        <div className="Social__network">
          <span className="network__followUs"> Follow us:</span>
          <div className="network__iconsContainer">
            <i className="fab fa-instagram" />
            <i className="fab fa-pinterest-p" />
            <i className="fab fa-twitter" />
            <i className="fab fa-facebook-f" />
          </div>
        </div>
      </div>
      <NavFooter />
    </div>
  );
}

export default Footer;
