import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { useState, useEffect} from "react"
import astroPlanet from "../../assets/images/astroPlanet.png"


const Project = () => {
    const [letterClass, setLetterClass] = useState("text-animate")

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 2500)
      }, [])

    return (
        <div className="container about-page">
            <img src = {astroPlanet} className = "astroPlanet" alt = "developer"></img>
            <div className="top-left-header">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']} idx={15}/>
                </h1>
                
            </div> 
        </div>

        
    )
}

export default Project