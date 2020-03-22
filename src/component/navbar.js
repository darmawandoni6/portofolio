import React, { Component } from "react";
import { Layout } from "antd";
import { Link, animateScroll as scroll } from "react-scroll";

const { Header } = Layout;

class navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="brand" onClick={this.scrollToTop}>
          CURRICULUM VITAE
        </div>

        <div className="box-menu">
          <span>
            <Link
              activeClass="active"
              to="PORFOLIO"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ color: "white" }}
            >
              PORFOLIO
            </Link>
          </span>
          &nbsp;&nbsp;
          <span>
            <Link
              activeClass="active"
              to="ABOUT"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ color: "white" }}
            >
              ABOUT
            </Link>
          </span>
          &nbsp;&nbsp;
          <span>
            <Link
              activeClass="active"
              to="CONTACT"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ color: "white" }}
            >
              CONTACT
            </Link>
          </span>
          &nbsp;&nbsp;
          <span>
            <Link
              activeClass="active"
              to="CERTIFICATE"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ color: "white" }}
            >
              CERTIFICATE
            </Link>
          </span>
        </div>
      </Header>
    );
  }
}

export default navbar;
