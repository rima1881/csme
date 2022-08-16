import styles from '../styles/projects.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-solid-svg-icons'


export default function Projects(){

    const Arr = [
        {
            id : 1,
            title : 'The MilkCreator',
            description : 'The MilkCreator is designed to be an inexpensive but sturdy frame made from a milk crate, 3D printed parts and standard hardware. This allows for an overall lower production cost that still results in similar or better results than competing 3D printers. Using 3D printed parts makes the MilkCreator easy to assemble and also allows for customization. The simplicity of the assembly makes it easy for anyone to learn and enjoy 3D printing.',
            achievement : '2017- First Place Winner',
            isActive : true
        },
        {
            id : 2,
            title : 'The Polaris',
            description : '',
            achievement : '',
            isActive : false
        },
        {
            id : 3,
            title : 'The Orge',
            description : '',
            achievement : '',
            isActive : false
        }
        
    ]
    const [current , setCurrent ] = useState(Arr[0])

    const projectsList = Arr.map(project => 
        <li key={project.id} className={project.isActive ? styles.active : ''}>{project.title}</li> 
    )


    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <h4 className={styles.sectionName}>Our Projects</h4>
                <ul className={styles.list}>
                    {projectsList}
                    <li>See All Projects</li>
                </ul>
            </nav>
            <div className={styles.card}>
                <h1 className={styles.title}>{current.title}</h1>
                { current.achievement && <h4 className={styles.achievement}>{current.achievement}</h4>}
                <p className={styles.description}>{current.description}</p>
            </div>
            <div className={styles.footer}>
                <FontAwesomeIcon icon={faYoutube} />
            </div>
        </div>
    )
}