import axios from 'axios';
import React, { useState } from 'react';
import { Input, Button, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Read from './read';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    axios.get(`https://643adf0590cd4ba56303ed71.mockapi.io/acronyms?q=${query}`)
      .then(response => {
        setResults(response.data.filter(result => result.acronym === query));
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Input
        type="text"
        placeholder="Search"
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ width: '500px', marginBottom: '1em' }}
      />
      <div>
        <Button onClick={handleSearch} style={{ marginRight: '1em' }}>Search</Button>
        <Link to='/createAcronym'>
          <Button>New Acronym</Button>
        </Link>
      </div>
      </div>

      <h3 className="main-header"> Search Results </h3>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Acronym</Table.HeaderCell>
            <Table.HeaderCell>Definition</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {results.length > 0 ? (
          <Table.Body>
            {results.map(result => (
              <Table.Row key={result.acronymId}>
                <Table.Cell>{result.acronym}</Table.Cell>
                <Table.Cell>{result.acronymsDefinition}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        ) : (
          <Table.Body>
            <Table.Row>
              <Table.Cell colSpan={2}>Not Found</Table.Cell>
            </Table.Row>
          </Table.Body>
        )}
      </Table>
      <h3 className="main-header">Acronym List</h3>

      <Read />
    </div>
  );
}
