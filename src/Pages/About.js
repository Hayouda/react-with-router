import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
    return (
        <div id="about">
            <h1>About Astroweb</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero facilis quasi non aliquid reprehenderit excepturi culpa accusantium id laborum soluta!
            </p>
            <button onClick={() => navigate('/contact')}>Contact us now</button>
        </div>
    )
}

export default About
