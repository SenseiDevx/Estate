import React from 'react';
import styles from './store.module.css';
import BadSvg from '../../assets/store/bad.svg';
import BathRoomSvg from '../../assets/store/bathrooms.svg';
import RoomSvg from '../../assets/store/rooms.svg';
import ArrowSvg from '../../assets/store/arrow.svg';

import image1 from '../../assets/store/image1.png';
import image2 from '../../assets/store/image2.png';
import image3 from '../../assets/store/image3.png';
import image4 from '../../assets/store/image4.png';
import image5 from '../../assets/store/image5.png';
import image6 from '../../assets/store/image.png';

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6
];

const listings = [
    {type: 'House', name: 'California St.', beds: 16, bathrooms: 2, rooms: 11},
    {type: 'Villa', name: 'Welford Gardens', beds: 12, bathrooms: 3, rooms: 16},
    {type: 'House', name: 'The Grove', beds: 12, bathrooms: 2, rooms: 14},
    {type: 'Apartment', name: 'Wallace St.', beds: 10, bathrooms: 2, rooms: 8},
    {type: 'Apartment', name: 'Dwight Way', beds: 8, bathrooms: 1, rooms: 6},
    {type: 'House', name: 'Dwight Way', beds: 14, bathrooms: 3, rooms: 11}
];

const Store = () => {
    return (
        <>
            <div className="container">
                <div className={styles.allBlock}>
                    <div className={styles.texts}>
                        <p>Current listings</p>
                        <h2>What we have in store for you.</h2>
                        <span>
                            Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris
                            euismod elit et nisi ultrices, ut faucibus orci tincidunt.
                        </span>
                    </div>
                    <div className={styles.iconsBlock}>
                        {listings.map((listing, index) => (
                            <div className={styles.blockImages} key={index}>
                                <img className={styles.img} src={images[index]} alt={`image${index + 1}`}/>
                                <div className={styles.bottomBlock}>
                                    <p className={styles.p}>{listing.type}</p>
                                    <h4>{listing.name}</h4>
                                    <div className={styles.icons}>
                                        <div className={styles.icon}>
                                            <img src={BadSvg} alt="Bad"/>
                                            <p>{listing.beds} beds</p>
                                        </div>
                                        <div className={styles.icon}>
                                            <img src={BathRoomSvg} alt="Bathroom"/>
                                            <p>{listing.bathrooms} bathrooms</p>
                                        </div>
                                        <div className={styles.icon}>
                                            <img src={RoomSvg} alt="Room"/>
                                            <p>{listing.rooms} rooms</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.link}>
                        <a href="#">Show all listings</a>
                        <img src={ArrowSvg} alt="Arrow"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Store;
