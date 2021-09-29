import React from 'react'
import cipherSchoolsLogo from '../misc/cipherschools-logo.svg';
import linkedinLogo from '../misc/linkedin.svg';
import githubLogo from '../misc/github.svg';
import facebookLogo from '../misc/facebook.svg';
import twitterLogo from '../misc/twitter.svg';
import instagramLogo from '../misc/instagram.svg';

const Footer = () => {
    return (
        <footer>
            <div>
                <p>Connect With Us</p>
            </div>
            <div className={"cs-logo"}>
                <img src={cipherSchoolsLogo} alt={"cipherschools logo"} />
            </div>
            <div className={"social-icons"}>
                <img src={linkedinLogo} alt={"Linkedin logo"} />
                <img src={githubLogo} alt={"Github logo"} />
                <img src={facebookLogo} alt={"Facebook logo"} />
                <img src={twitterLogo} alt={"Twitter logo"} />
                <img src={instagramLogo} alt={"Instagram logo"} />
            </div>
        </footer>
    )
}

export default Footer