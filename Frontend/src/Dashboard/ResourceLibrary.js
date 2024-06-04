import React, { useState, useEffect } from 'react';
import "../Dash_Style/ResourceLibrary.css";

function ResourceLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      // Make API call here using searchTerm
      // Update searchResults state with the API response
      const apiKey = 'AIzaSyC5RgLX8EOLslQg8AH8B10AhAxXXv5D4Zw';
      // Replace the following code with your actual API call
      const mockResults = [`Result for ${searchTerm} 1`, `Result for ${searchTerm} 2`, `Result for ${searchTerm} 3`];
      setSearchResults(mockResults);
    }
  };

  return (
    <div className='Resource_library'>
      <div className='library_back_image'>
        <img src={require('../assets/library_back.jpg')} alt="Library Background" />
        <h2 className='ResourceLibrary_heading'>Skillup Resource Library</h2>
        <div>
          <input
            placeholder="Type something here..."
            className="input"
            name="text"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
        <div className='resourse_result'>
          {searchResults.map((result, index) => (
            <div key={index} className='resourse_result_container'>{result}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResourceLibrary;