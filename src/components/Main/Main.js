import React from 'react';
import styles from './main.module.css'
import estate from '../../assets/logo.svg'
import {ReactComponent as Arrow} from "../../assets/arrow.svg";

const Main = () => {
    return (
        <>
            <div className={styles.backGroundImg}>
                <div className={styles.iconsBlock}>
                    <img src={estate} alt="estate"/>
                    <h2>Estate</h2>
                    <p>We're here to help you find a new home.</p>
                </div>
                <div
                    style={{
                        width: "64px", height: "64px", borderRadius: "50%", color: "#3a4443"
                    }}
                    className={styles.arrow}>
                    <a href="#footer"><Arrow/></a>
                </div>
            </div>
        </>
    );
};

export default Main;