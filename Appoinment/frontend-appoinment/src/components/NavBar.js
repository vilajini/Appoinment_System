import React from 'react';
import {Link} from 'react-router-dom';
import css from '../styles/NavBar.module.css';

function NavBar() {
    return (
        <div className={css.body}>
            <Link to='/' className={css.logo}>Blood Donar</Link>
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button> */}
            <nav className={css.navigation}>
                <Link to='/'>Home</Link>
                <Link to='/register'>Register</Link> 
                <Link to='/login'>Login</Link>               
                <Link to='/appoinments'>Appoinment</Link>
                <Link to='/add-appoinment'>Add Appoinment</Link>
               
                {/* <button className ={css.btnLogin_popup}>Login</button> */}
            </nav>            
        </div>
    )
}

export default NavBar;