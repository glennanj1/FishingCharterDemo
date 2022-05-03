import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import OutlinedCard from '../components/card'
import Slideshow from '../components/slideshow.js'
import ScrollableTabsButtonVisible from '../components/badges'
import useWindowDimensions from '../components/windowDimensions'

export default function Home(props) {

  const { width } = useWindowDimensions();


  useEffect(() => {
    console.log('welcome to 30 line sport fishing thanks for inspecting the page! We use next JS and are looking for developers to contribute!')
  })
  
  return (
    <div className={styles.container}>
      <Head>
        <title>30 Line Fishing</title>
        <meta property="og:image" content="/metaFrank.png" />
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
        {/* <div className={styles.frankWrapper}>
          <Image alt="Frank" src={frank1} className={styles.frank} />
        </div> */}
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
          <Link href="/login">
          <a
            href=""
            className={styles.card}
          >
            <h2>Login &rarr;</h2>
            <p>
              Login to see your account, update payment details.
            </p>
          </a>
          </Link>
          </div>
        <p className={styles.description}>
          Once in a lifetime fishing experience with Captain Frank Cicalese and crew{' '}
        </p>
      </main>
      
      <section className={`${styles.section} ${styles.backgroundVideo}`}>
        {width <= 430 ? (
          <video autoPlay loop playsInline defaultMuted muted className={styles.video}>
            <source src="/fishing1.MOV" type='video/mp4' />
          </video>

        ) : null}

        {width > 430 ? (
          <video autoPlay loop playsInline defaultMuted muted className={styles.video}>
            <source src="/fishing2.mp4" type='video/mp4' />
          </video>
         ) : null}
        
          
      </section>

      <section className={styles.slideshow}>
        <div className={styles.slideshowWrapper}>
          <Slideshow />
        </div>
      </section>

      <section className={`${styles.section} ${styles.map}`}>
        <h1 className={styles.title}>
        </h1>
        <iframe className={styles.maps} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.6305799910137!2d-74.25961258460272!3d40.461312679359956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3cb0c224682fd%3A0x8e0f8c0933a94b47!2sRaritan%20Marina!5e0!3m2!1sen!2sus!4v1651594864857!5m2!1sen!2sus" allowFullScreen="true" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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


