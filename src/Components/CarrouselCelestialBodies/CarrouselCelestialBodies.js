import React, {  useState } from 'react';
import SliderCelestialBody from './SliderCelestialBody';
import ArrowIcon from '../Icons/ArrowIcons'

import './CarrouselCelestialBodies.scss'
import { useSimulatorAPI } from '../../Hooks/useSimulatorAPI';

export default function CarrouselCelestialBodies(props) {
    const {CelestialBodies}=useSimulatorAPI()
    let sliders=CelestialBodies

    const [selectedIndex, setSelectedIndex]= useState(0)
    const [selectedSlider, setSelectedSlider]=useState(sliders[0])
    const [sliderBotonLeft, setSliderBotonLeft]=useState(sliders[0])
    const [sliderBotonRight, setSliderBotonRight]=useState(sliders[1])


    const seleccionarSiguienteSlider = (index, sliders, siguiente) =>{                        // ---- LOGICA PRICIPAL DEL CARRUSEL ----
        const condition = siguiente     ? (index < sliders.length -1)                         // Verifica siguiente slider existe (si me encuentro en limite superior de array)
                                        : (index > 0)                                        // Verifica anterior slider existe (si me encuentro en limite inferior de array)
        const nextIndex = siguiente     ? condition ? index + 1                              // Si SIGIENTE=true y CONDICION=true entonces avanso una posicion
                                                    : sliders.length - 1                       //0                                      // Si SIGIENTE=true y CONDICION=false (el indice esta en el limite superio del array) entonces se posiciona el indice en el principio
                                        : condition ? index - 1                              // Si SIGIENTE=false y CONDICION=true entonces retrocedo una posicion
                                                    : 0                                     //sliders.length - 1                      // Si SIGIENTE=false y CONDICION=false (el indice esta en el limite inferior del array) entonces se posiciona el indice en el final
        selectPosition(nextIndex, sliders)
    }

    const previous=()=> {
        seleccionarSiguienteSlider(selectedIndex, sliders, false)
        scrollPrositionIntoView(selectedIndex)                          
    }
    const next=()=> {
        seleccionarSiguienteSlider(selectedIndex, sliders, true)
        scrollPrositionIntoView(selectedIndex) 
    }
   
    const selectPosition=(index, sliders)=>{
        setSelectedIndex(index)
        setSelectedSlider(sliders[index])
        index===0   ?  setSliderBotonLeft(sliders[0])
                    :  setSliderBotonLeft(sliders[index-1])
        index===sliders.length-1    ?   setSliderBotonRight(sliders[sliders.length-1])
                                    :   setSliderBotonRight(sliders[index+1])

    }        

 


/* 
    useEffect(()=>{
        if (autoPlay){
            const intervalo = setInterval(()=>{
                seleccionarSiguienteImagen(selectedIndex, imagenes, true)
            }, temporizador)
            return ()=> clearInterval(intervalo)
        }
    })
*/
    const scrollPrositionIntoView = (id)=> {
        const element = document.getElementById("bsi"+id);
        element.scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"});
    }

    return (
        <div className='container-CarrouselCelestialBodies'>
            <div>
                <SliderCelestialBody name={selectedSlider.Name} features={selectedSlider.features} description={selectedSlider.description} image={selectedSlider.image}/>
            </div>

            <div className='container-controls-CarrouselCelestialBodies'>
                 <div className='container-controlsButtoms-CarrouselCelestialBodies'>
                    <button onClick={previous} className='button-arrow-left-CarrouselCelestialBodies'>
                        <ArrowIcon type='left' width='60px' className={selectedIndex===0 ?'icon-left-desactive' :'icon-left-active' }/>
                        <div className={selectedIndex===0 ?'celestialBodies-left-visibilityOff':'celestialBodies-left-visibilityOn'}>
                            <img src={sliderBotonLeft.image} alt='img' className='image-celestialbody-button-ItemCelestialBody'/>
                        </div>
                    </button>
                    <div className='container-selectionButtoms-CarrouselCelestialBodies'>
                        {sliders.map((slider, i)=>{
                                return(
                                <button 
                                    id={"bsi"+i} 
                                    key={"bsi"+i} 
                                    onClick={()=>selectPosition(i,sliders)} 
                                    className={(i===selectedIndex)?'button-selector-CarrouselCelestialBodies active':'button-selector-CarrouselCelestialBodies'} />)
                        })}
                    </div>
                    <button onClick={next} className='button-arrow-right-CarrouselCelestialBodies'>
                        <div className={selectedIndex===sliders.length-1 ?'celestialBodies-right-visibilityOff':'celestialBodies-right-visibilityOn'}>
                            <img src={sliderBotonRight.image} alt='img' className='image-celestialbody-button-ItemCelestialBody'/>
                        </div>
                        <ArrowIcon type='right' width='60px' className={selectedIndex===sliders.length-1 ?'icon-right-desactive' :'icon-right-active' }/>
                    </button>
                </div>
            </div>

        </div>
    );
}

