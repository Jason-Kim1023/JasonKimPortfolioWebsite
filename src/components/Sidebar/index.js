import { Link, NavLink } from "react-router-dom"
import "./index.scss"
import JasonKimLogo from "../../assets/images/JasonKimLogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faHammer, faHome, faUser } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub, faInstagram, faDiscord} from "@fortawesome/free-brands-svg-icons"

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to = "/">
            <img src={JasonKimLogo} alt = "logo"/>
        </Link>
        <nav>
            <NavLink exact = "true" activeclassname = "active" to = "/">
                <FontAwesomeIcon icon={faHome} color = "#4d4d4e" />
            </NavLink>

            <NavLink exact = "true" activeclassname = "active" className = "about-link" to = "/about">
                <FontAwesomeIcon icon={faUser} color = "#4d4d4e" />
            </NavLink>

            <NavLink exact = "true" activeclassname = "active" className = "project-link" to = "/project">
                <FontAwesomeIcon icon={faHammer} color = "#4d4d4e" />
            </NavLink>

            <NavLink exact = "true" activeclassname = "active" className = "contact-link" to = "/contact">
                <FontAwesomeIcon icon={faEnvelope} color = "#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel = "noreferrer" href = "https://www.linkedin.com/in/jason-kim-0325a0177/">
                    <FontAwesomeIcon icon = {faLinkedin} color = "#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel = "noreferrer" href = "https://github.com/Jason-Kim1023">
                    <FontAwesomeIcon icon = {faGithub} color = "#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel = "noreferrer" href = "https://www.instagram.com/miknosaj_/">
                    <FontAwesomeIcon icon={faInstagram} color = "#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel = "noreferrer" href = "https://discord.com/users/Jason%20Kim#4391">
                    <FontAwesomeIcon icon={faDiscord} color = "#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar