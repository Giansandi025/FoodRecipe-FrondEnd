import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './navbar.module.css';
import iconHome from '../../assets/image/icon/home.svg';
import iconLogin from '../../assets/image/icon/login.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const [data, setData] = useState();
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState();

  useEffect(() => {
    const data = localStorage.getItem(`data`);
    const getName = localStorage.getItem('name');

    if (data) {
      console.log(data);
      setData(data);
      setIsActive(true);
      setName(getName);
    }
  }, []);
  console.log(name);

  const onLogout = (e) => {
    // e.prevenDefault();
    localStorage.clear();
    alert('anda berhasil logout');
    return navigate('/login');
  };
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light bg-transparent ${style.navColor}`}>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse bg-transparent ${style.navColor}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className={style.list}>
                <a className={`nav-link ${style.textNav}`}>
                  <img src={iconHome} alt="home" className={style.navIcon} />
                  Home <span className={style.srOnly}></span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className={style.list}>
                <a className={`nav-link ${style.textNav}`} href="./addrecipe.html">
                  <img src={require('../../assets/image/icon/add.png')} alt="add recipe" className={style.navIcon} />
                  Add Recipe
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className={style.list}>
                <a className={`nav-link ${style.textNav}`} href="./profil.html">
                  <img src={require('../../assets/image/icon/profile.png')} alt="profile" className={style.navIcon} />
                  Profile
                </a>
              </Link>
            </li>
          </ul>
          <div className={style.secondaryNavbar}>
            <ul>
              <li>
                {isActive ? (
                  <button onClick={onLogout} className={style.login}>
                    <div className={style.icon}>
                      <img src={iconLogin} alt="" />
                    </div>
                    Logout
                  </button>
                ) : (
                  ''
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
