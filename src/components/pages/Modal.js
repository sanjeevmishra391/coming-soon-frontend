import React from 'react'
import newsLetterLogo from '../misc/news-letter.svg';

const Modal = props => {
    if(props.show === false) {
        return null;
    }
    
    return (

        <div className={"popup"} onClick={props.onClose}>
            <div className={"popup-content"} onClick={e => e.stopPropagation()}>
                <div className={"popup-top"}>
                    <p className={"or"}>Enter Invitation Link/Code</p>
                    <img src={newsLetterLogo} alt="Newsletter logo"></img>
                </div>
                <div className={"popup-email"}>
                    <form className={"popup-form"} action={""}>
                        <input className={"email-inp"} type="email" name="email" id="email" placeholder={"Invitation Link/Code"}/>
                        <br />
                        <div className={"center-align"} >
                            <button className={"btn access-btn"} type="submit">Access Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;