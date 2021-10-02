import React, { useEffect, useState } from "react";
import Success from "./svgs/success.svg";
import Failure from "./svgs/failure.svg";
import NoInternet from "./svgs/no_internet.svg";
import SlowInternet from "./svgs/slow_internet.svg";
import SuccessBack from "./svgs/success_back.svg";
import FailureBack from "./svgs/failure_back.svg";

function StatusAlert({ status, onbtnClick, type }) {
  const [state, setState] = useState({
    back: "",
    icon: "",
    greet: "",
    subhead1: "",
    subhead2: "",
    btn: "",
    color: "",
  });

  useEffect(() => {
    switch (status) {
      case "success":
        setState({
          back: SuccessBack,
          icon: Success,
          greet: "Success!",
          subhead1: `Registered Successfully`,
          subhead2: `You will notified soon on email.`,
          btn: "Ok",
          color: "#2cda94",
        });
        break;
      case "failure":
        setState({
          back: FailureBack,
          icon: Failure,
          greet: "Failure!",
          subhead1:
            type === "CLIENT_ERROR"
              ? "already registered!"
              : `Something went wrong`,
          subhead2:
            type === "CLIENT_ERROR" ? "Tell your friends." : `Please try again`,
          btn: "Try Again",
          color: "#EC981B",
        });
        break;
      case "slow internet":
        setState({
          back: FailureBack,
          icon: SlowInternet,
          greet: "Slow Connection!",
          subhead1: `Internet Connection is Slow`,
          subhead2: `It will take little while`,
          btn: "retry",
          color: "#EC981B",
        });
        break;
      case "no internet":
        setState({
          back: FailureBack,
          icon: NoInternet,
          greet: "No Connection!",
          subhead1: `No internet connection`,
          subhead2: `See your connection`,
          btn: "retry",
          color: "#F62D2D",
        });
        break;
    }
  }, []);
  return (
    <>
      {state.greet !== "" ? (
        <div className="alrt-container">
          <div className="alrt-content">
            <img src={state.back} className="alrt-back" loading="lazy" />
            <div className="alrt-top-circle">
              <img
                src={state.icon}
                alt="top-icon"
                className="alrt-top-icon"
                loading="lazy"
              />
            </div>
            <div className="alrt-details-box">
              <div className="alrt-details-head" style={{ color: state.color }}>
                {state.greet}
              </div>
              <div className="alrt-details-subhead1">{state.subhead1}</div>
              <div className="alrt-details-subhead2">{state.subhead2}</div>
              <div
                className="alrt-details-btn"
                onClick={() => onbtnClick(state.btn)}
              >
                <span>{state.btn}</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default StatusAlert;
