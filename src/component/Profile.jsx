import React from "react";

const Profile = () => {
  return (
    <div className="row">
      <div className="col-4 text-right">
        <div className="px-2 py-5">
          <div className="font-weight-bold">PROFILES</div>
          Profileku.
        </div>
      </div>
      <div className="col">
        <div className="px-2 py-5">
          <div className="profile-title">
            Github <br />
          </div>
          <a
            href="https://github.com/darmawandoni6"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            https://github.com/darmawandoni6
          </a>

          <div className="profile-title mt-3">
            Linkedin <br />
          </div>
          <a
            href="https://www.linkedin.com/in/doni-darmawan/"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/doni-darmawan/
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
