import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faMap,
} from "@fortawesome/free-solid-svg-icons";

const MyContact = () => {
  return (
    <div className="row" style={{ backgroundColor: "#fbfbfb" }}>
      <div className="col-md-4 text-md-right">
        <div className="px-2 py-md-5 py-3">
          <div className="font-weight-bold">CONTACT</div>
          Call me, maybe.
        </div>
      </div>
      <div className="col-md-8">
        <div className="px-2 py-md-5 py-3">
          <div className="d-flex flex-column  w-100">
            <div className="font-weight-bold">Phone</div>
            <div>
              <FontAwesomeIcon icon={faPhoneAlt} />
              <span className="ml-2">085761298781</span>
            </div>

            <div className="font-weight-bold mt-2">Email</div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="ml-2">darmawandoni6@gmail.com</span>
            </div>
            <div className="font-weight-bold mt-2">Alamat</div>
            <div>
              <FontAwesomeIcon icon={faMap} />
              <span className="ml-2">
                Jl. Gubeng Jaya II No.18A, Gubeng, Kec. Gubeng, Kota Surabaya,
                Jawa Timur 60281
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyContact;
