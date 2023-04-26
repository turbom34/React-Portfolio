import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/Portfolio project.png'

const Portfolio = () => {
    return (
        <section id='Portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            
            <div className='container portfolio_container'>
                <article className='portfolio_item'>
                    <div className='portfolio_item-image'>
                        <a href='https://www.youtube.com/watch?v=abc123' target='_blank' rel='noopener noreferrer'>
                            <img src={IMG1} alt='' />
                        </a>
                    </div>
                    <h3>Backend Jinja Templating NBA Blog w/ Live Scores</h3>
                    <div className='portfolio_item-cta'>
                        <a href='https://github.com/turbom34/Jinja-Templating-Project' className='btn' target='_blank'>Github</a>
                        <a href='https://www.youtube.com/watch?v=abc123' className='btn' target='_blank' rel='noopener noreferrer'>Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio

