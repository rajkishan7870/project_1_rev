import React from 'react'
import style from './Navbar.module.css'
import Button from '@mui/material/Button';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import { useNavigate } from 'react-router';

export default function Navbar() {
    const navigate = useNavigate();
    function handleJoin(){
        navigate("/register")
    }
  return (
    <div className={style.parentDiv}>
        <div className={style.image}>
            <SportsGymnasticsIcon fontSize='large'/>
        </div>

        <div className={style.section}>
            <h3>About</h3>
            <h3>Trainer</h3>
            <h3>Pricing</h3>
        </div>
        <div className={style.btn}>
            <Button variant='contained' onClick={handleJoin}>Join Us</Button>
        </div>
    </div>
  )
}