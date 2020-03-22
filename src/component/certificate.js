import React, { Component } from "react";
import { Layout, Row, Col, Carousel } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const { Content } = Layout;

class certificate extends Component {
  render() {
    return (
      <div className="bg">
        <Content>
          <Row>
            <Col>
              <div className="certificate-h">
                <span id="CERTIFICATE">CERTIFICATE</span>
              </div>
              <div className="certificate-h">
                <div className="star-line"></div>
                <div className=" star-certificate">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="star-line"></div>
              </div>
              <br />
              <div className="box-slide">
                <Carousel autoplay>
                  <div className="slider">
                    <img
                      src={require("../image/Beasiswa1.jpg")}
                      alt="certificate"
                    />
                  </div>
                  <div className="slider">
                    <img
                      src={require("../image/Beasiswa2.jpg")}
                      alt="certificate"
                    />
                  </div>
                  <div className="slider">
                    <img
                      src={require("../image/dumbways.JPG")}
                      alt="certificate"
                    />
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Content>
      </div>
    );
  }
}

export default certificate;
