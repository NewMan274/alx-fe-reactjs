// services/githubService.js

import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `token ${GITHUB_API_KEY}`,
  },
});

export const fetchUserData = async (username) => {
  try {
    const response = await axiosInstance.get(`/users/${username}`);
    return { data: response.data, error: null };
  } catch (error) {
    return {
      data: null,
      error:
        error.response?.status === 404
          ? 'User not found'
          : 'Something went wrong while fetching user data.',
    };
  }
};

export const searchUsers = async ({
  query,
  location,
  repos,
  followers,
  page = 1,
  per_page = 20,
}) => {
  try {
    if (!query) {
      return {
        data: [],
        totalCount: 0,
        error: 'Please enter a username to search.',
      };
    }

    let searchQuery = `${query} in:login`;

    if (location) searchQuery += ` location:${location}`;
    if (repos) searchQuery += ` repos:>=${repos}`;
    if (followers) searchQuery += ` followers:>=${followers}`;

    const response = await axiosInstance.get(`/search/users`, {
      params: { q: searchQuery, page, per_page },
    });

    const basicUsers = response.data.items;

    const detailedUsers = await Promise.all (
      basicUsers.map(async (user) => {
        const { data } = await fetchUserData(user.login);
        return data;
      })
    )

    return {
      data: detailedUsers,
      totalCount: response.data.total_count,
      error: null,
    };
  } catch {
    return {
      data: null,
      error: 'Failed to perform advanced search. Please try again.',
    };
  }
};
