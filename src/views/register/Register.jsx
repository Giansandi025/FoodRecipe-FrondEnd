import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import style from './register.module.css';
import image from '../../assets/image/logo.png';
import { Link } from 'react-router-dom';
import { userRegister } from '../../Redux/action/user';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(form)
    if ((form.name === '') | (form.email === '') | (form.phone === '') | (form.password === '')) {
      alert('semua input wajib di isi');
    } else if (form.password !== form.passwordConfirm) {
      alert('password harus sama');
    } else {
      const body = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password,
        fileName: 'gambar.png',
      };
      userRegister(form)
        .then((response) => {
          if (response.data.code !== 200) {
            alert('error:' + response.data.message);
          } else {
            console.log(response.data);
            return navigate('/login');
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  return (
    <>
      <section>
        <div className={style.containerAction}>
          <div className={style.containerLogo}>
            <img src={image} alt="Mama Recipe" className={style.logo} />
            <h5 className={style.textLogo}>Mama Recipe.</h5>
          </div>
          <div className={`${style.auth} ${style.heightForm}`}>
            <Link to="/">
              <h2>Let’s Get Started !</h2>
            </Link>
            <h4 className={style.txtCenter}>Create new account to access all features</h4>
            <form onSubmit={(e) => onSubmit(e)} action="register" className={style.formAuth}>
              <div className={style.cForm}>
                <label for="name" className={style.inputForm}>
                  Name
                </label>
                <input onChange={(e) => setForm({ ...form, name: e.target.value })} type="text" id="name" for="name" name="name" className={style.inputText} placeholder="Name" required />

                <label for="email" className={style.inputForm}>
                  Email Address
                </label>
                <input onChange={(e) => setForm({ ...form, email: e.target.value })} type="text" id="email" for="email" name="email" className={style.inputText} placeholder="Enter email address" required />

                <label for="phone" className={style.inputForm}>
                  Phone Number
                </label>
                <input onChange={(e) => setForm({ ...form, phone: e.target.value })} type="number" id="phone" for="phone" name="phone" className={style.inputText} placeholder="08xxxxxxxxxx" required />

                <label for="password" className={style.inputForm}>
                  Create New Password
                </label>
                <input onChange={(e) => setForm({ ...form, password: e.target.value })} type="password" for="password" id="password" name="password" className={style.inputText} placeholder="Create New Password" required />

                <label for="password" className={style.inputForm}>
                  Confirm New Password
                </label>
                <input onChange={(e) => setForm({ ...form, passwordConfirm: e.target.value })} type="password" id="password" for="newpassword" name="password" className={style.inputText} placeholder="New Password" required />

                {/* <p
                style={
                  
                    ? styles.errPasword
                    : styles.displayErrPasword
                }
                // onSubmit={() => setPasswordMessage(false)}
              >
                password is not the same, please check again!
              </p> */}

                <div className={style.checkbox}>
                  <input type="checkbox" id="agree" name="agree" className={style.tCheckbox} required />
                  <label for="agree">I agree to terms & conditions</label>
                </div>

                <input type="submit" value="Register Account" className={style.submit} />
              </div>
            </form>

            <p>
              Already have account?{' '}
              <Link to="/login">
                <a className={style.register}>Log in Here</a>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Register;
