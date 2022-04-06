import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import frank1 from '../public/frank1.png'


export default function Home(props) {

 
  
  return (
    <div className={styles.container}>
      <Head>
        <title>30 Line Fishing</title>
        <meta name="description" content="Worlds Best Fisherman" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <Image alt="Frank" src={frank1} width={300} height={300} />
        <h1 className={styles.title}>
          30 Line Fishing
        </h1>

        <p className={styles.description}>
          Once in a lifetime fishing experience{' '}
        </p>

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
      </main>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Footer Information Here with logo?{' '}
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </a>
      </footer>
    </div>
  )
}
