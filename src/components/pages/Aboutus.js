import React, { Component } from 'react'
import './Aboutus.css'
import Card from './Card'
import Footer from './Footer';

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
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </div>
                    </div>
                </div>
                
                <div className={"hr-center"}>
                    <h2>Meet The Team</h2>
                </div>

                <div className={"team-container hr-center"}>

                    <div className={"team-members"}>

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