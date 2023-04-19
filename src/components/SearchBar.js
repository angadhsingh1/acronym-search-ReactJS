import React, { useState, useEffect } from 'react';
import { Table } from 'semantic-ui-react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function Results() {
  const [results, setResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('q');
    axios.get(`https://643adf0590cd4ba56303ed71.mockapi.io/acronyms?q=${query}`)
      .then(response => {
        setResults(response.data.filter(result => result.acronym === query));
      })
      .catch(error => {
        console.error(error);
      });
  }, [location.search]);

  return (
    <div>
      {results.length > 0 ? (
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Acronym</Table.HeaderCell>
              <Table.HeaderCell>Definition</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {results.map(result => (
              <Table.Row key={result.acronymId}>
                <Table.Cell>{result.acronym}</Table.Cell>
                <Table.Cell>{result.acronymsDefinition}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ) : (
        <div>Not Found</div>
      )}
    </div>
  );
}
