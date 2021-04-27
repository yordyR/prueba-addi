import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import avatar from '../../assets/images/avatar.png'

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <Link to="/">
                    <img 
                        className="" 
                        src="https://co.addi.com/hs-fs/hubfs/logo-addi.png?width=100&name=logo-addi.png" 
                        alt="CRM - Addi"  />
                </Link>
            </div>
            <div className="header-avatar">
                
                <div className="header-avatar--logo">
                    <Link to="">
                        <img 
                        className="" 
                        src={avatar} 
                        alt="CRM - Addi"  />
                        <span>
                            Yordy Riascos G
                        </span>
                    </Link>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Header;