import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const NameProfile = () => {
  return (
    <div className="row">
      <div className="col-md-4 ">
        <div className="box-pict my-5" />
      </div>
      <div className="col-md-8 ">
        <div className="d-flex align-items-center h-100">
          <div className="w-100">
            <h1 className="mb-2">
              Doni <br />
              <span style={{ color: "#F8BB10" }}>Darmawan</span>
            </h1>
            <div className="d-flex w-100">
              <div
                className="sub-title ml-1 w-100"
                style={{ position: "relative" }}
              >
                Full Stack JavaScript
                <button
                  className="btn"
                  style={{ position: "absolute", top: 0, right: 0 }}
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1sbBhtmbfnMVlJTfMqmZGvB79GlRNO9Kg/view?usp=sharing",
                      "_blank"
                    );
                  }}
                >
                  <FontAwesomeIcon icon={faDownload} />
                  <span className="ml-2">CV</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameProfile;
