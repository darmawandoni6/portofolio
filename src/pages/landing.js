import React, { Component } from "react";
import { Layout } from "antd";

import Navbar from "../component/navbar";
import Isi from "../component/content";
import Portfolio from "../component/portofolio";
import Abaout from "../component/abaout";
import Contact from "../component/contact";
import Certificate from "../component/certificate";

import "../css/landing.css";

class landing extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Navbar />
          <Isi />
          <Portfolio />
          <Abaout />
          <Contact />
          <Certificate />
        </Layout>
      </div>
    );
  }
}

export default landing;
