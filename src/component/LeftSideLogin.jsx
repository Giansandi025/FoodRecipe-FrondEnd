import React from 'react'
import style from '../assets/styles/style'
import '../assets/styles/login.css'
import icon from '../assets/images/icon.svg'
import Background from '../assets/images/bg.png'
const LeftSideLogin = () => {
  return (
        <>
            <div className="leftSide" style={{ ...style.LeftSideLogin, backgroundImage: 'url(' + Background + ')' }}>
                <img src={icon} style={style.LeftSideImg} />
            </div>
        </>
  )
}

export default LeftSideLogin
