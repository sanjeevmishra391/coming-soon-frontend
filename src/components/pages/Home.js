import React, { Component } from "react";
import "./Home.css";
// import InvitationModal from '../misc/InvitationModal';
import EarlyAccessModal from "../misc/EarlyAccessModal";
import rocketLogo from "../misc/svgs/rocket.svg";
import newsLetterLogo from "../misc/svgs/news-letter.svg";
import discordLogo from "../misc/svgs/discord.svg";
import arrowHeadLogo from "../misc/svgs/arrow-head.svg";
import cipherSchoolsLogo from "../misc/svgs/navbar_logo.png";
import linkedinLogo from "../misc/svgs/linkedin.svg";
import githubLogo from "../misc/svgs/github.svg";
import facebookLogo from "../misc/svgs/facebook.svg";
import twitterLogo from "../misc/svgs/twitter.svg";
import instagramLogo from "../misc/svgs/instagram.svg";
import youtubeLogo from "../misc/svgs/youtube.svg";
import StatusAlert from "../misc/Alert";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false, showAlert: false, status: "", type: "" };
  }

  showModal = () => {
    this.setState((prev) => ({ ...prev, show: true }));
  };

  render() {
    return (
      <React.Fragment>
        <div className={"top-section"}>
          <div className="nav-brand">
            <img
              src={cipherSchoolsLogo}
              className="nav-logo"
              alt={"Cipherschools logo"}
            />
            <span className="nav-title">Cipher Schools</span>
          </div>
          <a href="/aboutus" className={"about-us-link or"}>
            Know More About Us
          </a>
        </div>

        <main className={"main-section"}>
          <section className={"left-main"}>
            <div className={"early-access"}>
              <div className={"early-access-header"}>
                <img src={newsLetterLogo} alt="Newsletter logo"></img>
              </div>
              <div className={"early-access-body"}>
                <button
                  className={"btn early-access-btn"}
                  type="button"
                  onClick={this.showModal}
                >
                  <p>Get Early Access</p>
                </button>
              </div>
            </div>

            <div className={"discord-section"}>
              <a href="https://discord.gg/RjVvEzYP9n">
                <button className={"btn discord-btn"}>
                  <div className={"hr-center"}>
                    <div className={"discord-logo"}>
                      <img src={discordLogo} alt={"Discord Logo"} />
                    </div>
                    <div className={"discord-text"}>
                      <span className={"join-span"}>JOIN OUR</span>
                      <span>Discord</span>
                    </div>
                  </div>
                </button>
              </a>
              {/* invition button */}
              {/* <button className={"btn invitation-btn"} type="button" onClick={this.showModal}><div>Have Invitation
                                    <img src={arrowHeadLogo} alt={"Arrowhead logo"} /></div>
                                </button> */}
            </div>
          </section>

          <section className={"right-main"}>
            <div className={"lauch"}>
              <h1 className={"lauch-heading"}>
                Launching <br /> Soon
              </h1>
              <img
                className={"rocket-img"}
                src={rocketLogo}
                alt={"rocket svg"}
              />
            </div>
          </section>

          <section className={"follow-us"}>
            <div className="container">
              <div className="follow-us-text">
                <p>Follow us</p>
              </div>
              <div className="follow-line" />
              <div className={"social-icons"}>
                <a href={"https://www.linkedin.com/company/cipherschool"}>
                  <img src={linkedinLogo} alt={"Linkedin logo"} />
                </a>
                <a href={"https://github.com/Cipher-Schools"}>
                  <img src={githubLogo} alt={"Github logo"} />
                </a>
                <a href={"https://www.facebook.com/schoolsCipher/"}>
                  <img src={facebookLogo} alt={"Facebook logo"} />
                </a>
                <a href={"https://twitter.com/CipherSchools?s=09"}>
                  <img src={twitterLogo} alt={"Twitter logo"} />
                </a>
                <a href={"https://instagram.com/cipherschools/"}>
                  <img src={instagramLogo} alt={"Instagram logo"} />
                </a>
                <a
                  href={
                    "https://www.youtube.com/channel/UCIsxbXOBwVTWSQJ3AGjtnww"
                  }
                >
                  <img
                    src={youtubeLogo}
                    alt={"Youtube logo"}
                    className="youtube"
                  />
                </a>
              </div>
            </div>
          </section>
        </main>

        <EarlyAccessModal
          show={this.state.show}
          onClose={() => this.setState((prev) => ({ ...prev, show: false }))}
          alertCallback={(show, status, type) =>
            this.setState((prev) => ({
              ...prev,
              showAlert: show,
              status: status,
              type: type || "",
            }))
          }
        />
        {this.state.showAlert ? (
          <StatusAlert
            status={this.state.status}
            type={this.state.type}
            onbtnClick={() =>
              this.setState((prev) => ({ ...prev, showAlert: false }))
            }
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Home;
