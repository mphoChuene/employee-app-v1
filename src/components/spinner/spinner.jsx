import React from "react";
import spinnerImg from "../../assets/img/Loading_icon.gif";

let Spinner = () => {
  return (
    <>
      <div>
        <img
          src={spinnerImg}
          className="d-block m-auto"
          style={{ width: "200px" }}
        />
      </div>
    </>
  );
};

export default Spinner;
