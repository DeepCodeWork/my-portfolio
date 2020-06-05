import React from 'react';
import classes from './ContactForm.module.css';

const ContactForm = () => {
    return(
        <div>
            <form>
                    <div className={classes.contactForm}>
                        <div className = "form-group">
                            <input type="text" className="form-control" placeholder = "Name"/>
                        </div>

                        <div className = "form-group">
                            <input type="Email" className="form-control" placeholder = "Email"/>
                        </div>

                        <div className = "form-group">
                            <input type="text" className="form-control" placeholder = "Number"/>
                        </div>

                        <div className = "form-group">
                            <textarea type="text" className="form-control" rows="5" placeholder = "Your Message.."/>
                        </div>

                        <div className = "form-group float-right">
                            <button className="btn btn-outline-light">SUBMIT</button>
                        </div>
                    </div>
            </form>
        </div>
    );
}

export default ContactForm;