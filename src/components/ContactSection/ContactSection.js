import React from 'react';
import classes from './ContactSection.module.css';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import ContactForm from './ContactForm/ContactFrom';

const ContactSection = () => {
    return(
        <div className = "bg-dark">     
            <div className ="container">
                <div className = {classes.contactSection}>
                    <SectionTitle title="Contact"/>
                    <h6>Have a question or want to work together?</h6>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;