import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import frank1 from '../public/frank1.png'
import OutlinedCard from '../components/card'

export default function Home(props) {
  useEffect(() => {
    fetch('/api/hello').then(r => r.json()).then(d => console.log(d)).catch(err => console.log(err))
  })
  
  return (
    <div className={styles.container}>
      <Head>
        <title>30 Line Fishing</title>
        <meta name="description" content="Worlds Best Fisherman" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          30 Line Sport Fishing
        </h1>
        <div className={styles.frankWrapper}>
          <Image alt="Frank" src={frank1} className={styles.frank} />
        </div>

        <p className={styles.description}>
          Once in a lifetime fishing experience{' '}
        </p>
      <section className={styles.section}>
        <div className={styles.grid}>
          <Link href="/about">
          <a className={styles.card}>
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
            <p>Give Us a Call at during buisness hours. We are open from x - x </p>
          </a>
          </Link>
          <Link href="/login">
          <a
            href=""
            className={styles.card}
          >
            <h2>Login &rarr;</h2>
            <p>
              Login to see your account, update payment details and much more.
            </p>
          </a>
          </Link>
        </div>
      </section>
      </main>
      <section className={styles.section}>
        <video autoPlay loop muted className={styles.video}>
          <source src="/fishing2.mp4" />
        </video>
      </section>
      <section className={styles.section}>
        <h1 className={styles.title}>
            
        </h1>
        <iframe className={styles.maps} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24386.336562058146!2d-74.04792776044921!3d40.180313100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c227e1a86b3223%3A0x9a043d400dd011bd!2sBelmar%20Manutti%20Marina!5e0!3m2!1sen!2sus!4v1649356283168!5m2!1sen!2sus" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
      <section className={styles.section}>
        <h1 className={styles.title}>
        </h1>
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


