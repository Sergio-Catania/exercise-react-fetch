import React from 'react';
import './CountryCard.css'


const CountryCard = ({countryName, flagUrl, population, capital}) => {

    return(
        <div classname="countryCard">
            <h2>{countryName}</h2>
            <img src={flagUrl} alt={`Flag of ${countryName}`} className="flag-image" />
            <p>Population: {population} </p>
            <p> Capital: {capital} </p>
        </div>    

        );

};
export default CountryCard;