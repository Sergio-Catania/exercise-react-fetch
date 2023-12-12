
import React from 'react';

const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <div className="searchBar">
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
      <button onClick={onSearch}>Cerca</button>
    </div>
  );
};

export default SearchBar;