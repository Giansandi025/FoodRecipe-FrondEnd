import React, { useState, useEffect } from 'react';

import axios from 'axios';
import style from './profile.module.css';
import iconEdit from '../../assets/image/icon/edit.svg';
import iconHome from '../../assets/image/icon/home.svg';
import Footer from '../../components/footer/footer.jsx';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeProfile } from '../../Redux/action/recipe';
import { deleteRecipe } from '../../Redux/action/recipe';

const Profile = () => {
  const name = JSON.parse(localStorage.getItem('name'));
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState([]);
  const listProfileRecipe = useSelector((state) => {
    return state.listProfileRecipe;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipeProfile());
  }, []);

  const onDelete = (id) => {
    // console.log(id);
    deleteRecipe(id).then((res) => {
      console.log(res);
      console.log(res.data);

      const posts = recipe.filter((item) => item.id !== id);
      setRecipe({ data: posts });
      alert('Data berhasil dihapus');
      return navigate('/profile');
    });
  };

  return (
    <>
      <Navbar />

      <section>
        <div className={style.boxContainer}>
          <div className={style.box}>
            <div className={style.containerOne}>
              <div className={style.profile}>
                <Link to="/login">
                  <a href="#">
                    <img src={require('../../assets/image/top.jpg')} alt="User" className={style.userProfile} />
                  </a>
                </Link>

                <a className="btn " data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  <img src={iconEdit} alt="edit" className={style.iEdit} />
                </a>
                <div className={`${style.test}  collapse `} id="collapseExample">
                  <div className="card card-body bg warning border-none">
                    <Link to="/forgot">
                      <button className={`${style.testA} bg-warning`} href="">
                        New Password
                      </button>
                    </Link>
                    <Link to="/forgot">
                      <button className={`${style.testA} bg-warning`} href="">
                        Change Image
                      </button>
                    </Link>
                  </div>
                </div>

                <h1>{name}</h1>
              </div>
            </div>
            <div className={style.containerTwo}></div>
            <div className={style.recipeChoice}>
              <ul className={`nav nav-tabs ${style.bdNone}`} id="myTab" role="tablist">
                <li className={`nav-item ${style.bd}`}>
                  <a className={`nav-link active ${style.bgNav}`} id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                    My Recipe
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link  ${style.bgNav}`} id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                    Saved Recipe
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${style.bgNav}`} id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                    Liked Recipe
                  </a>
                </li>
              </ul>
              <hr className={style.hrStyle} />
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className={style.boxChoice}>
                    {listProfileRecipe.data.map((item, index) => (
                      <div key={index} className={style.boxImageChoice}>
                        <img src={`${process.env.REACT_APP_API_URL}/${item.image}`} alt="Bomb Chicken" />

                        <div className={style.bgEdit}>
                          <button onClick={(e) => onDelete(item.id, e)} alt="edit" className="btn btn-danger">
                            delete
                          </button>
                          <Link to={`/update/${item.id}`}>
                            <button alt="edit" className="btn btn-primary">
                              update
                            </button>
                          </Link>
                          <Link to={`/detail/${item.id}`}>
                            <button alt="edit" className="btn btn-success">
                              detail
                            </button>
                          </Link>
                        </div>

                        <h1>{item.title}</h1>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default Profile;
