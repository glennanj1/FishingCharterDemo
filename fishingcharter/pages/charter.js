import React, {useEffect} from 'react'
import BasicDatePicker from '../components/calender'
import styles from '../styles/Charter.module.css'

function Charter() {
  return (
    <>
      <main className={styles.calendar}>
        <h1>Online Booking Coming Soon:</h1>
        <div className={styles.calendarContainer}>
          <BasicDatePicker />
        </div>
      </main>
    </>
  )
}

export default Charter



