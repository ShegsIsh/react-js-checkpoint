import React from 'react';
import { Container, Navbar, Nav, Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
        <Container>
          <h1>React Bootstrap Example</h1>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>
                    This is a sample card content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Card 2</Card.Title>
                  <Card.Text>
                    This is a sample card content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Card 3</Card.Title>
                  <Card.Text>
                    This is a sample card content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
