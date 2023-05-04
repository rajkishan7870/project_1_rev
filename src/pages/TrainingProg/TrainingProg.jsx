import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import styles from './TrainingProg.module.css';

export default function TrainingProg() {
   const [imageNum, setImageNum] = useState(1);
   const sliderImages = [
      { 
         url: "https://files.nccih.nih.gov/yoga-gettyimages-1204500395-16-9.jpg",
      },
      {
         url: "https://www.healthkart.com/connect/wp-content/uploads/2021/07/bannerjpg.jpg",
      },
      {
         url: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/01/Aerobics_Female_Workout-1296x728-Header-1024x575.jpg?w=1155&h=1528",
      },
      {
         url: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/woman_stretching_at_home_on_floor-1296x728-header.jpg?w=1155&h=1528",
      },
      
   ];
   return (
      <div id="program" className={styles.sliderContainer}>
         <h3  style={{ 
         
            color: "red" }}>
            
           Training Programs
         </h3>
         <SimpleImageSlider
         
            width={1000}
            height={700}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={false} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            }}
               autoPlayDelay = {3}
         />
         
      </div>
   );
}