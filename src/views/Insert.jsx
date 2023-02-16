import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { insertRecipe } from '../redux/actions/recipe'
import Navbar2 from '../component/Navbar2'
import Footer from '../component/Footer'
import style from '../assets/styles/style'
import ImagesIcon from '../assets/images/images.svg'

const Insert = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    title: '',
    ingredients: '',
    video: '',
    photo: ''
  })
  const onChangeInput = (e, field) => {
    setForm(
      {
        ...form,
        [field]: e
      }
    )
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (form.title === '' || form.ingredients === '' || form.photo === '') {
      alert('All field must be filled !')
    } else {
      const formData = new FormData()
      formData.append('title', form.title)
      formData.append('ingredients', form.ingredients)
      formData.append('video', form.video)
      formData.append('photo', form.photo)

      insertRecipe(formData)
        .then((result) => {
          if (result.status !== 'success') {
            alert(result.status + ': ' + result.message)
          } else {
            alert(result.message)
            return navigate('/profile')
          }
        })
        .catch((err) => {
          alert(err)
        })
    }
  }
  return (<>
    <div className="container-fluid" style={{ ...style.ContainerStyle, backgroundColor: '#FFFFFF' }}>
    <Navbar2 />
        <main>
            <form onSubmit={(e) => onSubmit(e)} style={style.Form}>
            <div style={style.ImageUpload}>
                <input type="file" onChange={(e) => onChangeInput(e.target.files[0], 'photo')} name="recipe-image" style={style.InputRecipeImage}/>
                <div style={style.Form}>
                    <img src={ImagesIcon} style={{ height: '35px', width: '35px' }} alt=""/>
                    <small style={{ marginTop: '25px', fontSize: '20px' }}>Add Photo</small>
                </div>
            </div>
            <div style={style.InsertTitle}>
                <input type="text" onChange={(e) => onChangeInput(e.target.value, 'title')} name="recipe-title" placeholder="Title" style={style.RecipeTitle}/>
            </div>
            <div style={style.InsertIngredients}>
                <textarea onChange={(e) => onChangeInput(e.target.value, 'ingredients')} name="recipe-ingredients" placeholder="Ingredients" style={style.RecipeIngredients}></textarea>
            </div>
            <div style={style.InsertVideo}>
                <input type="text" onChange={(e) => onChangeInput(e.target.value, 'video')} name="recipe-video" placeholder="Video" style={style.RecipeVideo}/>
            </div>
            <input type="submit" style={style.PostRecipe} value="Post"/>
            </form>
        </main>
        <Footer />
    </div>
    </>)
}

export default Insert
