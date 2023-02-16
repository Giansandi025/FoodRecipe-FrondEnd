import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { getDetailUser } from '../redux/actions/users'
import { useNavigate, Link } from 'react-router-dom'
import style from '../assets/styles/style'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import '../assets/styles/font.css'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

const Navbar2 = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => {
    return state.user
  })
  const token = localStorage.getItem('token')
  const userId = localStorage.getItem('user_id')
  const navigate = useNavigate()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const logout = () => {
    localStorage.clear()
    return navigate('/login')
  }
  const toggle = () => setDropdownOpen(prevState => !prevState)
  useEffect(() => {
    dispatch(getDetailUser(userId))
  }, [])
  return (
        <>
           <nav style={style.Navbar}>
            <div style={style.PrimaryMenu}>
                <ul style={style.PrimaryMenuUl}>
                    <li style={style.PrimaryMenuUlLi}><Link to="/" style={style.PrimaryMenuUlLiA}>Home</Link></li>
                    <li style={style.PrimaryMenuUlLi}><Link to="/insert" style={style.PrimaryMenuUlLiA}>Add Recipe</Link></li>
                    <li style={style.PrimaryMenuUlLi}><Link to="/profile" style={style.PrimaryMenuUlLiA}>Profile</Link></li>
                </ul>
            </div>
            <div style={{ ...style.SecondaryMenu, backgroundColor: 'none' }}>
                <ul style={style.SecondaryMenuUl}>
                    <li style={style.SecondaryMenuUlLi}>
                        { !token
                          ? (<><Link to="/login" style={style.SecondaryMenuUlLiA}>
                            <div style={style.SecondaryMenuUlLiIcon}><FontAwesomeIcon icon={faUser} /></div>
                            Login
                        </Link></>)
                          : user?.isLoading
                            ? (<div>Loading...</div>)
                            : user?.isError
                              ? (<div>{user.errorMessage}</div>)
                              : user.data
                                ? (<>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle style={{ ...style.SecondaryMenuUlLiA, backgroundColor: '#FFFFFF', border: 'none' }} caret><div style={{ ...style.SecondaryMenuUlLiIcon, backgroundColor: '#000', color: '#FFF' }}><FontAwesomeIcon icon={faUser} /></div>
                        <div style={{ color: '#000' }}>{user?.data[0]?.name}</div></DropdownToggle>
      <DropdownMenu>
        <DropdownItem><Link to="/profile" style={{
          textDecoration: 'none',
          color: '#000000'
        }}>My Profile</Link></DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={() => { logout() }}>Logout</DropdownItem>
      </DropdownMenu>
    </Dropdown>
                    </>)
                                : ''
                        }
                    </li>
                </ul>
            </div>
        </nav>
        </>
  )
}

export default Navbar2
