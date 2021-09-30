import React, { Component } from 'react'
import './Aboutus.css'
import Card from '../misc/Card'
import Footer from '../misc/Footer';

class Aboutus extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={"watermark"}>
                </div>
                <div className={"intro"}>
                    <div className={"liner-container hr-center"}>
                        <p>Dedicated Teams.</p>
                        <p>To Enhance Your Learning.</p>
                    </div>
                    <div className={"about-container hr-center"}>
                        <div className={"about-us box-style"}>
                            <h2>About Us</h2>
                            <p>CipherSchools is a Potential Multi-Billion Dollar Organization founded in 2020 with a vision to be amongst the Top 10 Organizations in the world within the next 10 Years. An online education platform that provides different Programs across formal and informal education.
CipherSchools endows students to touch their full potential through relevant and pre-evaluated online programs delivered in the most engaging learning environment.
CipherSchools is driven by commitment, poised to revolutionize the learning platform.</p>
                        </div>
                    </div>
                </div>
                
                <div className={"meet-team hr-center"}>
                    <h2>Meet the believers of our journey so far!</h2>
                </div>

                <div className={"team-container hr-center"}>

                    <div className={"team-members"}>

                        <Card name={"Member Name"} img={"https://cdn-icons-png.flaticon.com/512/747/747376.png"} />

                        <Card name={"Member Name"} img={"https://cdn-icons-png.flaticon.com/512/747/747376.png"} />
                        
                        <Card name={"Member Name"} img={"https://cdn-icons-png.flaticon.com/512/747/747376.png"} />

                        <Card name={"Member Name"} img={"https://cdn-icons-png.flaticon.com/512/747/747376.png"} />

                        <Card name={"Member Name"} img={"https://cdn-icons-png.flaticon.com/512/747/747376.png"} />

                        <Card name={"Member Name"} img={"https://cdn-icons-png.flaticon.com/512/747/747376.png"} />
                        <Card name={"Member Name"} img={"https://cdn-icons-png.flaticon.com/512/747/747376.png"} />
                        <Card name={"Member Name"} img={"https://cdn-icons-png.flaticon.com/512/747/747376.png"} />
                        <Card name={"Member Name"} img={"https://cdn-icons-png.flaticon.com/512/747/747376.png"} />


                    </div>

                </div>

                <Footer />
                
            </React.Fragment>
        );
    };
}

export default Aboutus;