export const getMovies = async () => {
  const options = { method: "GET", headers: { accept: "application/json" } };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc&primary_release_year=2022&page=1&vote_count.gte=100",
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
