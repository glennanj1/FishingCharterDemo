import React from 'react';
import { Zoom } from 'react-slideshow-image';
import Image from 'next/image'
import 'react-slideshow-image/dist/styles.css'
import styles from '../styles/Home.module.css'


const Slideshow = () => {
  const images = [
    '/frank1.png',
    '/frankStriperCatch.png',
    'https://fishingCharter.b-cdn.net/IMG_6191.JPG'
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
          <div key={index} className={styles.slideshowContainer} style={{width: "100vw"}}>
            <Image 
                unoptimized
                height={500}
                width={500}
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