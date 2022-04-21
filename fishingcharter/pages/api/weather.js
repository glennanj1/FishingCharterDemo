export default async function handler(req, res) {

    const d = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=39.87259765209923&lon=-75.11993619566535&appid=${process.env.WEATHER_KEY}&units=imperial`)
    const weather = await d.json();
    res.status(200);
    res.send(weather);

  
}
