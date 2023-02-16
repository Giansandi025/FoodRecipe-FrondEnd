import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { login } from '../redux/actions/auth'
import style from '../assets/styles/style'
import LeftSideLogin from '../component/LeftSideLogin'
import '../assets/styles/login.css'
import '../assets/styles/font.css'
const Login = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState(
    {
      email: '',
      password: '',
      terms: ''
    }
  )
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
    if (form.terms !== true) {
      alert('You must agree terms & conditions')
    } else if (form.email === '' || form.password === '') {
      alert('Email / Password must be filled !')
    } else {
      const body = {
        email: form.email,
        password: form.password
      }
      login(body)
        .then((result) => {
          if (result.status !== 'success') {
            alert(result.status + ': ' + result.message)
          } else {
            localStorage.setItem('token', result.token)
            localStorage.setItem('user_id', result.data)
            alert(result.message)
            return navigate('/')
          }
        })
        .catch((err) => {
          alert(err)
        })
    }
  }
  return (
    <>
    <div style={style.ContainerLogin}>
        <LeftSideLogin />
        <div style={style.RightSideLogin}>
            <div style={style.LoginFormControl}>
                <form style={style.Form} onSubmit={(e) => onSubmit(e)}>
                    <h3 style={{ ...style.FormTitle, fontFamily: 'Inter' }}>Welcome</h3>
                    <div style={style.FormDescription}>Log in into your existing account</div>
                    <div style={style.FormEmail}>
                        E-mail
                        <input type="text" onChange={(e) => onChangeInput(e.target.value, 'email')} id="email" placeholder="examplexxx@gmail.com" style={style.FormInput} />
                    </div>
                    <div style={style.FormPassword}>
                        Password
                        <input type="password" onChange={(e) => onChangeInput(e.target.value, 'password')} id="password" placeholder="Password" style={style.FormInput} />
                    </div>
                    <div style={style.FormTerms}>
                        <input type="checkbox" onChange={(e) => onChangeInput(e.target.checked, 'terms')} id="terms" style={style.FormTerms1} />
                        <label htmlFor="terms" style={{ ...style.FormTerms1, paddingLeft: '5px' }}>I agree to terms & conditions</label>
                    </div>
                    <div style={{ width: '100%' }}>
                        <input type="submit" value="Log in" style={style.FormButton}/>
                    </div>
                    <div style={{ ...style.ForgotLink, fontFamily: 'airbnb-cereal' }}>
                        <small><a href="forgot.html" style={style.ForgotText}>Forgot Password?</a></small>
                    </div>
                    <div style={{ ...style.RegisterLink, fontFamily: 'airbnb-cereal' }}>
                        <small>Don&apos;t have an account? <Link to="/register" style={style.RegisterText}>Sign Up</Link></small>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>)
}

export default Login
