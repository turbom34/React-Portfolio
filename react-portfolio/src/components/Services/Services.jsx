import React from 'react'
import './Services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
    return (
        <section id='Services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className='container services_container'>
                <article className='service'>
                    <div className='service_head'>
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Creating user flows and wireframes</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Designing responsive web and mobile interfaces</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Developing high-fidelity prototypes and mockups</p>
                        </li>
                    </ul>
                </article>
                <article className='service'>
                    <div className='service_head'>
                        <h3>Content Creation</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Developing content strategies</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Writing copy for web and social media</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Creating multimedia content (photos, videos, graphics)</p>
                        </li>
                    </ul>
                </article>
                <article className='service'>
                    <div className='service_head'>
                        <h3>Web Development</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Building responsive and accessible web applications</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Developing RESTful APIs with Node.js and Express</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Working with databases (SQL and NoSQL)</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Experience with Python Flask-SQLAlchemy</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services

