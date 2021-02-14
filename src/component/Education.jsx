import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  return (
    <div className="row" style={{ backgroundColor: "#fbfbfb" }}>
      <div className="col-md-4 text-md-right">
        <div className="px-2 py-md-5 py-3">
          <div className="font-weight-bold">EDUCATION</div>
          Sekolah Formal.
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
                2016 - 2019
              </div>
              <div className="exp-title">STMIK - STIE MIKROSKIL</div>
              <div className="exp-desc">
                Salah satu kampus IT terbaik dimedan disana saya baca belajar
                khusus pengembangan aplikasi berbasis dekstop dengan bahasa C# &
                SQL.
              </div>
            </div>
            <div>
              <div style={{ position: "relative" }}>
                <div style={styles.dot}>
                  <FontAwesomeIcon icon={faCircle} />
                </div>
                2012 - 2014
              </div>
              <div className="exp-title">SMK Tritech Informatika Medan</div>
              <div className="exp-desc">
                Sekolah kejuaran disana saya mengambil jurusan Teknik, Komputer
                & Jaringan (TKJ).
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

const styles = {
  dot: {
    position: "absolute",
    top: 0,
    left: -23,
    backgroundColor: "white",
    color: "#f8bb10",
  },
};
