import React, { useState } from "react";
import Select from "react-select";

import modalBack from "./svgs/modalback.svg";
import users from "../../api/users";
import useApi from "../../hooks/useApi";
import Loading from "./Loading";

const modalStyle = {
  background: `url(${modalBack}),linear-gradient(105.01deg, rgba(255, 250, 245, 0.69) -4.1%, rgba(255, 228, 201, 0) 101.35%)`,
};

const colourStyles = {
  control: (base) => ({
    ...base,
    boxShadow: "none",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    console.log({ data, isDisabled, isFocused, isSelected });
    return {
      ...styles,
      backgroundColor: isFocused ? "#D48432" : null,
      color: isFocused ? "#ffffff" : null,
    };
  },
};

const EarlyAccessModal = (props) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    work: { value: "student", label: "Student" },
    email: "",
  });

  const worklist = [
    { value: "student", label: "Student" },
    { value: "working", label: "Working Professional" },
  ];

  const { loading, request: register } = useApi(users.register);

  if (props.show === false) {
    return null;
  }

  const handleChange = (selectedOption) => {
    setUserInfo((prev) => ({ ...prev, work: selectedOption }));
  };

  const onSubmit = async () => {
    const details = {
      name: userInfo.name,
      email: userInfo.email,
      work: userInfo.work.value,
    };
    const response = await register(details);
    if (response.ok) {
      props.alertCallback(true, "success");
    } else if (!response.ok && response.problem === "TIMEOUT_ERROR") {
      if (navigator.onLine) props.alertCallback(true, "slow internet");
      else props.alertCallback(true, "no internet");
    } else {
      props.alertCallback(true, "failure", response.problem);
    }
    setUserInfo((prev) => ({
      ...prev,
      name: "",
      work: { value: "student", label: "Student" },
      email: "",
    }));
    props.onClose();
    console.log("response: ", response);
  };

  return (
    <>
      {loading ? <Loading type="page" /> : null}
      <div className={"popup"} onClick={props.onClose}>
        <div className="popup-content">
          <div
            className="popup-content-2"
            style={modalStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-top-row">
              <span onClick={props.onClose}>
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ cursor: "pointer" }}
                >
                  <path
                    d="M12.3495 9.99858L19.5103 2.85447C19.8238 2.54089 20 2.11558 20 1.67211C20 1.22864 19.8238 0.80333 19.5103 0.489749C19.1967 0.176168 18.7714 0 18.3279 0C17.8844 0 17.4591 0.176168 17.1455 0.489749L10.0014 7.65052L2.85731 0.489749C2.54373 0.176168 2.11842 -3.30411e-09 1.67495 0C1.23148 3.30411e-09 0.806172 0.176168 0.492591 0.489749C0.17901 0.80333 0.00284199 1.22864 0.00284199 1.67211C0.00284199 2.11558 0.17901 2.54089 0.492591 2.85447L7.65336 9.99858L0.492591 17.1427C0.336506 17.2975 0.212618 17.4817 0.128073 17.6846C0.0435283 17.8875 0 18.1052 0 18.3251C0 18.5449 0.0435283 18.7626 0.128073 18.9655C0.212618 19.1684 0.336506 19.3526 0.492591 19.5074C0.647402 19.6635 0.831585 19.7874 1.03452 19.8719C1.23745 19.9565 1.45511 20 1.67495 20C1.89479 20 2.11245 19.9565 2.31538 19.8719C2.51832 19.7874 2.7025 19.6635 2.85731 19.5074L10.0014 12.3466L17.1455 19.5074C17.3003 19.6635 17.4845 19.7874 17.6875 19.8719C17.8904 19.9565 18.1081 20 18.3279 20C18.5477 20 18.7654 19.9565 18.9683 19.8719C19.1713 19.7874 19.3554 19.6635 19.5103 19.5074C19.6663 19.3526 19.7902 19.1684 19.8748 18.9655C19.9593 18.7626 20.0028 18.5449 20.0028 18.3251C20.0028 18.1052 19.9593 17.8875 19.8748 17.6846C19.7902 17.4817 19.6663 17.2975 19.5103 17.1427L12.3495 9.99858Z"
                    fill="rgba(34, 40, 49, 0.5)"
                  />
                </svg>
              </span>
            </div>
            <div className={"popup-form"}>
              <div className={"inputs-section"}>
                <input
                  className={"inp"}
                  type={"text"}
                  name="full_name"
                  value={userInfo.name}
                  placeholder={"Full Name"}
                  required="true"
                  onChange={(e) =>
                    setUserInfo((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
                <Select
                  className="role"
                  styles={colourStyles}
                  value={userInfo.work}
                  onChange={handleChange}
                  classNamePrefix="select"
                  options={worklist}
                />
              </div>
              <div className={"inputs-section"}>
                <input
                  className={"email inp"}
                  type="email"
                  name="email"
                  value={userInfo.email}
                  placeholder={"Email address"}
                  required="true"
                  onChange={(e) =>
                    setUserInfo((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>
              <div className={"hr-center"}>
                <button
                  className={
                    !userInfo.email || !userInfo.name
                      ? "btn access-btn btn-disabled"
                      : "btn access-btn"
                  }
                  type="submit"
                  onClick={onSubmit}
                  disabled={!userInfo.email || !userInfo.name}
                >
                  Request Early Access
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EarlyAccessModal;
