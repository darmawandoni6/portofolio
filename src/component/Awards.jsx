import React from "react";

const Awards = () => {
  return (
    <div className="row" style={{ backgroundColor: "#fbfbfb" }}>
      <div className="col-md-4 text-md-right">
        <div className="px-2 py-md-5 py-3">
          <div className="font-weight-bold">AWARDS</div>
          Penghargaan yg baru didapat.
        </div>
      </div>
      <div className="col-md-8">
        <div className="px-2 py-md-5 py-3">
          <div className="mb-3">
            <div className="award-title">
              Bootcamp DumbWays.id Full-Stack Javascript
            </div>
            <div className="award-desc">
              Sertifikat yg saya dapatkan setelah selesan pelatihan yg diberikan
              oleh dumbways.
            </div>
          </div>
          <div className="mb-3">
            <div className="award-title">Beasiswa Kampus</div>
            <div className="award-desc">
              2 Sertifikat IP Tertinggi Beasiswa dari kampus.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
