import React from 'react';
import './ItemCelestialBody.scss'
import { Link } from 'react-router-dom'

export default function ItemCelestialBody({name, features, description, image}) {
    let id=name

    return (
        <div className='container-ItemCelestialBody'>
            <section className='seccion1-ItemCelestialBody' >
                <div >
                    <h1>{name}</h1>
                    <article>{features}</article>
                    <Link to={`/${id}`} className='button-standar-GlobalStyle'>Ver mapa</Link>
                </div>
                <img src={image} alt='img' className='image-celestialBody-ItemCelestialBody'/>
            </section>
            <section className='container-standar-GlobalStyle seccion2-ItemCelestialBody'>
                {description}
            </section>
        </div>
    );
}