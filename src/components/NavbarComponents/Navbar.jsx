import Button from "../customComponents/Button";
import Navbrand from "./Navbrand";
import NavItems from "./NavItems";
import React from "react";
import ModalForm from "../customComponents/ModalForm";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  function handleClick(e, type) {
    e.preventDefault();

    if (type === "Login") {
      setIsLogin(true);
      setIsSignUp(false);
    }

    if (type === "SignUp") {
      setIsSignUp(true);
      setIsLogin(false);
    }

    setIsOpen(!isOpen);
  }

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid gap-lg-0 gap-3">
          <Navbrand />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarItems"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavItems />
          <form
            onSubmit={(e) => e.preventDefault()}
            className="d-flex justify-content-between col-lg-auto col-12"
          >
            <Button
              btnStyle={
                "btn btn-outline-primary me-4 fw-semibold rounded-1 px-md-5 px-lg-3 px-4 fs-4"
              }
              onClickFn={(e) => handleClick(e, "Login")}
            >
              Login
            </Button>
            <Button
              btnStyle={
                "btn btn-primary fw-semibold rounded-1 px-md-5 px-lg-2 px-4 fs-4"
              }
              onClickFn={(e) => handleClick(e, "SignUp")}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </nav>
      {isOpen && isLogin && (
        <ModalForm
          setIsOpen={setIsOpen}
          type={"Login"}
          btn={"Login Now"}
          user={"New User ?"}
          forgot={"Forgot Password ?"}
        ></ModalForm>
      )}

      {isOpen && isSignUp && (
        <ModalForm
          setIsOpen={setIsOpen}
          type={"SignUp"}
          btn={"SignUp Now"}
          user={"Old User ?"}
          forgot={"Terms & Conditions?"}
        ></ModalForm>
      )}
    </React.Fragment>
  );
}

export default Navbar;
