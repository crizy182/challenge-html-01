import React from 'react';
import Nav from './Nav';
import '../styles/components/Footer.styl';

function Footer() {
  return (
    <div className="Footer">
      <figure className="Footer__logoFigure">
        <img className="Footer__logo" src="" alt="" />
      </figure>
      <div className="Footer__copyleft">
        <span className="copyleft__Deck">© 2018 Deck</span>
        <span className="copyleft__Component">Component based UI Kit</span>
        <div className="copyleft__spacer"> </div>
        <form action="/subscribe/" className="copyleft__form-email">
          <input className="form-email__email" type="text" placeholder="Your E-mail" id="email" />
          <button className="formemail__subscribe" type="button">SUBSCRIBE</button>
        </form>
<<<<<<< HEAD
        <div className="copyleft__social">
          <span className="social__followUs"> Follow us:</span>
          <div className="social__iconsContainer">
            <i className="iconsContainer__fab fa-facebook" />
          </div>
=======
        <div className="">
          <span> Follow us:</span>
          <div />
>>>>>>> 934f7334086f7fd6427a71dea42171bdc95c5b3f
        </div>
      </div>
      <Nav />
    </div>
  );
}

export default Footer;
