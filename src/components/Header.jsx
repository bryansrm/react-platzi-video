import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';

import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import usericon from '../assets/static/user-icon.png';

import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';

const Header = ( props ) => {

    const { user, isLogin, isRegister } = props;
    console.log(user.email);
    const hasUser = Object.keys(user).length > 0;

    const handleLogout = () => {
        props.logoutRequest({});
    }

    const headerClass = classNames('header', {
        isLogin,
        isRegister
    })
    
    return (

        <header className={headerClass}>
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
                {hasUser ?
                    <li><a href="/">{user.email}</a></li>
                    :
                    null
                }
                {hasUser ? 
                    <li><a href="#logout" onClick={handleLogout}>Cerrar sesión</a></li>
                    :
                    <li><Link to="/login">Iniciar sesión</Link></li>

                }
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

const mapDispatchToProps = {
    logoutRequest
}

// export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Header);