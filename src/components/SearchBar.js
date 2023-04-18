import React, { useState, useEffect } from "react";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch(`https://643adf0590cd4ba56303ed71.mockapi.io/acronyms`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data))
      .catch((error) => console.error(error));
  }, [searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Render the search results
  const searchResultItems = searchResults.map((result) => (
    <div key={result.id}>
      <h2>{result.acronym}</h2>
      <p>{result.definition}</p>
    </div>
  ));

  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleSearchInputChange} />
      {searchResultItems}
    </div>
  );
}

export default SearchBar;
