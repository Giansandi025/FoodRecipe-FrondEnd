import React, { useState, useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getLatestRecipe } from '../redux/actions/recipe'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import style from '../assets/styles/style'
import salad from '../assets/images/loream-sandwich.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import '../assets/styles/landingPage.css'

const Landing = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const recipe = useSelector((state) => {
    return state.latestRecipe
  })
  useEffect(() => {
    dispatch(getLatestRecipe())
  }, [])
  const [searchData, setSearchData] = useState('')
  const onSubmit = () => {
    return navigate('/recipe?search=' + searchData)
  }
  return (
    <>
    <div className="container-fluid" style={{ ...style.ContainerStyle, backgroundColor: '#FFFFFF' }}>
        <Navbar />
        <section style={style.Hero}>
            <div style={style.Content}>
                <div style={style.Jumbotron}>
                    <h1 style={style.JumbotronH1}>Discover Recipe & Delicious Food</h1>
                    <form style={style.JumbotronFormGroup} onSubmit={() => onSubmit()}>
                        <div style={style.JumbotronFormGroupIcon}><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                        <input type="text" onChange={(e) => setSearchData(e.target.value)} style={style.JumbotronFormGroupInput} className="searchInput" placeholder="Search Recipe"/>
                        <input type="submit" style={{ display: 'none' }} />
                    </form>
                </div>
            </div>
            <div style={style.Decoration}>
                <img style={style.Salad} src={salad} alt="" />
            </div>
        </section>
        <article style={style.Article}>
            <div style={style.ArticleTitle}>
                <div style={style.ArticleTitleHead}>
                <h1 style={{ ...style.ArticleTitleHeadH1, ...style.NewRecipe }}>New Recipe</h1>
            </div>
            </div>
            <main style={style.ArticleMainContent}>
                <div style={style.ArticleMainContentLeft}></div>
                    {
        recipe?.isLoading
          ? (
            <div>Loading..</div>
            )
          : recipe?.isError
            ? (
            <div>{recipe?.errorMessage}</div>
              )
            : (
        <>
        <div style={style.ArticleMainContentRight}>
        <div style={style.RightTextContent}>
        <h1 style={style.RightTextContentH1}>{recipe?.data[0]?.title}</h1>
        <div style={style.RightTextContentUnderline}></div>
        <h3 style={style.RightTextContentH3}>A wonderfull food made by love. Check this new recipe!</h3>
        <Link to={'/detail/' + recipe?.data[0]?.id}><button type="button" style={style.RightTextContentButton}>Learn More</button></Link>
        </div>
        </div>
        <div style={{ ...style.ArticleMainContentNewPhoto, backgroundImage: "url('" + process.env.REACT_APP_BACKEND_URL + recipe?.data[0]?.photo + "')" }}></div>
        </>
              )
    }
            </main>
        </article>
        <Footer />
    </div>
    </>)
}

export default Landing
