import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import OutlinedCard from '../components/card'
import Slideshow from '../components/slideshow.js'
import ScrollableTabsButtonVisible from '../components/badges'
import useWindowDimensions from '../components/windowDimensions'
import Script from 'next/script'

export default function Home() {

  const { width } = useWindowDimensions();
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    console.log('%c🎣 fishing-charter-demo%c.vercel.app\n%c~welcome to 30 line sport fishing thanks for inspecting the page! We use next JS and are looking for developers to contribute! ~', 'filter: invert(1); font-size: 28px; font-weight: bolder; font-family: "Rubik"; margin-top: 20px; margin-bottom: 8px;', 'color: #ff7755; font-size: 28px; font-weight: bolder; font-family: "Rubik"', 'color: #9bcdf1; font-size: 16px; font-family: "Rubik"; margin-bottom: 20px;');
    console.log(width);
    if (width < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [width]);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>30 Line Fishing</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@glennan_dev" />
        <meta name="twitter:site" content="@glennan_dev" />
        <meta name="twitter:title" content="30 Line Sports Fishing LLC" />
        <meta name="twitter:description" content="Once in a lifetime fishing charter" />
        <meta name="twitter:image" content="https://fishingCharterFinal.b-cdn.net/frankStriperCatch.png" />
        <meta name="description" content="Once in a liftime catch"/>
        <meta property="og:description" content="Once in a lifetime catch" />
        <meta property="og:title" content="30 Line Fishing" />
        <meta property="og:type" content="website" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          30 Line Sport Fishing
        </h1>
        <div className={styles.scrollBar}>
          <ScrollableTabsButtonVisible />
        </div>
    
        <div className={styles.grid}>
          <Link href="/about">
          <a className={styles.card} id={styles.card}>
            <h2>About &rarr;</h2>
            <p>Find in-depth information about what we do</p>
          </a>
          </Link>

          <Link href="/charter">
          <a href="" className={styles.card}>
            <h2>Charter Times &rarr;</h2>
            <p>Take a Look at our Calendar and schedule.</p>
          </a>
          </Link>

          <Link href="/contact">
          <a
            href=""
            className={styles.card}
          >
            <h2>Contact Us &rarr;</h2>
            <p>Give Us a Call any time. Click for more information</p>
          </a>
          </Link>
          <Link href="/pricing">
          <a
            href=""
            className={styles.card}
          >
            <h2>Pricing &rarr;</h2>
            <p>
              Click here to view Captain Frank's unbeatable prices!
            </p>
          </a>
          </Link>
          </div>
        <p className={styles.description}>
          Once in a lifetime fishing experience with Captain Frank Cicalese and crew{' '}
        </p>
      </main>
      
      <section className={`${styles.section} ${styles.backgroundVideo}`}>
        <div>
          {mobile ? (
            <video autoPlay loop playsInline defaultmuted="true" muted className={styles.video}>
              <source src="https://fishingCharterFinal.b-cdn.net/fishing1.MOV" type='video/mp4' />
            </video> 
            ) : (
              null
          )}
        </div>
        <div>
          {mobile != true ? (
            <video autoPlay loop playsInline defaultmuted="true" muted className={styles.video}>
              <source src="https://fishingCharterFinal.b-cdn.net/fishing.mp4" type='video/mp4' />
            </video> 
          ): null}
        </div>
      </section>

      <section className={styles.slideshow}>
        <div className={styles.slideshowWrapper}>
          <Slideshow />
        </div>
      </section>

      <section className={styles.slideshow}>
      <div id="fbkr-widget-672">
        <a href="https://fishingbooker.com">
          <img src="https://static.fishingbooker.com/public/img/widgets/fishingbooker-logo-dark.svg" alt="FishingBooker"/>
        </a>
      </div>
      <Script async defer type="text/javascript" src="https://fishingbooker.com/widget/get?charterId=26457&widget=review-snippets&unique=672&shadow=true" />
      </section>

      <section className={`${styles.section} ${styles.map}`}>
        <h1 className={styles.title}>
        </h1>
        <iframe className={styles.maps} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.6305799910137!2d-74.25961258460272!3d40.461312679359956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3cb0c224682fd%3A0x8e0f8c0933a94b47!2sRaritan%20Marina!5e0!3m2!1sen!2sus!4v1651594864857!5m2!1sen!2sus" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
      
      <section className={`${styles.section} ${styles.map}`}>
        <OutlinedCard />
      </section>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          30 Line Sport Fishing LLC{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}


