import React from 'react';
import { Link } from 'react-router-dom';
import {getEventsMoon} from 'Services/getEventsMoon';
import useSEO from '../../Hooks/useSEO';
import './Home.scss'


export default function Home(props) {
    useSEO({title:'HOME', description:'Bienvenidos AtroMap3D'})
    const evensMoon= getEventsMoon()
    
    return (
        <div className='container-Home'>
            <div className='container-standar-GlobalStyle'>
                <h1>BIENVENIDOS AstroMAP 3D Susesos</h1>
                <h3>Aplicacion web dedicada a la dibulgacion cientifica de informacion sobre los diferentes susesos, eventos o fenomenos naturales ocurridos en los cuerpos celestes de nuestro sistema solar</h3>
                <p>Aplicacion desarrollada en colaboracion co la UNLP, la NASA, y spaceApp</p>
                <br />
                <Link className='button-standar-GlobalStyle' to='/celestial-body-selection'>Seleccionar Cuerpo Celeste</Link>
            </div>
        </div>
    );
}