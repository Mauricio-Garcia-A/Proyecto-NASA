import React from 'react';
//Dependencia de Estilos
import './BreadCrumbs.scss';

/* Componente BREADCRUMBS 
    Este componente recibe  por props un Array de objetos con un formato espesifico {id:,name:} 
    y arma la estructura para mostrar los atrivutos "name" con un formato de BreadCrumbs
*/
export default function BreadCrumbs({categories}){ 
    let breadcrumbs =[];
    breadcrumbs =categories.map((crumb) => {
      return <li key={crumb.id}> {crumb.name}  </li>;
     });
  
  return (
    <div className='contenedorBreadCrumb'>
        <ul className="breadcrumb">
            {breadcrumbs}
        </ul>
    </div>
  );
};



