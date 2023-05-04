import React from 'react';
import styles from './Trainer.module.css';
import {Button} from '@mui/material/';
const trainers = [
  {
    name: 'Dr. Aldoraa',
    image: 'https://media.istockphoto.com/id/856797530/photo/portrait-of-a-beautiful-woman-at-the-gym.jpg?s=612x612&w=0&k=20&c=0wMa1MYxt6HHamjd66d5__XGAKbJFDFQyu9LCloRsYU=',
    role: 'Physiotherapist',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in tellus tincidunt, mattis justo eget, accumsan tellus.',
  },
  {
    name: 'Abir Kapoor',
    image: 'https://media.istockphoto.com/id/1018043738/photo/portrait-of-chinese-personal-trainer-in-gym.jpg?s=612x612&w=0&k=20&c=BpuYao5G3qr5SG7IUq15CESYHxunuvz66qfnDKJfX9s=',
    role: 'Fitness Coach',
    description: 'Suspendisse potenti. Sed commodo metus nec euismod cursus. Vestibulum ornare mi quis eros posuere, ac lacinia dolor laoreet.',
  },
  {
    name: 'Sejuti Das',
    image: 'https://media.istockphoto.com/id/1361355221/photo/happy-asian-athletic-woman-exercising-with-hand-weights-in-a-gym-and-looking-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=K8-dO0TGTt1RB2SyFbyUHxkoHim-XLr-oDiXVeiYLDc=',
    role: 'Fitness Coach',
    description: 'Nulla facilisi. Morbi accumsan, ex at finibus malesuada, nulla orci tincidunt lacus, a fermentum velit velit non magna.',
  },
  
];

export default function Team() {
  return (
    <section id='trainer' className={styles.teamSection}>
      <h3 className={styles.heading}>Meet Our Team</h3>
      <div className={styles.profilesContainer}>
        {trainers.map(member => (
          <div key={member.name} className={styles.teamProfile}>
            <img className={styles.profileImage} src={member.image} alt={`${member.name} profile`} />
            <h3 className={styles.profileName}>{member.name}</h3>
            <p className={styles.profileRole}>{member.role}</p>
            <p className={styles.profileDescription}>{member.description}</p>

            <Button variant="contained"  sx={{ backgroundColor: "red" }}>more details</Button>
       
          </div>
      
        ))}
      </div>
      <div >
      <Button variant="contained"  sx={{ backgroundColor: "red" }}>See Whole Team</Button>
      </div>
    </section>
  );
}

