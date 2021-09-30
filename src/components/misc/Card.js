import React from 'react'

const Card = (props) => {
    return (
        <div className={"card"}>
            <div className={"card-header box-style"}>
                <img src={props.img} alt={"user profile"} />
            </div>
            <div className={"card-body"}>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default Card;