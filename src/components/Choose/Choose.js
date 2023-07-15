import React from 'react';
import styles from './choose.module.css'
import sunset from '../../assets/sunset.png'
import {ReactComponent as Location} from "../../assets/icon1.svg";
import {ReactComponent as Altar} from "../../assets/icon2.svg";
import {ReactComponent as Chair} from "../../assets/icon3.svg";

const Choose = () => {
    return (
        <>
            <div id="listings" className={styles.allBlock}>
                <div className={styles.texts}>
                    <p>Our requirements</p>
                    <h1>How we choose our listings.</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</span>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.blockForImg}>
                        <img src={sunset} alt="sunset"/>
                    </div>
                    <div className={styles.locationTexts}>
                        <div className={styles.icon}>
                            <Location/>
                            <h4>Stellar locations</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className={styles.icon}>
                            <Altar/>
                            <h4>High quality builds</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className={styles.icon}>
                            <Chair/>
                            <h4>Expert interior design</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Choose;