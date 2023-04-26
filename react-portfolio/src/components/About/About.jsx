import React from 'react'
import './About.css'
import ME from '../../assets/me-about.png'
import {BsAward} from 'react-icons/bs'
import {TfiPackage} from 'react-icons/tfi'



const About = () => {
    return (
        
        <section id='About'>
           <h5>Get to Know</h5> 
           <h2>About Me</h2>

           <div className= "container about_container">
             <div className="about_me">
                <div className="about_me-image">
                    <img src={ME} alt="About Img"/>
                </div>
            </div>
            
            <div className="about_content">
                <div className="about_cards">
                <article className="about_card">
                    <BsAward className='about_icon'/>
                    <h5>Experience</h5>
                    <small>0 Years</small>
                </article>
                <article className="about_card">
                    <TfiPackage className='about_icon'/>
                    <h5>Projects</h5>
                    <small>60+ Projects Completed</small>
                </article>
                </div>
                <p>Hi there! My name is Tim Urbom and I'm a new Software Engineer. I recently made the switch from Graphic Design to pursue my passion for technology and software development. I'm constantly seeking to expand my knowledge and skills, and I find great joy in sharing what I've learned with others. I believe that learning is a lifelong journey, and I'm currently focused on deepening my understanding of Software Engineering and Web Development. In my free time, you can find me tinkering with new software tools, reading up on the latest tech trends, or hanging out with friends. Thanks for stopping by!</p>

                <a href="#Contact" className='btn btn-primary'>Contact Me</a>
            </div>
            </div>
        </section>
    )
    }

export default About