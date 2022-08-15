import style from '../styles/navbar.module.css'
import Search from './Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(){
    return(
        <nav className={style.navbar}>
            <picture>
                <img src='/images/blue_logo.png' className={style.logo} alt='asda'/>
            </picture>
            <ul className={style.list}>
                <li>Home</li>
                <li>Events</li>
                <li>Our Mission</li>
                <li>Projects</li>
                <li>3D Printing Services</li>
                <li>Sponsors</li>
                <li>Contact us</li>
            </ul>

            <span className={style.search}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
        </nav>
    )
}