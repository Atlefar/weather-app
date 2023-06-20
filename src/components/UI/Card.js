import classes from './Card.module.css';

const Card = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.icon__container}>
                    <div className={classes.weather__info}>
                        <span>{props.firstIcon}</span>
                        <h4>{props.firstItem}</h4>
                        <p>{props.firstTitle}</p>
                    </div>
                    <div className={classes.weather__info}>
                        <span>{props.secondIcon}</span>
                        <h4>{props.secondItem}</h4>
                        <p>{props.secondTitle}</p>
                    </div>
                    <div className={classes.weather__info}>
                        <span>{props.thirdIcon}</span>
                        <h4>{props.thirdItem}</h4>
                        <p>{props.thirdTitle}</p>
                    </div>
            </div>
        </div> 
    );     
};

export default Card;