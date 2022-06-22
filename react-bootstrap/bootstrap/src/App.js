import "./App.css";
// import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Row, Col, Container, Nav, Carousel } from "react-bootstrap";

function App() {
  return (
    <div className='App'>
      <Navbar bg='dark' variant='dark'>
        <Container fluid>
          <Navbar.Brand href='#home'>
            <img
              alt=''
              src='/logo192.png'
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{" "}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Row>
        <Col sm={3}>
          <Nav defaultActiveKey='/home' className='flex-sm-column'>
            <Nav.Link href='/home'>Active</Nav.Link>
            <Nav.Link eventKey='link-1'>Link</Nav.Link>
            <Nav.Link eventKey='link-2'>Link</Nav.Link>
            <Nav.Link eventKey='disabled' disabled>
              Disabled
            </Nav.Link>
          </Nav>
        </Col>
        <Col sm={9}>
          <Carousel fluid>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src='/images/IMG_2592.jpg'
                alt='First slide'
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src='/images/IMG_0238.JPG'
                alt='Second slide'
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src='/images/IMG_0181.JPG'
                alt='Third slide'
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
}

export default App;
