import React, { useState, useEffect } from 'react';
import style from './landing.module.css';
import iconHome from '../../assets/image/icon/home.svg';
import iconSearch from '../../assets/image/icon/search.svg';
import iconLogin from '../../assets/image/icon/login.svg';
import Footer from '../../components/footer/footer.jsx';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

const Landing = () => {
  // munculkan nama di profile
  const nameA = JSON.parse(localStorage.getItem('name'));
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState('id');
  const [asc, setAsc] = useState('asc');

  const [title, setName] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title != '') {
      axios.get(`${process.env.REACT_APP_API_URL}/recipe/title/${title}`).then((res) => {
        setData(res.data);
        return navigate(`?title=${title}`);
      });
    }
  };
  useEffect(() => {
    getData(sort, asc, 3, currentPage);
  }, [sort, asc, currentPage]);

  const getData = (sort, asc, limit, page) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/recipe?sort=${sort}&asc=${asc}&limit=${limit}${page ? `&page=${page}` : ''}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    getData(sort, asc, 3, currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      getData(sort, asc, 3, currentPage - 1);
    }
  };

  const handleSorting = () => {
    if (sort == 'id') {
      setSort('title');
    } else {
      setSort('id');
    }
    getData(sort, asc, 3, currentPage);
  };

  const handleAsc = () => {
    if (asc == 'asc') {
      setAsc('desc');
    } else {
      setAsc('asc');
    }
    getData(sort, asc, 3, currentPage);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${style.pasA} bg-transparent `}>
        <button className="navbar-toggler m-5 bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon bg-white"></span>
        </button>
        <div className={`collapse navbar-collapse bg-transparent ${style.navStyle}  ${style.navigasi}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link to="/" className={style.list}>
                <a className={`nav-link ${style.textNav}`} href="../../index.html">
                  <img src={iconHome} alt="home" className={style.navIcon} />
                  Home <span className={style.srOnly}></span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className={style.list}>
                <a className={`nav-link ${style.textNav}`}>
                  <img src={require('../../assets/image/icon/add.png')} alt="add recipe" className={style.navIcon} />
                  Add Recipe
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className={style.list}>
                <a className={`nav-link ${style.textNav}`}>
                  <img src={require('../../assets/image/icon/profile.png')} alt="profile" className={style.navIcon} />
                  Profile
                </a>
              </Link>
            </li>
          </ul>
          <div className={style.secondaryNavbar}>
            <ul>
              <li>
                <Link to="/profile" className={style.list}>
                  <a className={style.login}>
                    <div className={style.icon}>
                      <img src={iconLogin} alt="" />
                    </div>
                    {nameA}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section>
        <div className={style.hero}>
          <div className={style.content}>
            <div className={style.cover}>
              <h1 className={style.txtHero}>Discover Recipe & Delicious Food</h1>
              {/* <form action="" onSubmit={(e) => onSubmitHandler(e)}> */}
              <div className={style.search}>
                <img src={iconSearch} alt="" />
                <form onSubmit={(e) => onSubmitHandler(e)} action="">
                  <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Search Recipe" className={style.input} />
                </form>
                {/* onChange={(e) => setTitle(e.target.value)} */}
              </div>
              {/* </form> */}
            </div>
          </div>
          <div className={style.decoration}>
            <div className={style.bg}>
              <img src={require('../../assets/image/Vector BG.webp')} alt="Background Vector" className={style.vectorOne} />
              <img src={require('../../assets/image/Vector BG.webp')} alt="Background Vector" className={style.vectorTwo} />
              <div className={style.foodDecoration}>
                <img src={require('../../assets/image/vegetable.webp')} alt="vegetable" className={style.vegetable} />
                <img src={require('../../assets/image/food1.webp')} alt="Food" className={style.food} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.titleRecipe}>
        <div className={style.boxPopular}>
          <h1 className={style.txtTitle}>Popular For You</h1>
          <img src={require('../../assets/image/Vector2.webp')} alt="Vector" className={style.vector} />
          <div className={`${style.wrappingImage} container`}>
            <div className={`${style.food} row col-6  `}>
              <Link to="/detail">
                <a>
                  <img src={require('../../assets/image/pizza.webp')} alt="Pizza Lamoa" className={style.foodImage} />
                  <h4>Pizza Lamoa</h4>
                </a>
              </Link>
            </div>
            <div className={`${style.food} row col-6  `}>
              <Link to="/detail">
                <a>
                  <img src={require('../../assets/image/burger.webp')} alt="King Burger" className={style.foodImage} />
                  <h4>King Burger</h4>
                </a>
              </Link>
            </div>
          </div>

          <div className={style.boxNewRecipe}>
            <h1 className={style.txtTitle}>New Recipe</h1>
            <div className="container">
              <div className={style.bxN}>
                <div className="row">
                  <div className={`${style.bxNPrimary} col`}>
                    <div className={style.bgImage}>
                      <img src={require('../../assets/image/burger2.webp')} alt="Burger" className={style.imgNr} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className={`${style.bxNSecondary} col`}>
                    <h1 className={style.txtRecipeTwo}>Healthy Bone Broth Ramen (Quick & Easy)</h1>
                    <div className={style.line}></div>
                    <p>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</p>
                    <Link to="/detail">
                      <a>
                        <button>Learn More</button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.boxLsPopular}>
          <h1 className={style.txtTitle}>Popular Recipe</h1>
          <div className={`container center-media`}>
            <div className={`row ${style.boxOne}`}>
              <div className={`${style.grid12} ${style.gapMedium}`}>
                {data.length === 0 ? (
                  <h1>Loading...</h1>
                ) : (
                  data.data.map((item, index) => (
                    <div key={index} className={`${style.cusGridMd4} position-relative p-0`}>
                      <img src={`${process.env.REACT_APP_API_URL}/${item.image}`} className="img-fluid" alt={data.title} />
                      <span className={`position-absolute ${style.titleImage}`}>{item.title}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <button className="page-link" onClick={() => handlePrevious()}>
                  Previous
                </button>
              </li>
              <li className="page-item">
                <button className="page-link">{currentPage}</button>
              </li>
              <li className="page-item">
                <button className="page-link" disabled={data.data <= 0} onClick={() => handleNext()}>
                  Next
                </button>
              </li>
              <li className="page-item">
                <button className="page-link" aria-label="Next" onClick={() => handleSorting()}>
                  <span aria-hidden="true">{sort}</span>
                </button>
              </li>
              <li className="page-item">
                <button className="page-link" aria-label="Next" onClick={() => handleAsc()}>
                  <span aria-hidden="true">{asc}</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default Landing;
