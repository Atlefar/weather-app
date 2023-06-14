import React, { useState, useEffect } from 'react';
import classes from './Header.module.css';

const Header = () => {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const options = {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                timeZone: 'Europe/Oslo'
            };
            const formattedDate = now.toLocaleDateString('no-NO', options);
            setCurrentDate(formattedDate);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className={classes.heading}>
            <h1>Skien</h1>
            <h3>{currentDate}</h3>
        </div>
    );
};

export default Header;