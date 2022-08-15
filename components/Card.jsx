import styles from '../styles/card.module.css'

export default function Card(props){
    return(
        <div className={styles.container}>
            <picture>
                <img src={props.img} alt={props.alt} className={styles.img} />
            </picture>
            <span className={styles.heading}>Title : </span>
            <p className={styles.title}>{props.title}</p>
            <span className={styles.heading}>Description : </span>
            <p className={styles.description}>{props.description}</p>
            <button className={styles.btn}>
                more
            </button>
        </div>
    )
}