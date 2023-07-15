import React from 'react';
import styles from './estate.module.css'
import image1 from '../../assets/estate/IMAGE (7).png'
import image2 from '../../assets/estate/IMAGE (8).png'
import image3 from '../../assets/estate/IMAGE (9).png'
import arrow from '../../assets/store/arrow.svg'

const Estate = () => {
    return (
        <div className={styles.container}>
            <div id="newsroom" className={styles.allBlock}>
                <div className={styles.texts}>
                    <p className={styles.p}>Newsroom</p>
                    <h2>Writing from Estate.</h2>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.block}>
                        <img className={styles.img} src={image1} alt=""/>
                        <div className={styles.texts}>
                            <p>Press release</p>
                            <h5>Are condos still a good investment?</h5>
                            <span>August 12, 2021</span>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <img className={styles.img} src={image2} alt=""/>
                        <div className={styles.texts}>
                            <p>Announcement</p>
                            <h5>The history of great design</h5>
                            <span>August 12, 2021</span>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <img className={styles.img} src={image3} alt=""/>
                        <div className={styles.texts}>
                            <p>Company news</p>
                            <h5>Designers who changed everything</h5>
                            <span>August 12, 2021</span>
                        </div>
                    </div>
                </div>
                <div className={styles.link}>
                    <a href="#">Newsroom</a>
                    <img src={arrow} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Estate;