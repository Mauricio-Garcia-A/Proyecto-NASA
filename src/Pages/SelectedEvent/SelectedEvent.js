import BreadCrumbs from 'Components/BreadCrumbs/BreadCrumbs';
import { useSimulatorAPI } from 'Hooks/useSimulatorAPI';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowIcon from '../../Components/Icons/ArrowIcons';
import useSEO from '../../Hooks/useSEO';
import './SelectedEvent.scss'

export default function SelectedEvent(props) {
    let { id, event} = useParams()
    const arrayBreadCrumb = [{name:id},{name:event}]

    const {CelestialBodies}=useSimulatorAPI()
    let result = CelestialBodies.filter(CelestialBody=>CelestialBody.Name === id)

    let navigate = useNavigate();

    const tituloSeo = `${event} in  ${id}`
    const descripcionSeo = `Descripcion de los eventos sucedidos en ${id}`
    useSEO({title: tituloSeo, description: descripcionSeo})
    
    return (
        <div className='container-SelectedEvent'>
            <button onClick={()=>navigate(-1)} className='button-back-GlobalStyle'><ArrowIcon type='left' /></button>
            <BreadCrumbs categories={arrayBreadCrumb} />

            <section className='container-information-event-SelectedEvent container-standar-GlobalStyle' >
                <div className='conteiner-image-celestialBody-SelectedEvent'>
                    <img src={result[0].image} alt='img' className='image-celestialBody-SelectedEvent'/>
                </div>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
            </section>
        </div>
    );
}