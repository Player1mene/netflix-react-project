import React from 'react';
import './Header.css';

export default ({black}) =>{

    return (
        <div className='header' style={{
            backgroundColor: black ? 'black' : 'transparent',
        }}>
            <div className='logo--app'>
                <img href="/" src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" />
            </div>
            <div className='nav--app'>

            </div>
        </div>
    )
}