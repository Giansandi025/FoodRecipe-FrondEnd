import React, { useState, useEffect } from 'react'
import { Input } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getListRecipe } from '../redux/actions/recipe'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import Navbar2 from '../component/Navbar2'
import Footer from '../component/Footer'
import style from '../assets/styles/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import '../assets/styles/landingPage.css'

const Recipe = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const recipe = useSelector((state) => {
    return state.listRecipe
  })
  const [query] = useSearchParams()
  const search = !query.get('search') ? '' : query.get('search')
  const page = query.get('page') ? query.get('page') : 1
  const filter = query.get('sort_by') ? query.get('sort_by') : 'title'
  const sortType = query.get('type') === 'DESC' ? query.get('type') : 'ASC'
  const [searchData, setSearchData] = useState(search)
  const [filterType, setFilterType] = useState(filter)
  const [sort, setSort] = useState(sortType)
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(getListRecipe(searchData, filterType, sort, page))
    return navigate('?search=' + searchData + '&page=' + page + '&sort_by=' + filterType + '&type=' + sort)
  }
  useEffect(() => {
    dispatch(getListRecipe(searchData, filterType, sort, page))
  }, [])
  return (
        <>
        <div className="container-fluid" style={style.ContainerStyle}>
            <Navbar2 />
            <form style={{ ...style.JumbotronFormGroup, width: '60%', marginTop: '40px', marginLeft: 'auto', marginRight: 'auto', border: '1px solid #000' }} onSubmit={(e) => onSubmit(e)}>
                        <div style={style.JumbotronFormGroupIcon}><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                        <input type="text" onChange={(e) => setSearchData(e.target.value)} style={style.JumbotronFormGroupInput} className="searchInput" placeholder="Search Recipe" value={searchData}/>
                        <Input name="filtertype" type="select" onChange={(e) => setFilterType(e.target.value)} style={{ width: '10%', height: '53px', marginLeft: 'auto', marginRight: '0px', textAlign: 'center' }}>
                        <option value="">Sort By:</option>
                        <option value="title">Title</option>
                        <option value="date">Date</option>
                        </Input>
                        <Input name="sorttype" type="select" onChange={(e) => setSort(e.target.value)} style={{ width: '12%', height: '53px', marginLeft: 'auto', marginRight: '0px', textAlign: 'center' }}>
                        <option value="">Sort Type  :</option>
                        <option value="ASC">{filterType === 'title' ? 'A-Z' : filterType === 'date' ? 'Oldest' : 'A-Z'}</option>
                        <option value="DESC">{filterType === 'title' ? 'Z-A' : filterType === 'date' ? 'Newest' : 'Z-A'}</option>
                        </Input>
                        <input type="submit" style={{ display: 'none' }} />
                    </form>
            <article style={style.Article}>
                <div style={style.ArticleTitle}>
                    <div style={style.ArticleTitleHead}>
                        <h1 style={{ ...style.ArticleTitleHeadH1, ...style.NewRecipe }}>{ !search ? 'List Recipe' : `Search Result For "${search}"`}</h1>
                    </div>
                </div>
            <div className="row" style={style.PopularRowRecipe}>
                {
                    recipe.isLoading
                      ? (
                        <div>Loading..</div>
                        )
                      : recipe.isError
                        ? (
                        <div>{recipe.errorMessage}</div>
                          )
                        : recipe.data?.length === 0
                          ? (<div style={{ width: '100%', textAlign: 'center' }}>No Recipe Found</div>)
                          : (recipe.data?.map((e, i) => {
                              return (
                        <div key={i} className="col-lg-4 col-md-6 col-sm-12" style={{ ...style.PopularRecipe, backgroundImage: "url('" + process.env.REACT_APP_BACKEND_URL + e.photo + "')", ...style.PopularRecipes }}>
                            <div style={style.PopularRecipeTitle}>
                                <h1 style={style.PopularRecipeTitleH1}>
                                    <Link to={'/detail/' + e.id} style={style.PopularRecipeTitleH1A}>{e.title}</Link>
                                </h1>
                            </div>
                        </div>
                              )
                            }))
}
            </div>
            </article>
            <Footer />
        </div>
        </>
  )
}

export default Recipe
