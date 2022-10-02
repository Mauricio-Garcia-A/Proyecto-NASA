import EarthImage from '../Images/earth.png'
import MoonImage from '../Images/moon.png'
import SunImage from '../Images/sun.png'

export function useSimulatorAPI() {
    
    const CelestialBodies = [
        {
            Name:'Earth',
            features:'caractristica 1, caractristica 2, caractristica 3, caractristica 4',
            description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)',
            image: EarthImage
        },
        {
            Name:'Moon',
            features:'caractristica 1, caractristica 2, caractristica 3, caractristica 4',
            description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)',
            image:MoonImage
        },
        {
            Name:'Sun',
            features:'caractristica 1, caractristica 2, caractristica 3, caractristica 4',
            description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)',
            image:SunImage
        },
    
   ]

   return {CelestialBodies}
}

