import React from 'react';
import './Page.css'
import Breadcrumb from '../breadcrumb/Breadcrumb';

const Page = ({children}) =>{
    return (
        <div className="page-wrapper">
            <div className="content contenedor-full">
               <Breadcrumb />
               <div className="bloque">
                    {children}
               </div>
            </div>
        </div>
    )
}

export default Page;