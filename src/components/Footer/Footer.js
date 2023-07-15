import React from 'react';
import styles from './footer.module.css'
import {ReactComponent as Logo} from "../../assets/footer/logo.svg";
import {ReactComponent as Linkedin} from "../../assets/footer/linkedin.svg";
import {ReactComponent as FaceBook} from "../../assets/footer/facebook.svg";
import {ReactComponent as Instagram} from "../../assets/footer/instagram.svg";
import {ReactComponent as Twitter} from "../../assets/footer/twitter.svg";

const Footer = () => {
    return (
        <>
            <div className={styles.container}>
                <div id="footer" className={styles.allBlock}>
                    <div className={styles.logo}>
                        <Logo/>
                    </div>
                    <div className={styles.mainList}>
                        <div className={styles.list}>
                            <h5>Pages</h5>
                            <ul>
                                <li>Start</li>
                                <li>Listings</li>
                                <li>Contact</li>
                                <li>Legal</li>
                            </ul>
                        </div>
                        <div className={styles.list}>
                            <h5>Company</h5>
                            <ul>
                                <li>About</li>
                                <li>Our team</li>
                                <li>Newsroom</li>
                            </ul>
                        </div>
                        <div className={styles.list}>
                            <h5>Utility</h5>
                            <ul>
                                <li>Instructions</li>
                                <li>Style guide</li>
                                <li>Licenses</li>
                                <li>Changelog</li>
                                <li>404</li>
                            </ul>
                        </div>
                        <div className={styles.contacts}>
                            <h5>Newsletter</h5>
                            <p>Subscribe to our (infrequent) newsletter where we share news about upcoming listings and
                                projects.</p>
                            <div className={styles.input}>
                                <input type="email" required placeholder="Email"/>
                                <button type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottomBlocks}>
                        <p className={styles.text}>© Estate, LLC. All rights reserved. Powered by Webflow.</p>
                        <div className={styles.logos}>
                            <a href="https://gitlab.com/sensei404" target={"_blank"}><Linkedin/></a>
                            <a href="https://github.com/sensei404" target={"_blank"}><FaceBook/></a>
                            <a href="https://www.instagram.com/sensei_devx/" target={"_blank"}><Instagram/></a>
                            <a href="https://mui.com/" target={"_blank"}><Twitter/></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer