import React from 'react';
import styles from './peoples.module.css'
import ava from '../../assets/peoples/ava.svg'
import ella from '../../assets/peoples/ella.svg'
import daryl from '../../assets/peoples/daryl.svg'
import david from '../../assets/peoples/david.svg'
import trevor from '../../assets/peoples/trevor.svg'
import amanda from '../../assets/peoples/amanda.svg'
import arrow  from '../../assets/store/arrow.svg'

const Peoples = () => {
    return (
        <>
            <div className="container">
                <div id="team" className={styles.allBlock}>
                    <div className={styles.blockText}>
                        <p>Our people</p>
                        <h3>Meet our team of dedicated and talented agents.</h3>
                        <span>Meet our team of dedicated and talented agents.</span>
                        <div className={styles.link}>
                            <a href="#">View our team</a>
                            <img src={arrow} alt="arrow"/>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.personsBlock}>
                            <img src={ava} alt="ava className={styles.personsBlock} "/>
                            <div className={styles.personDescription}>
                                <h3>Ava Orn</h3>
                                <p>Managing Broker</p>
                            </div>
                        </div>
                        <div className={styles.personsBlock}>
                            <img src={ella} alt="ella"/>
                            <div className={styles.personDescription}>
                                <h3>Ella Hessel</h3>
                                <p>Agent</p>
                            </div>
                        </div>
                        <div className={styles.personsBlock}>
                            <img src={daryl} alt="daryl"/>
                            <div className={styles.personDescription}>
                                <h3>Daryl Gislason</h3>
                                <p>REALTOR</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.personsBlock}>
                            <img src={david} alt="david"/>
                            <div className={styles.personDescription}>
                                <h3>David Sporer</h3>
                                <p>Agent</p>
                            </div>
                        </div>
                        <div className={styles.personsBlock}>
                            <img src={trevor} alt="trevor"/>
                            <div className={styles.personDescription}>
                                <h3>Trevor Torphy</h3>
                                <p>Agent</p>
                            </div>
                        </div>
                        <div className={styles.personsBlock}>
                            <img src={amanda} alt="amanda"/>
                            <div className={styles.personDescription}>
                                <h3>Amanda Giovanni</h3>
                                <p>REALTOR</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Peoples;