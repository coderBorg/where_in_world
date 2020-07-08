import React from 'react'

export const CountryItem = ({country: {name, capital, population}}) => {
    return (
        <div>
            <p>Country item</p>
            <p>Name: {name}</p>
            <p>Capital: {capital}</p>
            <p>Pop: {population}</p>
        </div>
    );
}

export default CountryItem;