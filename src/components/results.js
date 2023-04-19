import axios from 'axios';
import React, { useState } from 'react';
import { Input, Button, Table } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    axios.get(`https://643adf0590cd4ba56303ed71.mockapi.io/acronyms?q=${query}`)
      .then(response => {
        setResults(response.data.filter(result => result.acronym === query));
        navigate.push('/results');
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div>
      <Input
        type="text"
        placeholder="Search"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
      <Link to='/createAcronym'>
          <Button>New Acronym</Button>
      </Link>
    </div>
  );
}
