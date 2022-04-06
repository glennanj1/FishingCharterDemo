import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Worlds Best Fisherman" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          30 Line Fishing
        </h1>

        <p className={styles.description}>
          Once in a lifetime fishing experience{' '}
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>About &rarr;</h2>
            <p>Find in-depth information about what we do</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Charter Times &rarr;</h2>
            <p>Take a Look at our Calendar and schedule.</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>Contact Us &rarr;</h2>
            <p>Give Us a Call at during buisness hours. We are open from x - x </p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>Login &rarr;</h2>
            <p>
              Login to see your account, update payment details and much more.
            </p>
          </a>
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
