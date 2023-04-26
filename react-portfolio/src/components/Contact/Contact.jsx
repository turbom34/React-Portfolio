import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlinePhone } from 'react-icons/ai'

const Contact = () => {
    return (
        
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="coontainer contact_container">
                <div className="contact_option">
                    <article className="contact_option">
                        <MdOutlineEmail/>
                        <h4>Email</h4>
                        <h5>weberk76@gmail.com</h5>
                        <a href="mailto:weberk76@gmail.com">Send a Message</a>
                    </article>
                    <article className="contact_option">
                        <AiOutlinePhone/>
                        <h4>Phone Number</h4>
                        <h5>631-388-1710</h5>
                    </article>
            </div>
            </div>
        </section>
    )
    }

export default Contact