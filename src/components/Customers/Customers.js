import React from 'react';
import styles from './customers.module.css'
import {ReactComponent as Star} from "../../assets/customers/star.svg";
import {ReactComponent as BorderStar} from "../../assets/customers/borderStar.svg";

const Customers = () => {
    return (
        <div className="container">
            <div className={styles.allBlock}>
                <div className={styles.texts}>
                    <p>Testimonials</p>
                    <h2>What our customers say.</h2>
                </div>
                <div className={styles.reviews}>
                    <div className={styles.revie}>
                        <div><Star/><Star/><Star/><Star/><Star/></div>
                        <h5>We found the perfect home!</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                        <span>Nate Davidsson</span>
                    </div>
                    <div className={styles.revie}>
                        <div><Star/><Star/><Star/><Star/><BorderStar/></div>
                        <h5>We're so happy with Estate.</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                        <span>Laura Paulie</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customers;