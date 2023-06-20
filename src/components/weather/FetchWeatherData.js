import axios from 'axios';

const FetchWeatherData = async (setData) => {
  try {
    const response = await axios.get('https://api.met.no/weatherapi/locationforecast/2.0/complete.json?lat=59.21&lon=9.61');
    setData(response.data);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default FetchWeatherData;