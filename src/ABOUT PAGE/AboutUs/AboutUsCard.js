import React from 'react'
import './AboutUs.css'

const AboutusCard = (props) => {
    return (
        <>
            <div className='icon-container'>
                {props.icon}
            </div>
            <h3>{props.heading}</h3>
            <p>{props.text}</p>
        </>
    )
}

export default AboutusCard
