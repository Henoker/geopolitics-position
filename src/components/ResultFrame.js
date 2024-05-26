import React from 'react';
import { Button } from 'react-bootstrap';

const ResultFrame = ({ displayResult }) => (
  <div className="result-frame" style={{ backgroundColor: '#142F55', color: 'white', padding: '1rem', marginTop: '2rem' }}>
    <h4>Result</h4>
    <Button variant="primary" onClick={displayResult}>Rate</Button>
  </div>
);

export default ResultFrame;
