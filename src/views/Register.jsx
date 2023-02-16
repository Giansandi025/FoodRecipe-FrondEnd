import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { register } from '../redux/actions/auth'
import style from '../assets/styles/style'
import LeftSideLogin from '../component/LeftSideLogin'
import '../assets/styles/login.css'
const Register = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState(
    {
      name: '',
      email: '',
      password1: '',
      password2: '',
      phone: '',
      photo: '',
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
    } else if (form.name === '' || form.phone === '' || form.email === '' || form.password === '') {
      alert('All field must be filled !')
    } else if (form.password1 !== form.password2) {
      alert('Password not match !, check your input again')
    } else {
      const formData = new FormData()
      formData.append('name', form.name)
      formData.append('email', form.email)
      formData.append('password', form.password1)
      formData.append('phone', form.phone)
      formData.append('photo', form.photo)

      register(formData)
        .then((response) => {
          if (response.status !== 'success') {
            alert(response.status + ': ' + response.message)
          } else {
            alert(response.message)
            return navigate('/login')
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
                    <h3 style={{ ...style.FormTitle, fontFamily: 'Inter' }}>Let’s Get Started !</h3>
                    <div style={style.FormDescription}>Create new account to access all features</div>
                    <div style={style.FormEmail}>
                        Name*
                        <input type="text" onChange={(e) => onChangeInput(e.target.value, 'name')} id="name" placeholder="Name" style={style.FormInput} />
                    </div>
                    <div style={style.FormEmail}>
                        Email address*
                        <input type="text" onChange={(e) => onChangeInput(e.target.value, 'email')} id="email" placeholder="Enter email address" style={style.FormInput} />
                    </div>
                    <div style={style.FormEmail}>
                        Phone Number*
                        <input type="number" onChange={(e) => onChangeInput(e.target.value, 'phone')} id="phone" placeholder="08xxxxxxxxxx" style={style.FormInput} />
                    </div>
                    <div style={style.FormPassword}>
                        Create New Password*
                        <input type="password" onChange={(e) => onChangeInput(e.target.value, 'password1')} id="password1" placeholder="Create New Password" style={style.FormInput} />
                    </div>
                    <div style={style.FormPassword}>
                        New Password*
                        <input type="password" onChange={(e) => onChangeInput(e.target.value, 'password2')} id="password2" placeholder="New Password" style={style.FormInput} />
                    </div>
                    {/* <div style={style.FormPassword}>
                        Profile Photo*
                        <input type="file" onChange={(e) => onChangeInput(e.target.files[0], 'photo')} id="photo" style={style.FormInput} />
                    </div> */}
                    <div style={style.FormTerms}>
                        <input type="checkbox" onChange={(e) => onChangeInput(e.target.checked, 'terms')} id="terms" style={style.FormTerms1} />
                        <label htmlFor="terms" style={{ ...style.FormTerms1, paddingLeft: '5px' }}>I agree to terms & conditions</label>
                    </div>
                    <div style={{ width: '100%' }}>
                        <input type="submit" value="Register Account" style={style.FormButton}/>
                    </div>
                    <div style={{ ...style.RegisterLink, fontFamily: 'airbnb-cereal' }}>
                        <small>Already have account? <Link to="/login" style={style.RegisterText}>Log in Here</Link></small>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>)
}

export default Register
