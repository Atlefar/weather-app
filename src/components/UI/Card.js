import classes from './Card.module.css';

const Card = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.icon__container}>
                    <div className={classes.weather__info}>
                        <span>💧</span>
                        <h4>{props.humidity}%</h4>
                        <p>Humidity</p>
                    </div>
                    <div className={classes.weather__info}>
                        <span>↗</span>
                        <h4>{props.wind} m/s</h4>
                        <p>Wind</p>
                    </div>
                    <div className={classes.weather__info}>
                        <span>🌞</span>
                        <p>{props.uvIndex}</p>
                        <h4>UV-index</h4>
                    </div>
            </div>
        </div> 
    );     
};

export default Card;