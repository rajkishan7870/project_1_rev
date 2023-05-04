import React from 'react'
import style from './ImgContainer.module.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
export default function ImgContainer() {
    const navigate = useNavigate();
    
  return (
    <div>
        <div className={style.parentDiv}>
            <img src='./GYM.jpg.jpg' alt='gym'/>
        </div>
        <div className={style.homeContent}>

            <h1> Chose your  Best Plan</h1>
            <p>Success is not final, failure is not fatal: It is the courage to continue that counts.</p>

          <a href='#pricing'>  <Button variant='contained' sx={{ backgroundColor: "red" }}>check plans</Button></a>
        </div>
    </div>
  )
}
