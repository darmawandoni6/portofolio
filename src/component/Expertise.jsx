import React from "react";

const Expertise = () => {
  return (
    <div className="row">
      <div className="col-md-4 text-md-right">
        <div className="px-2 py-md-5 py-3">
          <div className="font-weight-bold">EXPERTISE</div>
          keahlian yg saya kuasai.
        </div>
      </div>
      <div className="col-md-8">
        <div className="px-2 py-md-5 pb-3">
          <div className="row">
            <div className="col-12 col-md-6 mb-4">
              <div className="d-flex">
                <div className="mr-2 font-color">01</div>
                <div className="w-100">
                  <div className="font-weight-bold">CSS</div>
                  Mahir styling dengan menggunanka preprosesor sass sesuai
                  dengan Thema yg diberika dari figma, adobe xd, zepline atau
                  ilustrator lainnya.
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="d-flex">
                <div className="mr-2 font-color">02</div>
                <div className="w-100">
                  <div className="font-weight-bold">FRONT-END DESIGN</div>
                  Library yg digunakan adalah react dan framework yg dipakai
                  adah Next Js.
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex">
                <div className="mr-2 font-color">03</div>
                <div className="w-100">
                  <div className="font-weight-bold">REDUX</div>
                  Redux adalah pustaka JavaScript open-source untuk mengelola
                  status aplikasi. Untuk redux sendri saya memakai Redux-thunk &
                  redux-form.
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex">
                <div className="mr-2 font-color">04</div>
                <div className="w-100">
                  <div className="font-weight-bold">WORDPRESS</div>
                  Pernah mendapatkan task wordpres dalam membangun landingpage.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
