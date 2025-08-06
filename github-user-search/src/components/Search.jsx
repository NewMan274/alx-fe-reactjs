// src/components/Search.jsx

import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';

const Search = () => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [repos, setRepos] = useState('');
  const [followers, setFollowers] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const perPage = 20; // Results per page

  const handleSearch = async (e, pageOverride = 1) => {
    e?.preventDefault();
    setLoading(true);
    setError('');
    setResults([]);
    setPage(pageOverride);

    const { data, totalCount, error } = await searchUsers({
      query,
      location,
      repos,
      followers,
      page: pageOverride,
      per_page: perPage,
    });

    if (error) {
      setError(error);
    } else if (data.length === 0) {
      setError('No users found for the given filter.');
    } else {
      setResults(data);
      setTotalCount(totalCount);
    }


    setLoading(false);
  };

  const handleNextPage = () => {
    if (page * perPage < totalCount) {
      handleSearch(null, page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      handleSearch(null, page - 1);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow-md">
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repos"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Minimum Followers"
          value={followers}
          onChange={(e) => setFollowers(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-blue-600">Loading...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}

      {!loading && results.length > 0 && (
        <div className="mt-6">
          <p className="mb-4 text-gray-700">
            Showing page {page} of {Math.ceil(totalCount / perPage)} ({totalCount} users found)
          </p>
          <ul className="space-y-4">
            {results.map((user) => (
              <li
                key={user.id}
                className="border p-4 rounded shadow hover:bg-gray-50"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 font-semibold hover:underline"
                    >
                      {user.login}
                    </a>
                    {user.name && <p className="text-gray-700"><span className='font-bold'>Name:</span> {user.name}</p>}
                    {user.bio && <p className="text-gray-600"><span className='font-bold'>Bio:</span> {user.bio}</p>}
                    {user.location && <p className="text-gray-600"><span className='font-bold'>Location:</span> {user.location}</p>}
                    <p className="text-gray-600"><span className='font-bold'>Repos:</span> {user.public_repos}</p>
                    <p className="text-gray-600"><span className='font-bold'>Followers:</span> {user.followers}</p>
                    <p className="text-gray-600"><span className='font-bold'>Gists:</span> {user.public_gists}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrevPage}
              disabled={page === 1}
              className={`px-4 py-2 rounded ${
                page === 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={page * perPage >= totalCount}
              className={`px-4 py-2 rounded ${
                page * perPage >= totalCount
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;

["fetchUserData"]