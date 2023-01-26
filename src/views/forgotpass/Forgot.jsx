import React from 'react';
import style from './forgot.module.css';
import image from '../../assets/image/logo.png';

const Forgot = () => {
  return (
    <>
      <section>
        <div className={style.containerAction}>
          <div className={style.containerLogo}>
            <img src={image} alt="Mama Recipe" className={style.logo} />
            <h5 className={style.textLogo}>Mama Recipe.</h5>
          </div>
          <div className={style.auth}>
            <h2 className={`${style.txtCenter} ${style.txtSt}`}>Forgot Password?</h2>
            <h4 className={style.txtFloat}>We just need your registered e-mail address to send your password resend</h4>

            <form action="profil.html" className={style.formAuth}>
              <div className={style.cForm}>
                <label for="email" className={style.inputForm}>
                  E-mail
                </label>
                <input type="text" id="email" name="email" className={style.inputText} placeholder="E-mail" required />

                <input type="submit" value="Send E-mail" className={style.submit} src="./profil.html"></input>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Forgot;
