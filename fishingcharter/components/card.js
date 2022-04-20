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
      console.log(d)
      setWeatherInfo(d)
    }).catch(e => console.log(e))
  }

  const [weatherInfo, setWeatherInfo] = useState({})

  useEffect(() => {
    fetchWeather();
  }, [])

  return (
  <>
     <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
             Current Weather : 
          </Typography>
          <Typography variant="h5" component="div">
             Temperature: {degree} | Feels Like {degree} 
          </Typography>
          <br />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Current Winds
          </Typography>
          <Typography variant="h5" component="div">
            North  MPH 
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