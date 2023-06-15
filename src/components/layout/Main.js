import { useState, useEffect } from 'react';
import classes from './Main.module.css';
import Card from '../UI/Card';
import axios from 'axios';

const Main = () => {
    const [data, setData] = useState('');
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=Skien`);
            setData(response.data);
            console.log(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        
        fetchData();
      }, []);

    return (
        <div className={classes.container}>
            <h2>{data.current?.weather_descriptions}</h2>
            <h3>{data.current?.temperature}°</h3>
            <Card 
                firstItem={data.current?.humidity}
                secondItem={data.current?.wind_speed}
                thirdItem={data.current?.uv_index}
                firstIcon={'💧'}
                secondIcon={'↗'}
                thirdIcon={'🌞'}
                firstTitle={'Humidity'}
                secondTitle={'Wind'}
                thirdTitle={'UV-index'}
                />
        </div>
    );
};

export default Main;