import React, { useState } from'react';
import ComboboxRatings from './components/ComboboxRatings';
import MainLabel from './components/MainLabel';
import { Container, Row, Col } from'react-bootstrap';

function App() {
  const [ratings, setRatings] = useState({
    aidToInsurgents: '',
    interveneForRebels: '',
    destabilize: '',
    treaty: '',
    interveneToGovernment: '',
    diplomaticPressure: '',
    militaryAid: '',
    economicAid: '',
    tradePolicy: ''
  });

  const handleRatingChange = (field, value) => {
    setRatings(prevRatings => ({ ...prevRatings, [field]: value }));
  };
  return (
    <Container fluid>
    <Row>
      <Col>
        <MainLabel />
      </Col>
    </Row>
    <Row>
      <Col xs={6}>
      <ComboboxRatings  ratings={ratings} onRatingChange={handleRatingChange} />
      </Col>
    </Row>
    </Container>
      
  );
}

export default App;
