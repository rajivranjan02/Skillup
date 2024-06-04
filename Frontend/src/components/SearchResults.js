import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style/searchresults.css';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state?.results || [];
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(5);
  const [sortOption, setSortOption] = useState('name');

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const sortedResults = results.sort((a, b) => {
    if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = sortedResults.slice(indexOfFirstResult, indexOfLastResult);
  const totalPages = Math.ceil(results.length / resultsPerPage);

  return (
    <div className="results-container">
      <h2>Search Results</h2>
      <button onClick={() => navigate('/')}>Back to Search</button>

      <div className="sort-options">
        <label htmlFor="sort">Sort by: </label>
        <select id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="name">Name</option>
          {/* Add more sort options if needed */}
        </select>
      </div>

      <ul>
        {currentResults.length > 0 ? (
          currentResults.map(result => (
            <li key={result.id} className="result-item">
              <h3>{result.name}</h3>
              <p>{result.description}</p>
              <ul>
                {result.courses.map(course => (
                  <li key={course.id}>{course.title} - {course.instructor}</li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <p>No results found</p>
        )}
      </ul>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
