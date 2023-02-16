import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDetailUser } from '../redux/actions/users'
import { getMyRecipe, deleteRecipe } from '../redux/actions/recipe'
import { Link } from 'react-router-dom'
import Navbar2 from '../component/Navbar2'
import Footer from '../component/Footer'
import style from '../assets/styles/style'
import edit from '../assets/images/edit.svg'
import {
  Button,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'

const Profile = () => {
  const userId = localStorage.getItem('user_id')
  const dispatch = useDispatch()
  const user = useSelector((state) => {
    return state.user
  })
  const recipe = useSelector((state) => {
    return state.myRecipe
  })
  const [isOpen, setIsOpen] = useState(false)
  const [idRecipe, setidRecipe] = useState('')
  const toggle = (idrec) => {
    setIsOpen(!isOpen)
    setidRecipe(idrec)
  }
  const [activeTab, setActiveTab] = useState('1')
  const deleteRecipes = (recipeId) => {
    deleteRecipe(recipeId)
      .then((result) => {
        if (result.status !== 'success') {
          alert(result.status + ': ' + result.message)
        } else {
          alert(result.message)
          toggle()
          dispatch(getMyRecipe())
        }
      })
      .catch((err) => {
        alert(err)
      })
  }
  useEffect(() => {
    dispatch(getDetailUser(userId))
  }, [])
  useEffect(() => {
    dispatch(getMyRecipe())
  }, [])
  return (
        <>
        <div className="container-fluid" style={{ ...style.ContainerStyle, backgroundColor: '#FFFFFF' }}>
        <Navbar2 />
        <main style={style.Form}>
            {
            user.isLoading
              ? (<div>Loading...</div>)
              : user.isError
                ? (<div>{user.errorMessage}</div>)
                : user.data
                  ? (<><div style={{ backgroundImage: "url('" + process.env.REACT_APP_BACKEND_URL + (!user.data[0]?.photo ? 'default.jpg' : user.data[0]?.photo) + "')", ...style.ProfileImage }}>
            <img src={edit} style={{ position: 'absolute' }} alt="Edit" />
        </div></>)
                  : ''
            }
            <div style={{ marginTop: '10px' }}><h5>
                {
                user.isLoading
                  ? (<div>Loading...</div>)
                  : user.isError
                    ? (<div>{user.errorMessage}</div>)
                    : user.data
                      ? (<>{user.data[0]?.name}</>)
                      : ''
                }</h5></div>
            <Nav tabs style={style.ProfileMenu}>
            <NavItem>
                <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                <h5>My Recipe</h5>
                </NavLink>
            </NavItem>
            {/* <NavItem>
                <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                <h5>Saved Recipe</h5>
                </NavLink>
            </NavItem> */}
            {/* <NavItem>
                <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                <h5>Liked Recipe</h5>
                </NavLink>
            </NavItem> */}
            </Nav>

      <TabContent activeTab={activeTab} style={{ marginTop: '35px' }}>
        <TabPane tabId="1">
                {
                    recipe.isLoading
                      ? (<div>Loading..</div>)
                      : recipe.isError
                        ? (<div>{recipe.errorMessage}</div>)
                        : recipe.data?.length === 0
                          ? "You Don't Have A Recipe"
                          : (<><div className="row" style={style.MyRecipe}>
                        {recipe.data?.map((e, i) => {
                          return (
                            <div key={i} className="col-lg-4 col-md-6 col-sm-12 mx-3 my-3" style={{ backgroundImage: "url('" + process.env.REACT_APP_BACKEND_URL + e.photo + "')", ...style.MyRecipe1 }}>
                                <div style={{ marginTop: '10px', marginLeft: '160px', marginRight: '0px' }}>
                                <Link to={'/edit/recipe/' + e.id}><Button color="warning" style={{ marginRight: '10px' }}><div style={{ fontSize: '11px' }}>Edit</div></Button></Link>
                                <Button color="danger" onClick={() => { toggle(e.id) }}><div style={{ fontSize: '11px' }}>Delete</div></Button>
                                </div>
                                <Link to={'/detail/' + e.id} style={{ textDecoration: 'none' }}>
                                <h5 style={style.MyRecipeh5}>{e.title}</h5>
                                </Link>
                            </div>
                          )
                        })}
                        <Modal isOpen={isOpen} toggle={toggle}>
                                <ModalHeader toggle={toggle}>Delete Recipe</ModalHeader>
                                <ModalBody>
                                  Are you sure to delete this recipe ?
                                </ModalBody>
                                <ModalFooter>
                                  <Button color="danger" onClick={() => { deleteRecipes(idRecipe) }}>
                                    Delete
                                  </Button>{' '}
                                  <Button color="secondary" onClick={toggle}>
                                    Cancel
                                  </Button>
                                </ModalFooter>
                              </Modal>
                        </div></>)
                }
        </TabPane>
        <TabPane tabId="2">No Saved Recipe</TabPane>
        <TabPane tabId="3">No Liked Recipe</TabPane>
      </TabContent>
        </main>
        <Footer />
        </div>
        </>
  )
}

export default Profile
