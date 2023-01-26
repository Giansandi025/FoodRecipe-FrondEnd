import React, { useState, useRef } from 'react';
import style from './form.module.css';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { insertRecipe } from '../../Redux/action/recipe';

const Add = () => {
  // const navigate = useNavigate();
  const navigate = useNavigate();
  const [addForm, setAddForm] = useState({
    title: '',
    ingredient: '',
    stepall: '',
  });
  const [addImage, setAddImage] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(addForm, addImage);

    let inputForm = new FormData();
    inputForm.append('title', addForm.title);
    inputForm.append('ingredient', addForm.ingredient);
    inputForm.append('stepall', addForm.stepall);
    inputForm.append('image', addImage);

    insertRecipe(inputForm)
      .then((response) => {
        alert('Berhasil menambahkan resep');
        return navigate('/profile');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //////////////////////////////////////////////
  const hiddenFileInput = useRef(null);
  // const navigate = useNavigate();
  const [image, setImage] = useState('');

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    document.getElementById('customBtn').innerHTML = fileUploaded.name;
    setImage(fileUploaded);
  };

  return (
    <section>
      <div className={style.boxContainer}>
        <div className={style.box}>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className={style.containerOne}>
              <div className={style.inputImage}>
                <img src={require('../../assets/image/icon/image.png')} alt="" id="customBtn" for="image" name="image" onClick={handleClick} className={style.labelImage} />
                <input
                  onChange={(e) => {
                    setAddImage(e.target.files[0]);
                  }}
                  type="file"
                  ref={hiddenFileInput}
                  id="formFile"
                  style={{ display: 'none' }}
                />
                <h4 onClick={handleClick} for="image" name="image" id="customBtn " className={style.labelImage}>
                  Add image
                </h4>
              </div>
              <div className={style.inputGr}>
                <label for="title" name="title"></label>
                <input
                  onChange={(e) => {
                    setAddForm({ ...addForm, title: e.target.value });
                  }}
                  type="text"
                  id="title"
                  className={style.inputTitle}
                  placeholder="Title"
                />

                <textarea
                  onChange={(e) => {
                    setAddForm({ ...addForm, ingredient: e.target.value });
                  }}
                  name="ingredients"
                  id="ingredients"
                  cols="30"
                  rows="10"
                  className={style.inputIngredients}
                  placeholder="Ingredients"
                ></textarea>

                <label for="vidio" name="vidio"></label>
                <input
                  onChange={(e) => {
                    setAddForm({ ...addForm, stepall: e.target.value });
                  }}
                  type="text"
                  id="vidio"
                  className={style.inputVidio}
                  placeholder="Vidio"
                />
              </div>
            </div>

            <a>
              <button class={`${style.mbFooter} ${style.btnSend}`}>Send</button>
            </a>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Add;
