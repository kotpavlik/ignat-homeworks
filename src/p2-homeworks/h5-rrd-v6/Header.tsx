import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';
import style from './Header.module.css';
import cats_logo from './assets/10.png'


function Header() {
    const [menuActive, setMenuActiveMenu] = useState(true)

    const menuActiveHandler = () => {
        setMenuActiveMenu(!menuActive)
    }

    return (

       <div className = {style.all_header_wrapper}> {menuActive
            ? <div className={style.img_wrapper}>
                <img
                    onMouseEnter = {menuActiveHandler}
                    className={style.header_wrapper_nav_img} src={cats_logo} alt="no photo"/>
            </div>
            :
            <div onMouseLeave={menuActiveHandler} className={style.header_wrapper_nav_links}>
                <NavLink className={({isActive}) => (isActive ? style.activeLink : ' ')} to={PATH.PRE_JUNIOR}>PRE JUNIOR</NavLink>
                <NavLink className={({isActive}) => (isActive ? style.activeLink : ' ')}
                         to={PATH.JUNIOR}>JUNIOR</NavLink>
                <NavLink className={({isActive}) => (isActive ? style.activeLink : ' ')} to={PATH.JUNIOR_PLUS}>JUNIOR PLUS</NavLink>
            </div>}
       </div>
    )
}

export default Header
