import styles from '../styles/header.module.css'

export default function Header(){
    return(
        <div className={styles.container}>
            <div>
                <h1 className={styles.title}>CSME Concordia</h1>
                <p className={styles.subTitle}>Welcome to CSME, Concordia Chapter!!!</p>
            </div>
        </div>
    )
}