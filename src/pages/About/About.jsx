import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import swal from 'sweetalert';
import {Button} from '@mui/material/';
import styles from './About.module.css';

export default function About() {
  const [alertMsg, setAlertMsg] = useState('Clicked from About Us section');

  
  const handleLearnMoreClick = () => {
    setAlertMsg('Clicked from About Us section');
    swal(alertMsg);
  };

  return (
    <div>
    <div className={styles['second']}>
      <div className={styles['video-container']} >
      
        <ReactPlayer
          url="https://www.youtube.com/watch?v=oyGL591b_0Q" 
         />
      </div>
      <div className={styles['text-container']}>
     
        <h1 
        style={{ 
         
        color: "red" }}>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic itaque et
          in vero molestias? Illo alias dolor laboriosam eum quo ut molestiae
          porro totam, consequatur vero minima, voluptas tempore, excepturi a.
          Ratione ab ad itaque quaerat temporibus dolore, voluptatem, quasi illo
          iusto ea quas praesentium aliquid, necessitatibus cumque nesciunt
          corporis.Lorem ipsum dolor sit amet. 
        </p>
        <Button variant="contained" onClick={handleLearnMoreClick}  sx={{ backgroundColor: "red" }}>Learn More</Button>
       
      </div>
      </div>
      <div div className={styles['third']}>
      <div className={styles['text-container1']}>
      <h1 style={{ color: "red" }}>Why Choose Us?</h1>
      
      <ul>
      <li>
        <h1>Consultations with Expert</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga id dignissimos hic, tempore, labore ipsa reiciendis, commodi debitis magni inventore corporis autem nihil omnis similique ullam rem perferendis! Quae molestiae iusto error dolorum veniam recusandae</p>
      </li>
      <li>
        <h1>Best Workout Facilities</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate pariatur aut possimus labore, tempora harum voluptas fugit vitae architecto sequi blanditiis animi, assumenda, magni inventore corporis autem nihil omnis similique ullam rem perferendis! Quae molestiae iusto error dolorum veniam recusandae</p>
      </li>
    </ul>
       
    </div>
      <div className={styles['video-container1']}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=gYfSXtK7PO4" 
         
        />
      </div>
      </div>
    </div>
  );
}