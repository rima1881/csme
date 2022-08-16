import styles from '../styles/OurMission.module.css'

export default function OurMission(){
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Our Mission</h1>
                <p className={styles.description}>
                    At CSME Concordia Student chapter, we aim to help engineering students make the most out of their student experience! By participating in projects, competitions, workshops and other events, we want to give our members the hands-on experience that will benefit their learnings and skills. We also offer affordable 3D printing services to students.
                    Through competitions, educational outreach and services, we aim for excellence in innovation, technology and sustainability. CSME Concordia makes continuous efforts to benefit all students at any level.
                </p>
            </div>
        </div>
    )
}