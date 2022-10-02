import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ArrowIcon from '../../Components/Icons/ArrowIcons';
import useSEO from '../../Hooks/useSEO';
import { useSimulatorAPI } from '../../Hooks/useSimulatorAPI';
import './GlobalmapOfEvents.scss'
import SwitchControlsMap from './SwitchControlsMap';
import FilterSection from '../../Components/FilterSection/FilterSection'
import BreadCrumbs from 'Components/BreadCrumbs/BreadCrumbs';

export default function GlobemapOfEvents(props) {
    let { id } = useParams()
    const arrayBreadCrumb = [{name:id}]

    const {CelestialBodies}=useSimulatorAPI()
    let result = CelestialBodies.filter(CelestialBody=>CelestialBody.Name === id)


    let event = "moonquake-232"
    let navigate = useNavigate();

    const tituloSeo = `Map 3D of ${id}`
    const descripcionSeo = `Descripcion de los eventos sucedidos en ${id}`
    useSEO({title: tituloSeo, description: descripcionSeo})

    return (
        <div className='container-GlobemapOfEvents'>
           <button onClick={()=>navigate(-1)} className='button-back-GlobalStyle'><ArrowIcon type='left' /></button>
            <BreadCrumbs categories={arrayBreadCrumb} />
            <div className='controls-zoom-GlobemapOfEvents container-standar-GlobalStyle'>
                    <button>+</button>
                        <Box sx={{ height: 300 }}>
                            <Slider
                                sx={{
                                '& input[type="range"]': {
                                    WebkitAppearance: 'slider-vertical',
                                },
                                }}
                                orientation="vertical"
                                defaultValue={10}
                                aria-label="Temperature"
                                valueLabelDisplay="auto"
                            />
                        </Box>
                    <button>-</button>
            </div>
            <div >
                <div className='container-standar-GlobalStyle controls-arraws-map-GlobemapOfEvents '>
                        <button className='button-arrow-control-top'><ArrowIcon type='left' width='25px' /></button>
                        <button className='button-arrow-control-right'><ArrowIcon type='right' width='25px' /></button>
                        <button className='button-arrow-control-booton'><ArrowIcon type='left'width='25px' /></button>
                        <button className='button-arrow-control-left'><ArrowIcon type='left'width='25px' /></button>
                </div>
                {/*
               <div className='select-controls-GlobemapOfEvents'>
                    <SwitchControlsMap />
                </div> 
                */}               
            </div>
     
            <div className='timeline-GlobemapOfEvents'>

            </div>
            <img src={result[0].image} alt='img' className='image-celestialBody-GlobemapOfEvents'/>

            <br></br>
            <Link to={`/${id}/${event}`} className='button-standar-GlobalStyle'>ver mas informacion</Link>
            <FilterSection/>
        </div>
    );
}