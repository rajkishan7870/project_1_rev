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
    function handleIcon(){
        navigate("/")
    }
  return (
    <div className={style.parentDiv}>
        <div className={style.image}>
            <SportsGymnasticsIcon fontSize='large' onClick={handleIcon} />
        </div>

        <div className={style.section}>
            <h3><a href="#about">About</a></h3>
            <h3><a href="#trainer">Trainer</a></h3>
            <h3><a href="#program">Program</a></h3>
            <h3><a href="#pricing">Pricing</a></h3>
        </div>
        <div className={style.btn}>
            <Button variant='contained' onClick={handleJoin}>Join Us</Button>
        </div>
    </div>
  )
}
