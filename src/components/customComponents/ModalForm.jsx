import React, { useState } from "react";

import Button from "./Button";
import PropTypes from "prop-types";

ModalForm.propTypes = {
  setIsOpen: PropTypes.func,
  type: PropTypes.string,
  btn: PropTypes.string,
  user: PropTypes.string,
  forgot: PropTypes.string,
};

function ModalForm({ setIsOpen, type, btn, user, forgot }) {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName !== "" && userPassword !== "") setIsOpen(false);
  };

  const handleCloseModal = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      <div className="overlay position-fixed top-0 start-0 w-100 h-100 opacity-50 bg-dark" onClick={handleCloseModal}></div>
      <div className="card modalForm position-fixed p-5 gap-4 border-0">
        <div className="card-header d-flex justify-content-between align-items-center rounded">
          <h5 className="modal-title fs-2">{type}</h5>
          <button className="btn-close" onClick={handleCloseModal}></button>
        </div>
        <div className="card-body">
          <form className="d-flex  flex-column gap-5">
            <input
              value={userName}
              className="form-control fs-3"
              type="text"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              value={userPassword}
              className="form-control fs-3"
              type="password"
              placeholder="Password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <Button
              btnStyle={"btn btn-success border-0 rounded-2 fs-3"}
              onClickFn={handleSubmit}
            >
              {btn}
            </Button>
          </form>
        </div>
        <div className="card-footer bg-white mt-2 text-center fs-4">
          <a href="#" className="card-link border-0 pe-3 border-end">
            {user}
          </a>

          <a href="#" className="card-link">
            {forgot}
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ModalForm;
