import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { getDetailRecipe } from '../redux/actions/recipe'
import { Link, useParams } from 'react-router-dom'
import Navbar2 from '../component/Navbar2'
import Footer from '../component/Footer'
import style from '../assets/styles/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const Detail = () => {
  const dispatch = useDispatch()
  const recipe = useSelector((state) => {
    return state.detailRecipe
  })
  const { id } = useParams()
  useEffect(() => {
    dispatch(getDetailRecipe(id))
  }, [])
  return (
    <>
    <div className="container-fluid" style={{ ...style.ContainerStyle, backgroundColor: '#FFFFFF' }}>
        <Navbar2 />
        <main style={style.Form}>
            <div style={style.DetailTitle}>
                <h1 style={{ fontSize: '50px', fontWeight: 'bold' }}>
                    {
                        recipe.isLoading
                          ? (<div>Loading..</div>)
                          : recipe.isError
                            ? (<div>{recipe.errorMessage}</div>)
                            : recipe.data
                              ? (
                            <>
                            {recipe.data[0]?.title}
                            </>
                                )
                              : ''
                    }
                </h1>
            </div>
            {
                recipe.isLoading
                  ? (<div>Loading..</div>)
                  : recipe.isError
                    ? (<div>{recipe.errorMessage}</div>)
                    : recipe.data
                      ? (
                    <>
                    <div style={{ ...style.DetailImage, backgroundImage: "url('" + process.env.REACT_APP_BACKEND_URL + recipe.data[0]?.photo + "')" }}></div>
                    </>
                        )
                      : ''
            }
            <div style={{ marginTop: '50px', width: '60%' }}>
                <div style={{ color: '#3F3A3A' }}>
                    <h2 style={{ fontWeight: 'bold', fontSize: '25px' }}>Ingredients</h2>
                </div>
                <div style={{ fontFamily: 'airbnb-cereal-light', marginBottom: '50px' }}>
                {
                recipe.isLoading
                  ? (<div>Loading..</div>)
                  : recipe.isError
                    ? (<div>{recipe.errorMessage}</div>)
                    : recipe.data
                      ? (
                    <>
                    <div style={{ marginTop: '20px' }}>
                        {recipe.data[0]?.ingredients}
                    </div>
                    </>
                        )
                      : ''
            }
                </div>
                <div style={{ color: '#3F3A3A' }}>
                    <h2 style={{ fontWeight: 'bold', fontSize: '25px' }}>Video Step</h2>
                </div>
                <Link to="/video" target="_blank"><button type="button" style={style.GoToVideoButton}><FontAwesomeIcon icon={faPlay} /></button></Link>
                <div style={style.FormComment}>
                    <textarea id="comment" placeholder="Comment: " style={style.TextAreaComment}></textarea>
                </div>
            </div>
            <button type="button" id="comment-button" style={style.CommentButton}>Send</button>
            <section style={style.CommentSection}>
                <div style={{ color: '#3F3A3A' }}>
                    <h2 style={{ fontWeight: 'bold', fontSize: '25px', marginBottom: '20px' }}>Comment</h2>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={style.UserComment}></div>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      marginLeft: '40px'
                    }}>
                        <h5 style={{ padding: '0px', margin: '0px' }}>Ayudia</h5>
                        <h5 style={{ fontFamily: 'airbnb-cereal-light' }}>Nice recipe. simple and delicious, thankyou</h5>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
    </>)
}

export default Detail
