import React, { Component } from "react";
import { Layout, Row, Col } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const { Content } = Layout;

class content extends Component {
  render() {
    return (
      <div className="bg">
        <Content>
          <Row className="border">
            <Col>
              <div className="box-pict"></div>
            </Col>
          </Row>
          <Row className="border">
            <Col>
              <div className="name">DONI DARMAWAN</div>
              <div className="box-line">
                <div className="line"></div>
                <div className="star">
                  &nbsp;
                  <FontAwesomeIcon icon={faStar} />
                  &nbsp;
                </div>
                <div className="line"></div>
              </div>
              <div className="job"> Full-Stack Javascript</div>
            </Col>
          </Row>
        </Content>
      </div>
    );
  }
}

export default content;
