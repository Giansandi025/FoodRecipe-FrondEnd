import React, { useState, useRef, useEffect } from 'react';
import style from './form.module.css';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { updateRecipe } from '../../Redux/action/recipe';

const Update = () => {
  // const [queryparams] = useSearchParams();
  const navigate = useNavigate();
  const hiddenFileInput = useRef(null);
  const [image, setImage] = useState('');
  const [recipe, setRecipe] = useState([]);
  // const tambahrecipe = queryparams.get('id');
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  //hook useEffect
  useEffect(() => {
    //panggil method "fetchData"
    getById();
  }, []);
  const { id } = useParams();

  const getById = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/recipe/${id}`);
    //get response data
    const data = await response.data;

    //assign data to state
    setRecipe(data);
  };

  const updateSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    formData.append('image', image);
    handlePost(Object.fromEntries(formData));
  };
  const updateGambar = (event) => {
    const fileUploaded = event.target.files[0];
    document.getElementById('formFile').innerHTML = fileUploaded.name;
    setImage(fileUploaded);
  };
  const handlePost = (form) => {
    updateRecipe(id, form)
      .then((res) => {
        console.log(res);
        setImage('');
        alert('Recipe update successfully');
        return navigate('/profile');
      })
      .catch((err) => {
        console.log(err);
        alert('Failed to update recipe');
      });
  };

  let formPost = useRef();

  //////////////////////////////////////////////

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    document.getElementById('customBtn').innerHTML = fileUploaded.name;
    setImage(fileUploaded);
  };

  return (
    <section>
      <div className={style.boxContainer}>
        <div className={style.box}>
          <form onSubmit={updateSubmit}>
            <div className={style.containerOne}>
              <div className={style.inputImage}>
                <img src={require('../../assets/image/icon/image.png')} alt="" id="customBtn" for="image" name="image" onClick={handleClick} className={style.labelImage} />
                <input type="file" ref={hiddenFileInput} id="formFile" style={{ display: 'none' }} />
                <h4 onClick={handleClick} for="image" name="image" id="customBtn " className={style.labelImage}>
                  Add image
                </h4>
              </div>
              <div className={style.inputGr}>
                <label for="title" name="title"></label>
                {recipe.map((item) => (
                  // <textarea defaultValue={item.nama_recipe} name="nama_recipe"></textarea>
                  <input defaultValue={item.title} name="title" type="text" id="title" className={style.inputTitle} placeholder="Title" />
                ))}

                {recipe.map((item) => (
                  // <textarea defaultValue={item.nama_recipe} name="nama_recipe"></textarea>
                  <textarea defaultValue={item.ingredient} name="ingredients" id="ingredients" cols="30" rows="10" className={style.inputIngredients} placeholder="Ingredients"></textarea>
                ))}

                <label for="vidio" name="vidio"></label>
                {recipe.map((item) => (
                  // <textarea defaultValue={item.nama_recipe} name="nama_recipe"></textarea>
                  <input defaultValue={item.stepall} name="stepall" type="text" id="vidio" className={style.inputVidio} placeholder="Vidio" />
                ))}
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
export default Update;
