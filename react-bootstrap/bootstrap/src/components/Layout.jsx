import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import SideMenu from "./SideMenu";

const Layout = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col sm={3}>
            <SideMenu />
          </Col>
          <Col sm={9}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;