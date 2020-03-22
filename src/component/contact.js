import React, { Component } from "react";
import { Layout, Row, Col, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faPhoneAlt,
  faEnvelope,
  faMapMarker
} from "@fortawesome/free-solid-svg-icons";

const { Content } = Layout;

class contact extends Component {
  download = () => {
    window.location.href =
      "https://drive.google.com/u/0/uc?id=1y7M_9kNU9HNl1hemglcue3YaTXlDNsgI&export=download";
  };

  render() {
    return (
      <div className="bg-contact">
        <Content>
          <Row>
            <Col>
              <div className="box-contact" id="CONTACT">
                <span>Contact</span>
                <div className="header-star">
                  <div className="contact-line"></div>
                  <div className="contact-star">
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <div className="contact-line"></div>
                </div>
                <br />
                <div className="line-contact">
                  <FontAwesomeIcon icon={faPhoneAlt} /> &nbsp; 0857-6129-8781
                </div>
                <div className="line-contact">
                  <FontAwesomeIcon icon={faEnvelope} /> &nbsp;
                  darmawandoni6@gmail.com
                </div>
                <div className="line-contact">
                  <img src={require("../image/github.svg")} alt="git" /> &nbsp;
                  <a href="https://github.com/darmawandoni6">
                    https://github.com/darmawandoni6
                  </a>
                </div>
                <div className="line-contact">
                  <img src={require("../image/linkedin.svg")} alt="linkedin" />{" "}
                  &nbsp;
                  <a href="https://www.linkedin.com/in/doni-darmawan/">
                    https://www.linkedin.com/in/doni-darmawan/
                  </a>
                </div>
                <div className="line-contact">
                  <FontAwesomeIcon icon={faMapMarker} /> &nbsp; Permata Bintaro
                  Residence C3, Jl. Elang IV Kav. 28 South Tanggerang, Banten,
                  West Java, Indonesia, 15413
                </div>
              </div>
            </Col>
          </Row>
          <div className="btn-download">
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              onClick={this.download}
            >
              Download
            </Button>
          </div>
        </Content>
      </div>
    );
  }
}

export default contact;
