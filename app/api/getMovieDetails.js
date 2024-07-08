import { TOKEN } from "@env";

export const getMovieDetails = async (id) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
