import classes from './SearchBar.module.css';
import searchIcon from '../../images/searchIcon.png'

const SearchBar = () => {
    return (
        <div className={classes.container}>
            <div className={classes.container__input}>
                <img 
                    src={searchIcon} 
                    className={classes.search__icon} 
                    alt="search icon" 
                    />
                <input 
                    className={classes.search__input} 
                    type="search" 
                    placeholder='Search'
                    />
            </div>
        </div>
    );
};

export default SearchBar;