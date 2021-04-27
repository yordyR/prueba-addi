import React from 'react';
import {Link} from 'react-router-dom';
import './Breadcrumb.css'

const Breadcrumb = () => {
    return (
        <div className="crms-title row bg-white">
            <div className="crm-breadcrumb--right text-right">
                <ul className="breadcrumb bg-white float-right">
                    <li className="breadcrumb-item">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item active">
                        <Link to="/">
                            Cliente
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Breadcrumb;