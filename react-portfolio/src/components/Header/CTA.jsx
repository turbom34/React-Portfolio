import React from 'react'
import CV from '../../assets/Resume.pdf'

const CTA = () => {
    return (
        <div classname='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
    )
    }

export default CTA