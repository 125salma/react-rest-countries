import React from 'react';
import './Country.css';

const Country = (props) => {
    //console.log(props)
    const {name,flags,capital ,population,region} = props.country;
    return (
        <div className='country bg-primary-subtle'>
            <h2  className='text-success'>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Capital: {capital}</p>
            <p><small>Region: {region}</small></p>
            <h5>Population: {population}</h5>
        </div>
    );
};

export default Country;
// name = {country.name.common} 
// capital = {country.capital} 
// population={country.population}