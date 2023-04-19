import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export default function Update() {
  const navigate = useNavigate();
  const [acronymId, setAcronymId] = useState(null);
  const [acronym, setAcronym] = useState('');
  const [query, setQuery] = useState('');
  const [acronymsDefinition, setAcronymDefinition] = useState('');

  useEffect(() => {
    setAcronymId(localStorage.getItem('Acronym ID'));
    setAcronym(localStorage.getItem('Acronym Name'));
    setAcronymDefinition(localStorage.getItem('Acronym Definition'));
  }, []);

  const updateAPIData = () => {
    axios.get(`https://643adf0590cd4ba56303ed71.mockapi.io/acronyms?acronym=${acronym}`)
      .then(response => {
        if (response.data.length > 0) {
          axios.put(`https://643adf0590cd4ba56303ed71.mockapi.io/acronyms/${acronym}`, {
            acronym: acronym,
            acronymsDefinition: acronymsDefinition
          });
        } else {
          alert(`Acronym ${acronym} not found in the database`);
        }
      });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Acronym</label>
          <input placeholder='Update Acronym' value={acronym} onChange={(e) => setAcronym(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <input placeholder='Update Acronym Definition' value={acronymsDefinition} onChange={(e) => setAcronymDefinition(e.target.value)} />
        </Form.Field>
        <Button type='submit' onClick={updateAPIData} style={{ margin: '10px' }}>Update Acronym</Button>
      </Form>
      <Link to="/landingPage">
        <Button style={{ margin: '10px' }}>Cancel</Button>
      </Link>
    </div>
  )
}
