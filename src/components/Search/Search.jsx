import React from 'react';
import useSearch from '../../hooks/useSearch';

const Search = () => {
  const {
    isSignedIn,
    searchInput,
    searchResults,
    handleSearchInputChange,
    handleSearch,
  } = useSearch();

  return (
    <div className='mt-20 ml-[250px]'>
      <input type="text" value={searchInput} onChange={handleSearchInputChange} />
      <button onClick={handleSearch}>Search</button>

      {isSignedIn && (
        <div>
          {searchResults.map((result) => (
            <div key={result.id.videoId}>
              <p>{result.snippet.title}</p>
              {/* Display other relevant information as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
