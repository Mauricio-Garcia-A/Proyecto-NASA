import ArrowIcon from 'Components/Icons/ArrowIcons';
import React, { useState } from 'react';
import './FilterSection.scss'

export default function FilterSection(props) {
    const [active, setActive] = useState(true)


    return (
        <div className='container-FilterSection container-standar-GlobalStyle'>
           <div  className='container-button-FilterSection' onClick={()=>setActive(!active)}>
                <ArrowIcon type='left' width='20px' className={active ?'arrow-FilterSection active-arrow':'arrow-FilterSection desactive-arrow'}/>
            </div>
           <section className={active ? 'continer-filter-FilterSection active-filter' : 'continer-filter-FilterSection desactive-filter'}>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
           </section>
        </div>
    );
}

