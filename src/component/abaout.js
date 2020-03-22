import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCircle } from "@fortawesome/free-solid-svg-icons";

const { Content } = Layout;

class about extends Component {
  render() {
    return (
      <div className="bg">
        <Content>
          <Row>
            <Col>
              <Row>
                <Col>
                  <div className="titel-about" id="ABOUT">
                    ABOUT
                  </div>
                </Col>
              </Row>
              <div className="box-line">
                <div className="star-line"></div>
                <div className="star-about">
                  &nbsp;
                  <FontAwesomeIcon icon={faStar} />
                  &nbsp;
                </div>
                <div className="star-line"></div>
              </div>
              <Row>
                <Col>
                  <div className="isi-about">
                    I'm Full-Stack Javascript Developer at Dumbways who
                    passionately creating mobile & web apps using react &
                    reactnative technologies. I hope the skills I get from
                    dumbways will be useful in the future and will continue to
                    grow.
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <div className="titel-about">SKILLS</div>
                </Col>
              </Row>
              <div className="box-line">
                <div className="star-line"></div>
                <div className="star-about">
                  &nbsp;
                  <FontAwesomeIcon icon={faStar} />
                  &nbsp;
                </div>
                <div className="star-line"></div>
              </div>
              <Row>
                <Col>
                  <div className="box-skill">
                    <span>
                      <FontAwesomeIcon icon={faCircle} /> &nbsp;
                    </span>
                    React Js &nbsp; &nbsp;
                    <span>
                      <FontAwesomeIcon icon={faCircle} /> &nbsp;
                    </span>
                    Redux &nbsp; &nbsp;
                    <span>
                      <FontAwesomeIcon icon={faCircle} /> &nbsp;
                    </span>
                    React Native
                    <br />
                    <span>
                      <FontAwesomeIcon icon={faCircle} /> &nbsp;
                    </span>
                    Express Js &nbsp; &nbsp;
                    <span>
                      <FontAwesomeIcon icon={faCircle} /> &nbsp;
                    </span>
                    C# &nbsp; &nbsp;
                    <span>
                      <FontAwesomeIcon icon={faCircle} /> &nbsp;
                    </span>
                    Sequelize
                    <br />
                    <span>
                      <FontAwesomeIcon icon={faCircle} /> &nbsp;
                    </span>
                    SQL &nbsp; &nbsp;
                    <span>
                      <FontAwesomeIcon icon={faCircle} /> &nbsp;
                    </span>
                    HTML &nbsp; &nbsp;
                    <span>
                      <FontAwesomeIcon icon={faCircle} /> &nbsp;
                    </span>
                    CSS
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="titel-about">EDUCATION</div>

                  <div className="box-line">
                    <div className="star-line"></div>
                    <div className="star-about">
                      &nbsp;
                      <FontAwesomeIcon icon={faStar} />
                      &nbsp;
                    </div>
                    <div className="star-line"></div>
                  </div>
                  <div className="box-education">
                    <span>
                      <FontAwesomeIcon icon={faCircle} /> &nbsp;
                    </span>
                    STMIK-STIE MIKROSKIL 2016 - 2019 <br />
                    Diploma III Manajemen Informatika Learn C # programming
                    languages in visual studio.
                    <br />
                    <span>
                      <FontAwesomeIcon icon={faCircle} /> &nbsp;
                    </span>
                    SMK TRITECH INFORMATIKA KOTA MEDAN 2012 - 2014
                    <br /> Learn Computer and Network Engineering.
                  </div>
                </Col>
                <Col>
                  <div className="titel-about">TRAINING</div>

                  <div className="box-line">
                    <div className="star-line"></div>
                    <div className="star-about">
                      &nbsp;
                      <FontAwesomeIcon icon={faStar} />
                      &nbsp;
                    </div>
                    <div className="star-line"></div>
                  </div>
                  <div className="box-education">
                    <span>
                      <FontAwesomeIcon icon={faCircle} /> &nbsp;
                    </span>
                    Bootcamp DumbWays.id Full-Stack Javascript Feb 2020 - Maret
                    2020 <br />
                    Learning web and mobile devlopment using React Js and React
                    Native Js. Build various web and mobile based applications.
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </div>
    );
  }
}

export default about;
