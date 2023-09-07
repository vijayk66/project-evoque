import React, { useState } from "react";
import Button from "../customComponents/Button";
import ModalForm from "../customComponents/ModalForm";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <React.Fragment>
      <div className="mt-5 mb-5 position-relative footer">
        <img
          className="w-100 h-100 rounded-2"
          src="./src/assets/footer.png"
          alt="footer-img"
        />
        <div
          className="pt-5 position-absolute top-50 start-50 translate-middle text-center text-white"
          id="content"
        >
          <h4 className="fw-lighter fs-1 mb-4 heading" id="letter-space">
            Join the <span className="fw-bold">family </span>today
          </h4>
          <p className="fs-4 mb-0 active">
            Take advantage of the various products to build your own customised
            trading strategies
          </p>
          <Button
            btnStyle={
              "px-3 py-2 bg-white text-primary rounded-2 fw-bold mt-5 mb-5 fs-4 border-0"
            }
            onClickFn={(e) => handleClick(e)}
          >
            Open new account
          </Button>
        </div>
      </div>
      {isOpen && (
        <ModalForm
          setIsOpen={setIsOpen}
          type={"Open Account"}
          btn={"Open Account"}
          user={"Old User ?"}
          forgot={"Terms & Conditions?"}
        ></ModalForm>
      )}
    </React.Fragment>
  );
}

export default Footer;
