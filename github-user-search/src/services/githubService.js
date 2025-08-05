import axios from 'axios';

const BASE_URL = 'https://api.github.com';

const githubService = {
  searchUsers: (username) => {
    return axios.get(`${BASE_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
      }
    });
  }
};

export default githubService;
