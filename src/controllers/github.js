const axios = require("axios");

const GITHUB_API_URL = "https://api.github.com";

const fetchUserRepositories = async (username) => {
  try {
    const response = await axios.get(
      `${GITHUB_API_URL}/users/${username}/repos`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    throw error;
  }
};

export default fetchUserRepositories;
