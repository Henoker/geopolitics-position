import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Select from 'react-select';




const ComboboxRatings = ({ ratings, onRatingChange }) => {
  const aidToInsurgentsOptions = [
    { value: 'None', label: 'None' },
    { value: 'Up to 20 million', label: 'Up to 20 million' },
    { value: 'up to 100 million', label: 'up to 100 million' },
    { value: 'Up to 500 million', label: 'Up to 500 million' },
    { value: 'More than 1 billion', label: 'More than 1 billion' }
  ];

  const destablizeOptions = [
    { value: 'None', label: 'None' },
    { value: 'Encourage Dissidents', label: 'Encourage Dissidents' },
    { value: 'Fund opposition', label: 'Fund opposition' },
    { value: 'Incite riots', label: 'Incite riots' },
    { value: 'Provoke assasination or Coup detat', label: 'Provoke assasination or Coup detat' }
  ]

  const  intervene_to_rebelsOptions = [
    { value: 'None', label: 'None' },
    { value: 'up to 1000 troops', label: 'up to 1000 troops' },
    { value: 'up to 5000 troops', label: 'up to 5000 troops' },
    { value: 'up to 20000 troops', label: 'up to 20000 troops'},
    {value: 'More than 100 thousands troops', label: 'More than 100 thousands troops'}

  ]

  const treatyOptions = [
    {value: 'None', label: 'None'},
    {value: 'trade relations', label: 'trade relations'},
    {value: 'military base', label: 'military base'},
    {value: 'conventinal weapons', label: 'conventinal weapons'},
    {value: 'nuclear deal', label: 'nuclear deal'},
  ] 

  const intervene_to_governmentOptions = [
    {value: 'None', label: 'None'},
    {value: 'up to 1000 troops', label: 'up to 1000 troops'},
    {value: 'up to 5000 troops', label: 'up to 5000 troops'},
    {value: 'up to 20000 troops', label: 'up to 20000 troops'},
    {value: 'More than 100 thousands troops', label: 'More than 100 thousands troops'},
  ]

  const diplomaticPressureOptions = [ 
    {value: 'None or quiet diplomacy', label: 'None or quiet diplomacy'},
    {value: 'public posturing', label: 'public posturing'},
    {value: 'Moderate Pressure', label: 'Moderate Pressure'}, 
    {value: 'Intense pressure', label: 'Intense pressure'},
    {value: 'Offensive diplomacy', label: 'Offensive diplomacy'},
  ]

  const militaryAidOptions = [
    {value: 'None', label: 'None'},
    {value: 'Up to 20 million', label: 'Up to 20 million'},
    {value: 'up to 100 million', label: 'up to 100 million'},
    {value: 'Up to 500 million', label: 'Up to 500 million'},
    {value: 'More than 1 billion', label: 'More than 1 billion'},
  ]

  const economicAid = [
    {value: 'None', label: 'None'},
    {value: 'Up to 20 million', label: 'Up to 20 million'},
    {value: 'up to 100 million', label: 'up to 100 million'},
    {value: 'Up to 500 million', label: 'Up to 500 million'},
    {value: 'More than 1 billion', label: 'More than 1 billion'},
  ]

  const tradePolicy = [
    {value: 'Favorable Trade', label: 'Favorable Trade'},
    {value: 'Normal Trade', label: 'Normal Trade'},
    {value: 'Trade Quota', label: 'Trade Quota'},
    {value: 'stiff quota', label: 'stiff quota'},
    {value: 'Trade or tech emabargo', label: 'Trade or tech emabargo'},
  ]
  const handleChange = (field, selectedOption) => {
    onRatingChange(field, selectedOption ? selectedOption.value : '');
  };

  return (
    <Form style={{ backgroundColor: '#142F55', color: 'white', padding: '1rem' }}>
      <h4 className="py-2">1. National Security Effectiveness Rating</h4>
      <Form.Group as={Row} controlId="aidToInsurgents">
        <Form.Label column sm={6}>Financial Aid to Insurgents</Form.Label>
        <Col sm={6}>
          <Select
            value={aidToInsurgentsOptions.find(option => option.value === ratings.aidToInsurgents)}
            onChange={selectedOption => handleChange('aidToInsurgents', selectedOption)}
            options={aidToInsurgentsOptions}
            
            
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="destablize">
        <Form.Label column sm={6}>destablize</Form.Label>
        <Col sm={6}>
          <Select
            value={destablizeOptions.find(option => option.value === ratings.destablize)}
            onChange={selectedOption => handleChange('destablize', selectedOption)}
            options={destablizeOptions}
            
            
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="destablize">
        <Form.Label column sm={6}>intervene to rebels</Form.Label>
        <Col sm={6}>
          <Select
            value={intervene_to_rebelsOptions.find(option => option.value === ratings.intervene_to_rebels)}
            onChange={selectedOption => handleChange('destablize', selectedOption)}
            options={intervene_to_rebelsOptions}
            
            
          />
        </Col>
      </Form.Group>
      {/* Add more comboboxes similarly */}
      <h4 className="py-2">2. Diplomacy Effectiveness Rating</h4>
      <Form.Group as={Row} controlId="treaty">
        <Form.Label column sm={6}>Treaty</Form.Label>
        <Col sm={6}>
          <Select
            value={treatyOptions.find(option => option.value === ratings.treaty)}
            onChange={selectedOption => handleChange('treaty', selectedOption)}
            options={treatyOptions}
            
            
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="diplomaticPressure">
        <Form.Label column sm={6}>Diplomatic Pressure</Form.Label>
        <Col sm={6}>
          <Select
            value={diplomaticPressureOptions.find(option => option.value === ratings.diplomaticPressure)}
            onChange={selectedOption => handleChange('diplomaticPressure', selectedOption)}
            options={diplomaticPressureOptions}    
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="intervene_to_government">
        <Form.Label column sm={6}>intervene to Government</Form.Label>
        <Col sm={6}>
          <Select
            value={intervene_to_governmentOptions.find(option => option.value === ratings.intervene_to_government)}
            onChange={selectedOption => handleChange('intervene_to_government', selectedOption)}
            options={intervene_to_governmentOptions}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="militaryAid">
        <Form.Label column sm={6}>Militray Aid</Form.Label>
        <Col sm={6}>
          <Select
            value={militaryAidOptions.find(option => option.value === ratings.militaryAid)}
            onChange={selectedOption => handleChange('militaryAid', selectedOption)}
            options={militaryAidOptions}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="economicAid">
        <Form.Label column sm={6}>Economic Aid</Form.Label>
        <Col sm={6}>
          <Select
          value={economicAid.find(option => option.value === ratings.economicAid)}
          onChange={selectedOption => handleChange('economicAid', selectedOption)}
          options={economicAid}
        />  
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="tradePolicy">
        <Form.Label column sm={6}>Trade Policy</Form.Label>
        <Col sm={6}>
          <Select
          value={tradePolicy.find(option => option.value === ratings.tradePolicy)}
          onChange={selectedOption => handleChange('tradePolicy', selectedOption)}
          options={tradePolicy}
          />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default ComboboxRatings;
