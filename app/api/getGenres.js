import { process } from "react-native";

export const getGenres = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.EXPO_API_TOKEN}`,
    },
  };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
