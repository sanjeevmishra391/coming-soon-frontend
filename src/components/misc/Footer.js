import React from 'react'
import cipherSchoolsLogo from '../misc/svgs/cipherschools-logo.svg';
import linkedinLogo from '../misc/svgs/linkedin.svg';
import githubLogo from '../misc/svgs/github.svg';
import facebookLogo from '../misc/svgs/facebook.svg';
import twitterLogo from '../misc/svgs/twitter.svg';
import instagramLogo from '../misc/svgs/instagram.svg';

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
                <a href={"https://www.linkedin.com/company/cipherschool"} >
                    <img src={linkedinLogo} alt={"Linkedin logo"} />
                </a>
                <a href={""} >
                    <img src={githubLogo} alt={"Github logo"} />
                </a>
                <a href={"https://www.facebook.com/schoolsCipher/"} >
                    <img src={facebookLogo} alt={"Facebook logo"} />
                </a>
                <a href={"https://twitter.com/CipherSchools?s=09"} >
                    <img src={twitterLogo} alt={"Twitter logo"} />
                </a>
                <a href={"https://instagram.com/cipherschools/"} >
                    <img src={instagramLogo} alt={"Instagram logo"} />
                </a>
            </div>
        </footer>
    )
}

export default Footer