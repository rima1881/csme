import styles from '../styles/OurMission.module.css'

export default function Services(){
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>3D Printing Services</h1>
                <p className={styles.description}>
                    CSME is proud to offer a cheap 3D printing service for Concordia students. We also help students with the printability of their design and host 3D printing tutorials.
                    For 3D printing services please fill out the following form:
                    <br /><br />
                    https://airtable.com/shr5gpQO9UdjImKHm?fbclid=IwAR1WvxG55HZwJb-69fPWVaakkOk1T-MaHCUkxyPn-O_qQygR_N7VbX0VNuc
                    <br /><br />
                    For any questions, feel free to contact CSME’s VP Orders at orders.csme@ecaconcordia.ca!
                </p>
            </div>
        </div>
    )
}