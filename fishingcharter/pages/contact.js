import React from 'react'
import styles from '../styles/Contact.module.css'

function Contact() {
  return (
    <>
      <main className={styles.main}>
        <h1>Call today to book a trip</h1>
        <h3>
          Captain Frank ·{" "}
          <a className={styles.phone} href="tel:+1-609-560-2123">
            (609)-560-2123
          </a>
        </h3>
        <h3>
          Captain Mike ·{" "}
          <a className={styles.phone} href="tel:+1-609-613-1027">
            (609)-613-1027
          </a>
        </h3>
      </main>
    </>
  );
}

export default Contact