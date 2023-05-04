import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.parentDiv}>
        <div className={styles.divCont}>
        <div className={styles.content}>
            <h1>GYM</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quidem.</p>

            <div className={styles.anchor}>
                <a href='https://www.instagram.com/'><InstagramIcon/></a>
                <a href='https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjgyMjcxNzEwLCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D'><FacebookIcon/></a>
                <a href='https://twitter.com/i/flow/login'><TwitterIcon/></a>
                </div>
        </div>

        <div>
            <h4>Healthy living</h4>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
        </div>

        <div>
            <h4>Services</h4>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
        </div>

        <div>
            <h4>Programmes</h4>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
        </div>
    </div>
        
        <hr/>
        <span>@2023 All Rights copy Received</span>
        
    </div>
  )
}