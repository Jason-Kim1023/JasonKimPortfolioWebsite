import { Link } from "react-router-dom"
import "./index.scss"
import astro from "../../assets/images/astro.png"
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from "react"
import jason from "../../assets/images/Jason.png"
import cs from "../../assets/images/CS.png"
import uva from "../../assets/images/UVA.png"


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
            <img src = {jason} className = "jason" alt = "developer"></img>
            <img src = {uva} className = "uva" alt = "developer"></img>
            <img src = {cs} className = "cs" alt = "developer"></img>
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
                <h2>Software Developer | Cloud, Databases, AI, ML, etc. | Univ. of Virginia c/o 2024</h2>
                <Link to = "/contact" className = "flat-button">CONTACT ME</Link>
            </div>
        </div>
        
    )
}

export default Home