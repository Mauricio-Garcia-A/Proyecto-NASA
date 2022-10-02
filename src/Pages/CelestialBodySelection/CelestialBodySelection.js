import React from 'react'
import {  useNavigate } from 'react-router-dom'
import useSEO from '../../Hooks/useSEO';
import { useSimulatorAPI } from '../../Hooks/useSimulatorAPI';
import CarrouselCelestialBodies from '../../Components/CarrouselCelestialBodies/CarrouselCelestialBodies';


import './CelestialBodySelection.scss'
import ArrowIcon from '../../Components/Icons/ArrowIcons';

export default function CelestialBodySelection(props) {
    let navigate = useNavigate();
    useSEO({title:'Celestial Body Selection', description:'Bienvenidos AtroMap3D'})

    const {CelestialBodies}=useSimulatorAPI()

    return (
        <div className='containe-CelestialBodySelection'>
            <button onClick={()=>navigate(-1)} className='button-back-GlobalStyle'><ArrowIcon type='left' /></button>

            <CarrouselCelestialBodies sliders={CelestialBodies}/>  
              
        </div>
    );
}

