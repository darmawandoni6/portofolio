import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <div className="row">
      <div className="col-md-4 text-md-right">
        <div className="px-2 py-md-5 py-3">
          <div className="font-weight-bold">EXPERIENCE</div>
          Pengalaman yang sudah dilakukan.
        </div>
      </div>
      <div className="col-md-8">
        <div className="px-2 py-md-5 pb-3 d-flex align-items-stretch h-100">
          <div className="custom-step h-100">
            <div className="line-border" />
          </div>
          <div>
            <div className="mb-4">
              <div style={{ position: "relative" }}>
                <div style={styles.dot}>
                  <FontAwesomeIcon icon={faCircle} />
                </div>
                Mei 2020 - Sekarang
              </div>
              <div className="exp-title">Frontend Developer - TwisCode</div>
              <div className="exp-desc">
                TwisCode adalah sebuah perusahaan softwere house yang
                mengkhususkan diri dalam mengembangkan aplikasi seluler dan web
                berkinerja tinggi. Berkeja dengan framework Next Js & wordpress.
              </div>
            </div>

            <div>
              <div style={{ position: "relative" }}>
                <div style={styles.dot}>
                  <FontAwesomeIcon icon={faCircle} />
                </div>
                Feb 2020 - Mei 2020
              </div>
              <div className="exp-title">
                Talent - PT. DumbWays Indonesia Teknologi
              </div>
              <div className="exp-desc">
                Belajar Full Stack JavaScript dengan front end menggunakan npx
                create-react-app dan backend nya mengunakan Express js dan
                Sequelize
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

const styles = {
  dot: {
    position: "absolute",
    top: 0,
    left: -23,
    backgroundColor: "white",
    color: "#f8bb10",
  },
};
