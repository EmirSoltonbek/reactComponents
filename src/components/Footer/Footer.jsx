import React from 'react'
import '../Style.css'
import FacebookLogo from '../Images/facebook.png';
import InstagramLogo from '../Images/instagram.png';
import TelegramLogo from '../Images/telegram.png';

const Footer = () => {
  return (
    <div>
        <hr />
        <footer>
            <div className='container footer'>
                <div className='footer-left-side'>
                    <h6>+(996)559438886</h6>
                    <h6>+(971)521466764</h6>
                    <h6>emirsoltonbekov7@gmail.com</h6>
                </div>
                <div className='footer-center'>
                    <form typeof='submit'>
                        <textarea cols="30" rows="2" placeholder='enter you message'></textarea>
                        <button className='btn'>send</button>
                    </form>
                </div>
                <div className='footer-right-side'>
                    <div><a href='#'><img src={FacebookLogo} alt="FacebookLogo" /></a></div>
                    <div><a href='#'><img src={InstagramLogo} alt="InstagramLogo" /></a></div>
                    <div><a href='#'><img src={TelegramLogo} alt="TelegramLogo" /></a></div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer