import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import style from './login.module.css';
import image from '../../assets/image/logo.png';
import { Link } from 'react-router-dom';
import { userLogin } from '../../Redux/action/user';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    password: '',
  });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    userLogin(form)
      .then((response) => {
        console.log(response.data);

        localStorage.setItem('token', response.data.status);
        // localStorage.setItem('token', response.data.token.token);
        // localStorage.setItem('data', JSON.stringify(response.data.token.data));
        localStorage.setItem('data', JSON.stringify(response.data.status));
        localStorage.setItem('name', JSON.stringify(response.data.token.data.name));
        alert('anda berhasil login');
        return navigate('/');
      })
      .catch((err) => {
        console.log(err);
        alert('gagal masuk');
      });
  };

  return (
    <>
      <section>
        <div className={style.containerction}>
          <div className={style.containerLogo}>
            <img src={image} alt="Mama Recipe" className={style.logo} />
            <h5 className="text-logo">Mama Recipe.</h5>
          </div>
          <div className={style.auth}>
            <Link to="/">
              <a>
                <h2>Welcome</h2>
              </a>
            </Link>
            <h4>Log in into your exiting account</h4>
            <form onSubmit={(e) => onSubmit(e)} method="get" action="/profile" className={style.formAuth}>
              <div className={style.cForm}>
                <label for="email" className={style.inputForm}>
                  User Name
                </label>
                <input onChange={(e) => setForm({ ...form, name: e.target.value })} type="text" id="email" for="email" name="email" className={style.inputText} placeholder="User Name" required />

                <label for="password" className={style.inputForm}>
                  Password
                </label>
                <input onChange={(e) => setForm({ ...form, password: e.target.value })} type="password" className={style.inputText} id="password" for="password" name="password" placeholder="Password" required />

                <div className={style.checkbox}>
                  <input type="checkbox" id="agree" name="agree" className={style.tCheckbox} required />
                  <label for="agree">I agree to terms & conditions</label>
                </div>
                <input type="submit" value="Log in" className={style.submit} src="./profil.html" />
              </div>
              <div className={style.fw}>
                <a href="./forgotpassword.html" className={style.forgot}>
                  Forgot Password?
                </a>
              </div>
            </form>

            <p>
              Don’t have an account?{' '}
              <Link to="/register" className={style.signup}>
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
