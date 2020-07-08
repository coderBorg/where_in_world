import React from 'react'
import CountryItem from './CountryItem'

const Countries = () => {

    // Temporary countries data
    let data = [{name: 'Norway', population: 1000, capital: 'Oslo'},
            {name: 'Canada', population: 2000, capital: 'Ottawa'}]

    return (
        <div>
            <h1>Countries 2</h1>
            <p>Countries here</p>
            {data.map(country => (<CountryItem 
                                    country={country} />))}
        </div>
    );
}

export default Countries;
