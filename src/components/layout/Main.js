import { useState, useEffect, Fragment } from 'react';
import classes from './Main.module.css';
import Card from '../UI/Card';
import FetchWeatherData from '../weather/FetchWeatherData';

const images = require.context('../../images/weather', true);

const Main = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    FetchWeatherData(setData);
  }, []);

    // add '%' after humidity level
    const relativeHumidity = data?.properties?.timeseries?.[0]?.data?.instant?.details?.relative_humidity;
    const formattedHumidity = relativeHumidity ? `${relativeHumidity}%` : '';

    // add 'm/s' after wind level
    const windSpeed = data?.properties?.timeseries?.[0]?.data?.instant?.details?.wind_speed;
    const formattedWindSpeed = windSpeed ? `${windSpeed} m/s` : '';

    // Construct image path dynamically based on the symbol_code from API 
    const symbolCode = data?.properties?.timeseries?.[0]?.data?.next_1_hours?.summary?.symbol_code;
    const imagePath = symbolCode ? images(`./${symbolCode}.png`) : null;

    // render weather data
    return (
        <div className={classes.container}>
            {data && data?.properties?.timeseries && (
        <Fragment>
          {imagePath && <img src={imagePath} className={classes.current__weather__icon} alt="Weather" />}
          <h3>{data?.properties?.timeseries[0]?.data?.instant?.details?.air_temperature}°</h3>
          <Card 
            firstItem={formattedHumidity}
            secondItem={formattedWindSpeed}
            thirdItem={data?.properties?.timeseries[0]?.data?.instant?.details?.ultraviolet_index_clear_sky}
            firstIcon={'💧'}
            secondIcon={'↗'}
            thirdIcon={'🌞'}
            firstTitle={'Humidity'}
            secondTitle={'Wind'}
            thirdTitle={'UV-index'}
          />
        </Fragment>
      )}
        </div>
    );
};

export default Main;
