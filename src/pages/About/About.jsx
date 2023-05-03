import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import swal from 'sweetalert';
import Button from '@mui/material/Button';
import styles from './About.module.css';

export default function About() {
  const [alertMsg, setAlertMsg] = useState('');

  
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
          corporis.Lorem ipsum dolor sit amet. Aut beatae asperiores eum reprehenderit sequi sed dolores vero aut perferendis libero quo molestias modi vel dolor officiis. A error atque aut suscipit perspiciatis ex voluptatem adipisci et necessitatibus internos rem omnis atque eos consequatur laborum. Aut praesentium voluptas eum veniam assumenda At placeat ipsum. Qui similique voluptates est molestiae galisum id dignissimos sint sed dicta voluptatum quo quia iste et distinctio quaerat eos libero molestiae.

          Et voluptas quia ut quos accusantium cum quia rerum 33 deserunt aliquam eos ducimus obcaecati sed harum obcaecati. Nam pariatur voluptatem sit repellendus eaque vel repudiandae quisquam.
        </p>
        <Button variant="contained" onClick={handleLearnMoreClick}  sx={{ backgroundColor: "red" }}>Learn More</Button>
       
      </div>
      </div>
      <div div className={styles['third']}>
      <div className={styles['text-container1']}>
      <h1 style={{ color: "red" }}>Why Choose Us?</h1>
      <dl
       
      >
        <dt>
          <h1>Consultations with Expert</h1>
        </dt>
        <dd>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga id
          dignissimos hic, tempore, labore ipsa reiciendis, commodi debitis
          magni inventore corporis autem nihil omnis similique ullam rem
          perferendis! Quae molestiae iusto error dolorum veniam recusandae
        </dd>
        <dt>
          <h1>Best Workout Facilities</h1>
        </dt>
        <dd>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          pariatur aut possimus labore, tempora harum voluptas fugit vitae
          architecto sequi blanditiis animi, assumenda, magni inventore
          corporis autem nihil omnis similique ullam rem perferendis! Quae
          molestiae iusto error dolorum veniam recusandae
        </dd>
      </dl>
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

