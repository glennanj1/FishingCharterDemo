import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const degree = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  ℉
  </Box>
);

const WeatherCard = props => {
  let fetchWeather = () => {
    console.log('fetching weather')
  
    fetch(`/api/weather`).then(r => r.json()).then(d => {
      setTemp(d.main.temp);
      setFeelsLike(d.main.feels_like);
      setWind(d.wind.speed)
      setWeather(d.weather[0].main)
    }).catch(e => console.log(e))
  }

  const [temp, setTemp] = useState('')
  const [feelsLike, setFeelsLike] = useState('')
  const [wind, setWind] = useState('')
  const [weather, setWeather] = useState('')


  useEffect(() => {
    fetchWeather();
  }, [])

  /* 
  {
    "coord": {
        "lon": -75.1199,
        "lat": 39.8726
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 62.96,
        "feels_like": 60.98,
        "temp_min": 60.19,
        "temp_max": 65.98,
        "pressure": 1028,
        "humidity": 43
    },
    "visibility": 10000,
    "wind": {
        "speed": 5.99,
        "deg": 147,
        "gust": 15.99
    },
    "clouds": {
        "all": 100
    },
    "dt": 1650567467,
    "sys": {
        "type": 2,
        "id": 2006410,
        "country": "US",
        "sunrise": 1650536032,
        "sunset": 1650584645
    },
    "timezone": -14400,
    "id": 4500951,
    "name": "Brooklawn",
    "cod": 200
}
*/
  return (
  <>
     <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
             Current Weather : {weather}
          </Typography>
          <Typography variant="h5" component="div">
             Temperature: {temp}{degree} | Feels Like {feelsLike}{degree} 
          </Typography>
          <br />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Current Winds
          </Typography>
          <Typography variant="h5" component="div">
           {wind}{' '}MPH 
          </Typography>
        </CardContent>
      </Card>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
  </>
  )
};

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275, maxWidth: '80vw' }}>
      <WeatherCard />
    </Box>
  );
}