import React, { useState, useEffect } from 'react';
import style from './detailrecipe.module.css';
import axios from 'axios';
import play from '../../assets/image/icon/play.svg';
import bookmark from '../../assets/image/icon/bookmark.svg';
import like from '../../assets/image/icon/like.svg';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer.jsx';
import { Link, useNavigate, useSearchParams, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getIdRecipe } from '../../Redux/action/recipe';

const DetailRecipe = () => {
  //get ID from parameter URL
  const { id } = useParams();

  //untuk get action
  const dispatch = useDispatch();

  const idrecipe = useSelector((state) => {
    return state.idrecipe;
  });

  //hook useEffect
  useEffect(() => {
    //panggil method "fetchData"
    dispatch(getIdRecipe(id));
  }, []);

  return (
    <>
      {/* {JSON.stringify(idrecipe)} */}
      <Navbar />

      <section>
        <div className={style.boxContainer}>
          <div className={style.box}>
            <div className={style.containerOne}>
              {idrecipe.data.map((item, index) => (
                <h1 className={style.title}>{item.title}</h1>
              ))}
              <div className={style.boxImage}>
                {idrecipe.data.map((item, index) => (
                  <img src={`${process.env.REACT_APP_API_URL}/${item.image}`} />
                ))}

                <div className={style.action}>
                  <img src={bookmark} alt="bookmarks" className={`${style.iconAction} ${style.bgBookmark}`} />
                  <img src={like} alt="likes" className={style.iconAction} />
                </div>
              </div>
            </div>

            <div className={style.containerTwo}>
              <h2 clasName={style.txt}>Ingredients</h2>

              {idrecipe.data.map((item, index) => (
                <ul className={style.txtRecipe}>
                  <li>{item.ingredient}</li>
                </ul>
              ))}
              {idrecipe.data.map((item, index) => (
                <h2 clasName={style.txt}>{item.stepall}</h2>
              ))}
              <Link to="/video">
                <a>
                  <button className={style.play}>
                    <img src={play} alt="" />
                  </button>
                </a>
              </Link>
              <textarea name="comment" id="comment" cols="100" rows="10" className={style.comment} placeholder="Comment"></textarea>
            </div>
            <button className={style.btnSend}>Send</button>
            <div className={style.boxComment}>
              <h2 className={style.txt}>Comment</h2>
              <div className={style.userComment}>
                <img src={require('../../assets/image/top.jpg')} alt="" />
                <div className={style.boxCommentUser}>
                  <h4>iqbal</h4>
                  <p>Nice Recipe. Simple and Delicious, Thankyou</p>
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
export default DetailRecipe;
