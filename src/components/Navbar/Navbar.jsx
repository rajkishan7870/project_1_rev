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
            <a href='#about'><h3>About</h3></a>
            <a href='#trainer'><h3>Trainer</h3></a>
            <a href='#program'><h3>Program</h3></a>
            <a href='#pricing'><h3>Pricing</h3></a>
        </div>
        <div className={style.btn}>
            <Button variant='contained' onClick={handleJoin}>Join Us</Button>
        </div>
    </div>
  )
}
