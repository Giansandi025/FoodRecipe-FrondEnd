import React from 'react';
import style from './footer.module.css';

const Footer = () => {
  return (
    <>
      <footer>
        <div className={style.containerFooter}>
          <div className={style.boxTxtFooter}>
            <h1>Eat, Cook, Repeat</h1>
            <p>Share your best recipe by uploading here !</p>
          </div>
          <div className={style.cr}>
            <ul>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Learn more</a>
              </li>
              <li>
                <a href="#">Get in touch</a>
              </li>
            </ul>
          </div>
          <div className={style.pijarcamp}>
            <p>© PijarCamp</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
