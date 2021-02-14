import React from "react";
import Progress from "./Progress";

const Skills = () => {
  return (
    <div className="row" style={{ backgroundColor: "#fbfbfb" }}>
      <div className="col-md-4 text-md-right">
        <div className="px-2 py-md-5 py-3">
          <div className="font-weight-bold">SKILLS</div>
          Persentase skill dalam bentuk progress bar.
        </div>
      </div>
      <div className="col-md-8">
        <div className="px-2 py-md-5 pb-3">
          <div className="row">
            <div className="col-12 col-md-6  mb-3">
              <Progress name="CSS/SCSS" progress={90} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <Progress name="REACT JS" progress={90} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <Progress name="REDUX" progress={90} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <Progress name="AXIOS" progress={90} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <Progress name="WORDPRESS" progress={60} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <Progress name="GIT" progress={90} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <Progress name="SQL" progress={90} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <Progress name="EXPRES JS" progress={80} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <Progress name="SEQUELIZE" progress={70} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <Progress name="HTML" progress={80} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
