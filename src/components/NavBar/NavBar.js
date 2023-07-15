import React, {useState} from 'react';
import style from './navbar.module.css'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const NavBar = () => {
    const [nav, setNav] = useState(false);

    return (
        <>

            <header className={style.header}>
                <div className='container'>
                    <div className={style.box}>
                        <div className={style.logo_image}>
                            <Logo/>
                            <h2>Estate</h2>
                        </div>
                        <ul
                            className={
                                nav ? [style.menu, style.active].join(' ') : [style.menu]
                            }
                        >
                            <li>
                                <a href='#listings'>Listings</a>
                            </li>
                            <li>
                                <a href='#newsroom'>Newsroom</a>
                            </li>
                            <li>
                                <a href='#contact'>Contact</a>
                            </li>
                            <li>
                                <a href='#team'>Our team</a>
                            </li>
                        </ul>
                        <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
                            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default NavBar;