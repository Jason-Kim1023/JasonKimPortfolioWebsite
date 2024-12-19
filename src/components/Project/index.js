import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { useState, useEffect, useRef } from "react"
import rocketShip from "../../assets/images/rocketShip.png"
import saturn from "../../assets/images/saturn.png"
import metlife from "../../assets/images/metlife.png" 
import earth from "../../assets/images/earthImg.png" 
import cfc from "../../assets/images/cfc.png"

const Project = () => {
    const [letterClass, setLetterClass] = useState("text-animate")
    const rocketRef = useRef(null);  // Reference to the rocket image
    const lastMouseY = useRef(0);    // To track the previous mouse Y position

    // Set letter class after 2.5 seconds for animation
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 2500);
    }, []);

    // Handle mouse movement to adjust rocket position and flip it
    useEffect(() => {
        const handleMouseMove = (event) => {
            const rocket = rocketRef.current;
            if (rocket) {
                // Get the Y position of the mouse relative to the window height
                const mouseY = event.clientY;

                // Get the X position of the mouse relative to the window width
                const mouseX = event.clientX;

                // Update rocket's vertical position based on mouse Y
                rocket.style.transform = `translate(-50%, calc(-50% + ${mouseY - window.innerHeight / 2}px))`;

                // Check if the mouse is moving up or down
                if (mouseY < lastMouseY.current) {
                    // Mouse is moving up, apply flip effect
                    rocket.style.transform += " rotate(180deg)";
                } else {
                    // Mouse is moving down, reset to normal orientation
                    rocket.style.transform += " rotate(0deg)";
                }

                // Update the last mouse Y position for the next event
                lastMouseY.current = mouseY;
            }
        };

        // Add event listener for mouse movement
        window.addEventListener("mousemove", handleMouseMove);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="container about-page">
            {/* Metlife Image */}
            <img src={metlife} className="metlife" alt="Metlife" />
            <img src={cfc} className="cfc" alt="cfc" />
            
            <div className="top-left-header">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']} idx={15} />
                </h1>
            </div>

            {/* Rocket Image */}
            <img src={rocketShip} className="rocketShip" alt="rocket" ref={rocketRef} 
                 style={{ position: "absolute", top: "50%", right: "0", transform: "translate(-50%, -50%)", transition: "transform 0.1s ease", zIndex: 2 }} />
            <img src={saturn} className="saturn" style={{ position: "absolute", top: "50%", right: "68%", transform: "translateY(-50%)", zIndex: 1 }} alt="Saturn" />
            <img src={earth} className="earth" style={{ position: "absolute", top: "5%", right: "68%", transform: "translateY(-50%)", zIndex: 1 }} alt="Earth" />

        </div>
    );
};

export default Project;

