import React from 'react';
import classes from './FooterSection.module.css';
import ExternalLink from './ExternalLink/ExternalLink';

const FooterSection = () => {
    return(
        <div className={classes.footerSection}>
                <div className ="col-lg-4 offset-lg-4">
                    <div className="d-flex flex-row justify-content-around">
                        <ExternalLink media="mdi mdi-linkedin"
                            link="https://www.linkedin.com/in/deep-kumar-singh-kushwah-91123011b/"
                        />
                        <ExternalLink media="mdi mdi-github"
                            link="https://github.com/DeepCodeWork"
                        />
                        <ExternalLink media="mdi mdi-instagram"
                            link="https://www.instagram.com/akadeepkumar/"
                        />
                        <ExternalLink media="mdi mdi-facebook"
                            link="https://www.facebook.com/kdeeep"
                        />
                    </div>
                </div>
                <div className = "mt-5">
                    <p>DEEP KUMAR SINGH <span style={{color:"#f91c6c"}}>&copy; 2020</span></p>
                </div>
        </div>
    );
}

export default FooterSection;