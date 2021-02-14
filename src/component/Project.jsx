import React, { useState } from "react";

const Project = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="row ">
      <div className="col-md-4 text-md-right">
        <div className="px-2 py-md-5 py-3">
          <div className="font-weight-bold">PROJECT</div>
          Aplikasi yg sudah di buat.
        </div>
      </div>
      <div className="col-md-8">
        <div className="px-2 py-md-5 py-3">
          <div className="mb-2">
            <div className="mb-2">
              <div className="font-weight-bold">React - Meda Dashboard</div>
              Meda adalah aplikasi sistem sekolah, meda sendiri dibuat dalam
              bentuk web & android
            </div>
            <div className="mb-2">
              <div className="font-weight-bold">
                React - Apollo dashboard & web
              </div>
              Aplikasi mangement kartu kredit.
            </div>
            <div className="mb-2">
              <div className="font-weight-bold">
                React - Pandasurasi dashboard & web
              </div>
              Aplikasi Asuransi.
            </div>
            <div className={open ? "box-projek open-projek" : "box-projek"}>
              <div className="mb-2">
                <div className="font-weight-bold">
                  Wordpress - Flatonic Studio
                </div>
                Aplikasi Landingpage yg di buat dengan menggunakan wordpres
                dengan memakai elemantor.
              </div>
              <div className="mb-2">
                <div className="font-weight-bold">
                  Wordpress - Reformed exodus comunity
                </div>
                Aplikasi keaagamaan yg di buat dengan menggunakan wordpres
                dengan memakai elemantor.
              </div>
              <div className="mb-2">
                <div className="font-weight-bold">
                  Wordpress - Flatonic Studio
                </div>
                Aplikasi Landingpage yg di buat dengan menggunakan wordpres
                dengan memakai elemantor.
              </div>
              <div className="mb-2">
                <div className="font-weight-bold">React - Paxel web</div>
                Paxel adalah Perusahaan yang bergerak dibidang expedisi, disini
                saya mengerjakan layouting dan memperbaiki beberapa bug.
              </div>
            </div>
            <button
              className="btn btn-more px-0"
              onClick={() => setOpen(!open)}
            >
              {open ? "Less" : "More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
