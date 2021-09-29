import React, { Component } from 'react'
import './Home.css';
import Modal from '../misc/Modal';
import rocketLogo from '../misc/rocket.svg';
import newsLetterLogo from '../misc/news-letter.svg';
import discordLogo from '../misc/discord.svg';
import arrowHeadLogo from '../misc/arrow-head.svg';
import cipherSchoolsLogo from '../misc/cipherschools-logo.svg';
import linkedinLogo from '../misc/linkedin.svg';
import githubLogo from '../misc/github.svg';
import facebookLogo from '../misc/facebook.svg';
import twitterLogo from '../misc/twitter.svg';
import instagramLogo from '../misc/instagram.svg';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {show: false};
    }

    showModal = () => {
        this.setState({show: true});
    }

    render() {

        return (
            <React.Fragment>

                <div className={"top-section"}>
                    <img src={cipherSchoolsLogo} alt={"Cipherschools logo"} />
                    <a href="/aboutus" className={"about-us-link or"}>Know More About Us</a>
                </div>

                <main className={"main-section"}>
                    <section className={"left-main"}>
                        <div className={"early-access"}>
                            <div className={"early-access-top"}>
                                <p className={"or"}>Get Early Access</p>
                                <img src={newsLetterLogo} alt="Newsletter logo"></img>
                            </div>
                            <div className={"early-access-email"}>
                                <form className={"early-access-form"} action={""}>
                                    <input className={"email-inp"} type="email" name="email" id="email" placeholder={"Email address"}/>
                                    <br />
                                    <button className={"btn notify-btn"} type="submit">Notify Me</button>
                                </form>
                            </div>
                        </div>

                        <div className={"discord-section"}>
                                <button className={"btn discord-btn"}>
                                    <div>
                                        <img src={discordLogo} alt={"Discord Logo"} />
                                    </div>
                                    <div className={"discord-text"}>
                                        <span className={"join-span"}>JOIN OUR</span>
                                        <span>Discord</span>
                                    </div>
                                </button>
                                <button className={"btn invitation-btn"} type="button" onClick={this.showModal}><div>Have Invitation
                                    <img src={arrowHeadLogo} alt={"Arrowhead logo"} /></div>
                                </button>
                        </div>
                    </section>

                    <section className={"right-main"}>
                        <div className={"lauch"}>
                            <h1 className={"lauch-heading"}>Launching <br/> Soon</h1>
                            <img className={"rocket-img"} src={rocketLogo} alt={"rocket svg"} />
                        </div>
                    </section>
                    
                    <section className={"follow-us"}>
                        <div className={"container"}>
                            <div className="follow-us-text">
                                <p>Follow Us</p>
                            </div>
                            <div className={"social-icons"}>
                                <img src={linkedinLogo} alt={"Linkedin logo"} />
                                <img src={githubLogo} alt={"Github logo"} />
                                <img src={facebookLogo} alt={"Facebook logo"} />
                                <img src={twitterLogo} alt={"Twitter logo"} />
                                <img src={instagramLogo} alt={"Instagram logo"} />
                            </div>
                        </div>
                    </section>
                </main>

                <Modal show={this.state.show} onClose={() => this.setState({show: false}) }/>
                
            </React.Fragment>
        )
    }
    
}

export default Home;