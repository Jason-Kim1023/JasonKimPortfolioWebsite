import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { useState, useEffect} from "react"
import astrobal from "../../assets/images/astrobal.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPython, faJava, faAws, faReact, faCss3, faLinux, faJs, faDocker, faGit, faNodeJs} from '@fortawesome/free-brands-svg-icons'
import { faC, faDatabase } from "@fortawesome/free-solid-svg-icons"

const About = () => {
    const [letterClass, setLetterClass] = useState("text-animate")

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 2500)
      }, [])

    return (
        <div className="container about-page">
            <img src = {astrobal} className = "astrobal" alt = "developer"></img>

            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                Hello, I'm Jason Kim, a Computer Science student at the University of Virginia, set to graduate in December 2024.  My passion for technology and innovation drives my work, and I am constantly seeking new challenges
                to develop my skills and make an impact in the world of software engineering.  Through my academic journey and professional experiences, I have had the opportunity to work on diverse projects that span both technical
                development and civic tech initiatives.  
                </p>
                <p>
                During my intership at Metlife, I contributed to the development of a financial reporting tool for the RIBS ledger system, handling millions of data points and speeding up project progress by 50%.  My work with Code for
                Charlootesville, gave me a chance to apply my skills to a civic tech project, helping  develop a mapping app that visualizes collision hotspots, which has real-world implications for public safety.  
                </p>
                <p>
                I also had the privelage of working as an open-sourcec developer with LAION-AI's Open Assistant, where I led development for authentication features and contributed to the core backend and frontend of a ChatGPT-inspired
                application.  In addition to my professional experiences, I have developed sever personal projects, including a UVA Tour Guide app that assisted incoming students with navigation, a Sign Language Detector powered by machine
                learning to help bridge communication gaps, and I am currently building SoulMate, a social media app that allows users to share their devotional moments with loved ones in an interactive and game-like way, combining my technical
                skills with my interest in personal connections and spirituality. 
                </p>
                <p>
                I am proficient in a variety of programming languages and technologies including Python, Java, React.js, SQL, Swift, and I have hands-on experience with frameworks like Django, Flask, and Springboot.  My technical curiosity extends
                to areas like AI, Machine Learning, and Cloud Technologies, and I am always eager to explore new tools and frameworks to expand my knowledge.  In the future, I hope to continue leveraging technology to solve real-world problems, 
                whether through software development, data analysis, or civic engagement. 
                </p>
                <p>
                Feel free to connect with me on Linkedin or Github to explore my projects and experiences!  Click on the icons in the bottom-left corner!
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon = {faAws} color = "#371a46" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon = {faDatabase} color = "#371a46" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon = {faDocker} color = "#371a46" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon = {faLinux} color = "#371a46" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon = {faGit} color = "#371a46" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon = {faNodeJs} color = "#371a46" />
                    </div>
                </div>
            </div>

            <div className="stage-cube-cont2">
                <div className="cubespinner2">
                    <div className="secondCubeFace1">
                        <FontAwesomeIcon icon = {faPython} color = "#371a46" />
                    </div>
                    <div className="secondCubeFace2">
                        <FontAwesomeIcon icon = {faJava} color = "#371a46" />
                    </div>
                    <div className="secondCubeFace3">
                        <FontAwesomeIcon icon = {faReact} color = "#371a46" />
                    </div>
                    <div className="secondCubeFace4">
                        <FontAwesomeIcon icon = {faC} color = "#371a46" />
                    </div>
                    <div className="secondCubeFace5">
                        <FontAwesomeIcon icon = {faCss3} color = "#371a46" />
                    </div>
                    <div className="secondCubeFace6">
                        <FontAwesomeIcon icon = {faJs} color = "#371a46" />
                    </div>
                </div>
            </div>
            
        </div>

        
    )
}

export default About