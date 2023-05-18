import React, { useState } from 'react';
import Github from "../Components/Github.css";

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      alert('Please enter a GitHub username.');
      return;
    }

    const apiUrl = `https://api.github.com/search/users?q=${searchQuery}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.items);
        console.log(data.items)
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      });
  };

  return (
    <div className='General'>
      <h1 className='git'>GitHub User Search</h1>
      <div>
        <input
          type="text"
          id="search-input"
          placeholder="Enter a GitHub username"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch} >Search</button>
      </div>
      <div>
        
      </div>
      <ul>
        {searchResults.length === 0 ? (
          <li className='result'>No results found.</li>
        ) : (
          searchResults.map((item) => (
            <li key={item.id}>
             <strong>{item.login}</strong> -{' '}
             <a href={item.html_url} target="_blank" rel="noopener noreferrer"> 
             <li>  <img src={item.avatar_url} alt=''/> </li>
                View Profile
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default SearchPage;