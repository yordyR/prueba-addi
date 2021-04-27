import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

  
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-menu">

                <ul>
                    <li>
                        <NavLink
                            to={{
                                pathname: '/',
                                search:'?ordenar=nombre',
                                hash: '#hash-otro',
                                state:{
                                name: 'pruebaname',
                                age: 25
                                }
                            }}
                        
                        >
                            <span>
                                Home 
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/clientes" 
                        >
                            <span>
                                Clientes Potenciales
                            </span>
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/calificaciones" >
                            <span>
                                Sistema de calificaciones     
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/prospectos" >
                            <span>
                                Prospectos de venta     
                            </span>
                        </NavLink>
                    </li>

                   

                   
                </ul>
            </div>

        </div>
    )
}


export default Sidebar;