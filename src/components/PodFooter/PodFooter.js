import React from 'react';
import styles from './podfooter.module.css'

const PodFooter = () => {
    return (
        <div className={styles.container}>
            <div id="contact" className={styles.allBlock}>
                <div className={styles.texts}>
                    <p>Seen enough?</p>
                    <h2>Get in touch with us today.</h2>
                    <h5>Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</h5>
                    <div className={styles.buttons}>
                        <button>Contact</button>
                        <button>See listings</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PodFooter;