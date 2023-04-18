import React, { useState } from 'react';

const SearchBB = () => {
  const [searchInput, setSearchInput] = useState('');
  const [countries, setCountries] = useState([
    { name: 'Belgium', continent: 'Europe' },
    { name: 'India', continent: 'Asia' },
    { name: 'Bolivia', continent: 'South America' },
    { name: 'Ghana', continent: 'Africa' },
    { name: 'Japan', continent: 'Asia' },
    { name: 'Canada', continent: 'North America' },
    { name: 'New Zealand', continent: 'Australia' }
  ]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    setCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />

      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Continent</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <tr key={index}>
              <td>{country.name}</td>
              <td>{country.continent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchBB;
