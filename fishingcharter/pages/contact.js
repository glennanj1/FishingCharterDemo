import React from 'react'
import styles from '../styles/Contact.module.css'

function Contact() {
  return (
    <>
      <main className={styles.main}>
        <h1>Contact</h1>
        <h2>
          Click to Call: <a className={styles.phone} href="tel:+1-609-560-2123">609-560-2123</a>
        </h2>
      </main>
    </>
  )
}

export default Contact