import { useState, useEffect, Fragment } from 'react';
import classes from './Main.module.css';
import Card from '../UI/Card';
import axios from 'axios';

const Main = () => {
    const [data, setData] = useState('');
    // Fetch weather data
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://api.met.no/weatherapi/locationforecast/2.0/complete.json?lat=59.21&lon=9.61');
            setData(response.data);
            console.log(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        
        fetchData();
      }, []);

    // add '%' after humidity
    const relativeHumidity = data?.properties?.timeseries?.[0]?.data?.instant?.details?.relative_humidity;
    const formattedHumidity = relativeHumidity ? `${relativeHumidity}%` : '';

    // add 'm/s' after wind
    const windSpeed = data?.properties?.timeseries?.[0]?.data?.instant?.details?.wind_speed;
    const formattedWindSpeed = windSpeed ? `${windSpeed} m/s` : '';

    // render weather data
    return (
        <div className={classes.container}>
            {data && data.properties.timeseries && (
        <Fragment>
          <h3>{data.properties.timeseries[0].data.instant.details.air_temperature}°</h3>
          <Card 
            firstItem={formattedHumidity}
            secondItem={formattedWindSpeed}
            thirdItem={data.properties.timeseries[0].data.instant.details.ultraviolet_index_clear_sky}
            firstIcon={'💧'}
            secondIcon={'↗'}
            thirdIcon={'🌞'}
            firstTitle={'Humidity'}
            secondTitle={'Wind'}
            thirdTitle={'UV-index'}
          />
          <Card />
        </Fragment>
      )}
        </div>
    );
};

export default Main;
