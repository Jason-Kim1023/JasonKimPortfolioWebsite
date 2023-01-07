import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { useState, useEffect} from "react"
import jason from "../../assets/images/Jason.png"
import cs from "../../assets/images/CS.png"
import uva from "../../assets/images/UVA.png"
import astrobal from "../../assets/images/astrobal.png"
 

const About = () => {
    const [letterClass, setLetterClass] = useState("text-animate")

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 2500)
      }, [])

    return (
        <div className="container about-page">
            <img src = {jason} className = "jason" alt = "developer"></img>
            <img src = {uva} className = "uva" alt = "developer"></img>
            <img src = {cs} className = "cs" alt = "developer"></img>
            <img src = {astrobal} className = "astrobal" alt = "developer"></img>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p className="p1">
                I am currently a student studying Computer Science in the College of Arts and Sciences at the University of Virginia.  I have interned at local companies around the Northern Virginia Region like 
                Jinah Technologies and Prime Academy.  At these places, I focused on the topics of data analysis, search engine optimization, UX/UI, Python, Pandas, and Jupyer Notebook.
                </p>
                <p>
                However, my passion for technology is bigger than these internships and just my education.  I strive to constantly learn more about Computer Science and saw that I needed to do more on my own to actually
                obtain the knowledge that I sought after.  Thus, in my free time, I create projects to learn more about Tensorflow, Keras, SQL, React.js, CSS, C Language, etc.  Furthermore, I try to attend as many hackathons
                as possible to learn from these competitions and seek new opportunities.  
                </p>
                <p>
                As a second year at the University of Virginia, I am seeking to find an internship that can take me to a new professional level in my career.  I am confident that I have the capabilities to take that next step and 
                hope to be able to learn even more about this field. 
                </p>
            </div>
            
        </div>

        
    )
}

export default About