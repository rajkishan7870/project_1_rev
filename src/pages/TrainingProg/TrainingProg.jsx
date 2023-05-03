import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import styles from './TrainingProg.module.css';

export default function TrainingProg() {
   const [imageNum, setImageNum] = useState(1);
   const sliderImages = [
      { program : "YOGA",
         url: "https://img.freepik.com/free-photo/bodybuilder-shows-his-biceps_144627-793.jpg?w=2000",
      },
      {
         url: "https://www.byrdie.com/thmb/CAr44qpyrW8Wn2DuSid7PxWXQaM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Stocksy_txp35f99a2eKb6300_Medium_3271355-fb417f0d8a9a4f959edec6e0dfb83c34.jpg",
      },
      {
         url: "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/aerobics.jpg",
      },
      {
         url: "https://femina.wwmindia.com/content/2022/feb/fitness-011645018810.jpg",
      },
      
   ];
   return (
      <div>
         <h3>
            
           Training Program
         </h3>
         <SimpleImageSlider
            width={900}
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