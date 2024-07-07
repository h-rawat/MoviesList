export const getMovieDetails = async (id) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTFiNTNhMzVhMmUzNWZhNTE0MDI5ZDEyYTQ1ZjFlMSIsIm5iZiI6MTcyMDM3NjAyMy4wNDA4ODYsInN1YiI6IjY2OGFjYTkzZDgxODBkOGMxNTYxODc2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S5ArX20ZVBKjmB6Ix2nmJDUB3aVM4ZrvpQ2dv4cIlmo",
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
