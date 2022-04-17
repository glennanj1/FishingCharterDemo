import React, {useEffect, useState} from 'react'
import styles from '../styles/theme/About.module.css'

function About() {

  let fetchWeather = () => {
    console.log('fetching weather')
    //39.87259765209923, -75.11993619566535
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=39.87259765209923&lon=-75.11993619566535&appid={REMOVE CURLY BRACES AND ADD KEY HERE OPEN WEATHER API}`).then(r => r.json()).then(d => {
      console.log(d)
      setweather(d.weather[0].main)
    }).catch(e => console.log(e))
  }

  const [weather, setweather] = useState('')

  useEffect(() => {
    fetchWeather();
  })
  
  return (
    <div>
        <h2>Weather is {weather}</h2>
        <h1 className={styles.about}>About Us</h1>
    </div>
  )
}

export default About