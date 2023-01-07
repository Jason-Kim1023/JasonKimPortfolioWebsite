import { Link } from "react-router-dom"
import "./index.scss"
import astro from "../../assets/images/astro.png"
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPython, faJava, faAws, faReact, faCss3, faLinux} from '@fortawesome/free-brands-svg-icons'


const Home = () => {
    const [letterClass, setLetterClass] = useState("text-animate")
    const nameArray = [" ", "J", "a", "s", "o", "n"]
    const jobArray = ["S", "o","f", "t","w","a","r","e"," ","E","n","g","i","n","e","e","r"]

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <div className = "container home-page">
            <div className = "text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br /> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    
                    <AnimatedLetters letterClass = {letterClass} strArray = {nameArray} idx = {15}/>
                    <img src = {astro} className = "astro" alt = "developer"></img>
                    <br/>
                    <AnimatedLetters letterClass = {letterClass} strArray = {jobArray} idx = {22}/>
                </h1>
                <h2>Backend Developer / Java and Python / Student at UVA</h2>
                <Link to = "/contact" className = "flat-button">CONTACT ME</Link>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon = {faPython} color = "#371a46" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon = {faJava} color = "#371a46" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon = {faReact} color = "#371a46" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon = {faLinux} color = "#371a46" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon = {faCss3} color = "#371a46" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon = {faAws} color = "#371a46" />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Home