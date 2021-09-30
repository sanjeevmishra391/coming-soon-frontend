import React from 'react'
import newsLetterLogo from '../misc/svgs/news-letter.svg';

const EarlyAccessModal = props => {
    if(props.show === false) {
        return null;
    }
    
    return (

        <div className={"popup"} onClick={props.onClose}>
            <div className={"popup-content"} onClick={e => e.stopPropagation()}>
                {/* <div className={"popup-form-section"}> */}
                    <form className={"popup-form"} action={""}>
                        <div className={"inputs-section"}>
                            <input className={"full-name inp"} type={"text"} name="full_name" placeholder={"Full Name"} required="true" />
                            <select className={"role inp"} name="role" >
                                <option value="" disabled selected>What suits you best</option>
                                <option value="student">Student</option>
                                <option value="working">Working</option>
                            </select>
                        </div>
                        <input className={"email inp"} type="email" name="email" placeholder={"Email address"} required="true" />
                        <br />
                        <div className={"hr-center"} >
                            <button className={"btn access-btn"} type="submit">Request Early Access</button>
                        </div>
                    </form>
                {/* </div> */}
            </div>
        </div>
    )
}

export default EarlyAccessModal;