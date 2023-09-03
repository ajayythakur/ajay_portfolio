import React from 'react'
import Image from '../assests/Image.jpg'

const Portfolio = () => {
    return (
        <div className='container'>
            <div className='parent-flex'>
                <div className='intro'>
                    <img src={Image} alt='not-found' className='image' />
                    <h1>Ajay Rajput</h1>
                    <p>Full Stack Web Developer</p>
                    <p>I transform ideas into interactive digital experiences. With a passion for coding and a knack for problem-solving, I craft web solutions that blend creativity with functionality. Let's turn your vision into reality!</p>
                </div>
                <div className='details'>
                    <h1>PROJECTS</h1>
                    <p><a href='https://ajayythakur.github.io/DIGITAL-CLOCK'>Digital Clock</a></p>
                    <p><a href='https://loquacious-dieffenbachia-c02b43.netlify.app/'>Blog App </a></p>
                    <p><a href='https://ajayythakur.github.io/TO-DO-JS/'>ToDo App</a></p>
                    <p><a href='https://condingninja.netlify.app/'>Coding Ninja Clone</a></p>

                    {/* <h1>About</h1> */}
                    <h1>Contact</h1>
                    <p>Address :- <br />Rankoli <br />V.P.O - BAUND KALAN <br />Dirstrict - Charkhi Dadri <br />State - HARYANA</p>
                    <p>Contact Number :- 8059458377 <br /> Email - ajay1270panwar@gmail.com</p>
                </div>
            </div>

        </div>
    )
}

export default Portfolio