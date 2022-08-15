import styles from '../styles/events.module.css'
import { useState , useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Card from './Card'

export default function Events(){
    return(
        <div className={styles.events}>
            <div className={styles.navbar}>
                <hr className={styles.line}/>
                    <span className={styles.title}>Events : </span>
                    <button className={styles.dropDown} >
                        Upcoming Events 
                        <FontAwesomeIcon icon={faCaretDown} className={styles.icon} />
                    </button>
                <hr className={styles.line} />
            </div>
            <div className={styles.container}>

                <Card 
                    img='/images/events/zero_waste_in_3d_printing.png'
                    title = "Zero waste in 3D printing"
                    description="Even though 3D printing has become a useful and popular technology for prototyping, the process also creates a lot of plastic waste. ♻️ This waste produced is not guaranteed to be …"
                />
                <Card 
                    img='/images/events/zero_waste_in_3d_printing.png'
                    title = "Zero waste in 3D printing"
                    description="Even though 3D printing has become a useful and popular technology for prototyping, the process also creates a lot of plastic waste. ♻️ This waste produced is not guaranteed to be …"
                />
                <Card 
                    img='/images/events/zero_waste_in_3d_printing.png'
                    title = "Zero waste in 3D printing"
                    description="Even though 3D printing has become a useful and popular technology for prototyping, the process also creates a lot of plastic waste. ♻️ This waste produced is not guaranteed to be …"
                />
                <Card
                    img='/images/events/zero_waste_in_3d_printing.png'
                    title = "Zero waste in 3D printing"
                    description="Even though 3D printing has become a useful and popular technology for prototyping, the process also creates a lot of plastic waste. ♻️ This waste produced is not guaranteed to be …"
                />
            </div>
        </div>
    )
}