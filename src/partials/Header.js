import React from 'react';
import './Header.css';

const Header = ({black}) =>{

    return (
        <div className='header header-mobile' style={{
            backgroundColor: black ? 'black' : 'transparent',
        }}>
            <div className='logo--app'>
                <img alt=""  href="/" src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" />
            </div>
            <div className="logo--app-mobile">
                <img alt=""  src="https://loodibee.com/wp-content/uploads/Netflix-N-Symbol-logo.png"/>
            </div>
            <div className='nav--app'>

            </div>
        </div>
    )
}

export default Header;