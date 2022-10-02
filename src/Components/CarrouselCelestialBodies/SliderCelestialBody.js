import React from 'react';
import ItemCelestialBody from '../ItemCelestialBody/ItemCelestialBody';

export default function SliderCelestialBody({name, features, description, image}) {

    return (
        <div className='sliderImagen'>
            <ItemCelestialBody name={name} features={features} description={description} image={image}/>
        </div>
    );
}