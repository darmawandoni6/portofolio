import React, { Fragment } from "react";

const Progress = ({ name, progress }) => {
  return (
    <Fragment>
      <div className="font-weight-bold">{name}</div>
      <div className="progress">
        <div
          className="progress-bar custom-progress-bar"
          role="progressbar"
          style={{ width: `${progress}%` }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {`${progress}%`}
        </div>
      </div>
    </Fragment>
  );
};

export default Progress;
