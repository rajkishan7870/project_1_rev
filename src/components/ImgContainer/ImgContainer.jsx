import React from 'react'
import style from './ImgContainer.module.css'
import Button from '@mui/material/Button';
export default function ImgContainer() {

    function handleCheckPlan(){

    }
  return (
    <div>
        <div className={style.parentDiv}>
            <img src='./GYM.jpg.jpg' alt='gym'/>
        </div>
        <div className={style.homeContent}>

            <h1> Chose your  Best Plan</h1>
            <p>Success is not final, failure is not fatal: It is the courage to continue that counts.</p>

            <Button variant='contained' onClick={handleCheckPlan} >check plans</Button>
        </div>
    </div>
  )
}
