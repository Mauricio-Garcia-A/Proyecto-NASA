import BreadCrumbs from 'Components/BreadCrumbs/BreadCrumbs';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowIcon from '../../Components/Icons/ArrowIcons';
import useSEO from '../../Hooks/useSEO';
import './SelectedEvent.scss'

export default function SelectedEvent(props) {
    let { id, event} = useParams()
    const arrayBreadCrumb = [{name:id},{name:event}]

    let navigate = useNavigate();

    const tituloSeo = `${event} in  ${id}`
    const descripcionSeo = `Descripcion de los eventos sucedidos en ${id}`
    useSEO({title: tituloSeo, description: descripcionSeo})
    
    return (
        <div className='container-SelectedEvent'>
            <button onClick={()=>navigate(-1)} className='button-back-GlobalStyle'><ArrowIcon type='left' /></button>
            <BreadCrumbs categories={arrayBreadCrumb} />

            EVENTO SELECCIONADO
        </div>
    );
}