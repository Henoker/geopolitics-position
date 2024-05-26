import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MainLabel = () => {
    return (
        <Container fluid className="main-label bg-dark text-white py-5">
      <Row>
        <Col>
          <h1 className="display-4 px-3">GeoPolitics Rating</h1>
        </Col>
      </Row>
    </Container>
    )
}

export default MainLabel