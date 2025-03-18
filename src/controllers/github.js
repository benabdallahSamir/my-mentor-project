import axios from "axios";

const GITHUB_API_URL = "https://api.github.com";

const fetchUserRepositories = async () => {
  try {
    const response = await axios.get(
      `${GITHUB_API_URL}/users/samirBenabdallah/repos`,
      {
        params: {
          page: 1,
          per_page: 200, // GitHub's default limit per page
        },
      }
    );
    // const response = await axios.get(
    //   `${GITHUB_API_URL}/users/samirBenabdallah/repos`
    // );
    const repositories = [];
    response.data.map((repo) => {
      const r = handleReposetry(repo);
      if (r) repositories.push(r);
    });
    return repositories;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    throw error;
  }
};
function handleReposetry(repo) {
  const { homepage: livesite, name, html_url: link, description } = repo;
  if (!description) {
    console.log(link);
    return;
  }
  const image = `${link}/blob/main/design/desktop-preview.jpg?raw=true`;
  const level = description.match(/: [A-Za-z]*/)[0].substring(2);
  const language = description.match(/- .*/)[0].substring(2);
  return {
    livesite,
    name,
    link,
    image,
    level,
    language,
  };
}
export default fetchUserRepositories;
