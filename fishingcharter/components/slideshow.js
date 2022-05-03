import React from 'react';
import { Zoom } from 'react-slideshow-image';
import Image from 'next/image'
import 'react-slideshow-image/dist/styles.css'
import styles from '../styles/Home.module.css'


const Slideshow = () => {
  const images = [
    'https://fishingCharterFinal.b-cdn.net/IMG_4413.JPEG',
    'https://fishingCharterFinal.b-cdn.net/IMG_4414.JPG',
    'https://fishingCharterFinal.b-cdn.net/IMG_4415.JPEG',
    'https://fishingCharterFinal.b-cdn.net/IMG_4416.JPEG',
    'https://fishingCharterFinal.b-cdn.net/IMG_4417.JPEG',
    'https://fishingCharterFinal.b-cdn.net/IMG_4418.JPEG',
    'https://fishingCharterFinal.b-cdn.net/IMG_4419.JPEG',
    'https://fishingCharterFinal.b-cdn.net/IMG_4420.JPEG',
    'https://fishingCharterFinal.b-cdn.net/IMG_4421.JPEG',
    'https://fishingCharterFinal.b-cdn.net/IMG_4422.JPEG',
    'https://fishingCharterFinal.b-cdn.net/IMG_4423.JPEG',
    'https://fishingCharterFinal.b-cdn.net/IMG_4424.JPEG',
    'https://fishingCharterFinal.b-cdn.net/IMG_4425.JPEG',
    'https://fishingCharterFinal.b-cdn.net/IMG_4426.JPEG',
    'https://fishingCharterFinal.b-cdn.net/IMG_4427.jpeg',
    'https://fishingCharterFinal.b-cdn.net/IMG_4428.JPEG',
    'https://fishingCharterFinal.b-cdn.net/IMG_4429.jpeg',
    'https://fishingCharterFinal.b-cdn.net/IMG_4430.jpeg',
    'https://fishingCharterFinal.b-cdn.net/IMG_4431.jpeg',
    'https://fishingCharterFinal.b-cdn.net/IMG_4432.JPEG',
    'https://fishingCharterFinal.b-cdn.net/IMG_4433.jpeg',
    'https://fishingCharterFinal.b-cdn.net/IMG_4434.JPEG',
    
  ];

  const zoomInProperties = {
    indicators: true,
    scale: 1.4,
  }

  return (
    <div>
      <Zoom {...zoomInProperties}
      >
        {images.map((each, index) => (
          <div key={index} className={styles.slideshowContainer} style={{width: "100vw", height: "100vh"}}>
            <Image 
                unoptimized
                height={900}
                width={680}
                objectPosition="center"
                src={each} 
                alt="Carousel" 
            />
          </div>
        ))}
      </Zoom>
    </div>
  )
}

export default Slideshow;