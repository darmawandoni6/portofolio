import React, { Component } from "react";
import { Layout, Row, Col, Card } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const { Content } = Layout;
const { Meta } = Card;

class portfolio extends Component {
  render() {
    return (
      <div className="bg-porfolio">
        <Content>
          <Row>
            <Col>
              <div className="h-porfolio" id="PORFOLIO">
                <span>PORTFOLIO</span>
              </div>
              <div className="box-line">
                <div className="line-porfolio"></div>
                <FontAwesomeIcon icon={faStar} className="star2" />
                <div className="line-porfolio"></div>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm={8}>
              <div className="box-line">
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img alt="example" src={require("../image/lantick.png")} />
                  }
                >
                  <Meta
                    title="LandTick"
                    description="https://github.com/darmawandoni6/E-Tiket"
                  />
                </Card>
              </div>
            </Col>
            <Col sm={8}>
              <div className="box-line">
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      alt="example"
                      src={require("../image/penggadaian.png")}
                    />
                  }
                >
                  <Meta
                    title="Penggadaian"
                    description="https://github.com/darmawandoni6/FronEnd_Penggadaian"
                  />
                </Card>
              </div>
            </Col>
            <Col sm={8}>
              <div className="box-line">
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img alt="example" src={require("../image/porfolio.png")} />
                  }
                >
                  <Meta
                    title="Portfolio"
                    description="https://github.com/darmawandoni6/portofolio"
                  />
                </Card>
              </div>
            </Col>
          </Row>
          <br />
        </Content>
      </div>
    );
  }
}

export default portfolio;
