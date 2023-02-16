import React from 'react'
import '../assets/styles/font.css'
import style from '../assets/styles/style'

const Footer = () => {
  return (
        <>
           <footer style={style.Footer}>
            <div style={style.FooterTitle}>
                <h1 style={style.FooterTitleH1}>Eat, Cook, Repeat</h1>
            </div>
            <div style={style.FooterDesc}>
                <h3 style={style.FooterDescH3}>Share your best recipe by uploading here !</h3>
            </div>
            <div style={style.FooterLink}>
                <small style={style.FooterLinkSmall}>Product</small>
                <small style={style.FooterLinkSmall}>Company</small>
                <small style={style.FooterLinkSmall}>Learn More</small>
                <small style={style.FooterLinkSmall}>Get In Touch</small>
            </div>
        </footer>
        </>
  )
}

export default Footer
