import React, { useState, useEffect } from 'react';
import axios from 'axios';
import iconLogin from '../../assets/image/icon/login.svg';
import style from '../dasboard/user.module.css';
import iconHome from '../../assets/image/icon/home.svg';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/user`);
    console.log(response.data);
  };
  return (
    <>
      <section>
        <div className={`row ${style.size} `}>
          <div className={`col-2 bg-warning ${style.menu}`}>
            <img src={require('../../assets/image/top.jpg')} alt="" />
            <h2 className="text-center text-white">User Name</h2>
          </div>
          <div className="col-10 bg-light">
            <nav className={`navbar navbar-expand-lg navbar-light bg-light ${style.navColor}`}>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={`collapse navbar-collapse bg-light ${style.navColor}`} id="navbarNav">
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
                  <div className={style.secondaryNavbar}>
                    <ul>
                      <li>
                        <Link to="/" className={style.list}>
                          <a className={style.login}>
                            <div className={style.icon}>
                              <img src={iconLogin} alt="" />
                            </div>
                            Logout
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>
            </nav>
            <div className="columns">
              <div className="column m-5">
                <Link to="/adduser">
                  <button className={`${style.tombol} btn m-4 p-3 btn-primary fw-bold `}>Add New</button>
                </Link>
                <table className={`table me-5  ${style.tables}`}>
                  <thead>
                    <tr>
                      <th className={style.text}>No</th>
                      <th className={style.text}>Name</th>
                      <th className={style.text}>Email</th>
                      <th className={style.text}>Password</th>
                      <th className={style.text}>Phone</th>
                      <th className={style.text}>Level</th>
                      <th className={style.text}>Image</th>
                      <th className={style.text}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={user.id}>
                        <td className={style.text}>{index + 1}</td>
                        <td className={style.text}>{user.name}</td>
                        <td className={style.text}>{user.email}</td>
                        <td className={style.text}>{user.password}</td>
                        <td className={style.text}>{user.phone}</td>
                        <td className={style.text}>{user.level}</td>
                        <td className={style.text}>{user.image}</td>
                        <td className={style.text}>
                          <button className="btn me-3 p-3 btn-primary"> Edit</button>
                          <button className="btn p-3 btn-danger">delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default UserList;
