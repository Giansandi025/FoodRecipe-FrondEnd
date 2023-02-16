import React, { useState, useEffect } from 'react'

import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editRecipe, getDetailRecipe } from '../redux/actions/recipe'
import Navbar2 from '../component/Navbar2'
import Footer from '../component/Footer'
import style from '../assets/styles/style'
import ImagesIcon from '../assets/images/images.svg'

const EditRecipe = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const recipe = useSelector((state) => {
    return state.detailRecipe
  })
  const { id } = useParams()
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

      editRecipe(formData, id)
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
  useEffect(() => {
    dispatch(getDetailRecipe(id))
  }, [])
  useEffect(() => {
    if (recipe.data.length > 0) {
      setForm({
        ...form,
        title: recipe.data[0].title,
        ingredients: recipe.data[0].ingredients,
        video: recipe.data[0].video,
        photo: recipe.data[0].photo
      })
    }
  }, [recipe])
  return (<>
    <div className="container-fluid" style={{ ...style.ContainerStyle, backgroundColor: '#FFFFFF' }}>
    <Navbar2 />
        <main>
            <form onSubmit={(e) => onSubmit(e)} style={style.Form}>
            <div style={style.ImageUpload}>
                <input type="file" onChange={(e) => onChangeInput(e.target.files[0], 'photo')} name="recipe-image" style={style.InputRecipeImage}/>
                <div style={style.Form}>
                    <img src={ImagesIcon} style={{ height: '35px', width: '35px' }} />
                    <small style={{ marginTop: '25px', fontSize: '20px' }}>Add Photo</small>
                </div>
            </div>
            <div style={style.InsertTitle}>
                <input type="text" onChange={(e) => onChangeInput(e.target.value, 'title')} name="recipe-title" placeholder="Title" style={style.RecipeTitle} value={
                    recipe.isLoading ? (<div>Loading...</div>) : recipe.isError ? (<div>{recipe.errorMessage}</div>) : form.title}/>
            </div>
            <div style={style.InsertIngredients}>
                <textarea onChange={(e) => onChangeInput(e.target.value, 'ingredients')} name="recipe-ingredients" placeholder="Ingredients" style={style.RecipeIngredients} value={
                    recipe.isLoading ? (<div>Loading...</div>) : recipe.isError ? (<div>{recipe.errorMessage}</div>) : form.ingredients}/>
            </div>
            <div style={style.InsertVideo}>
                <input type="text" onChange={(e) => onChangeInput(e.target.value, 'video')} name="recipe-video" placeholder="Video" style={style.RecipeVideo} value={
                    recipe.isLoading ? (<div>Loading...</div>) : recipe.isError ? (<div>{recipe.errorMessage}</div>) : form.video}/>
            </div>
            <input type="submit" style={style.PostRecipe} value="Post"/>
            </form>
        </main>
        <Footer />
    </div>
    </>)
}

export default EditRecipe
