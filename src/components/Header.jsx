import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../assets/styles/components/Header.scss';

import gravatar from '../utils/gravatar';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import usericon from '../assets/static/user-icon.png';

const Header = ( props ) => {

    const { user } = props;
    console.log(user.email);
    const hasUser = Object.keys(user).length > 0;
    
    return (

        <header className="header">
            <Link to="/">
                <img className="header__img" src={logo} alt="Platzi Video" />
            </Link>
            <div className="header__menu">
            <div className="header__menu--profile">
                { hasUser ?
                    <img src={gravatar(user.email)} alt={user.email} />
                    :
                    <img src={usericon} alt="" />
                }
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><Link to="/login">Cerrar Sesión</Link></li>
            </ul>
            </div>
        </header>
        
    );
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

// export default Header;
export default connect(mapStateToProps, null)(Header);