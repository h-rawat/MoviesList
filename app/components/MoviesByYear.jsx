import React, { useEffect, useState } from "react";
import Toast from "react-native-simple-toast";
import { FlatList, StyleSheet, Text, View } from "react-native";

import MovieCard from "./MovieCard";
import { getMovies } from "../api/getMovies";

const MoviesByYear = React.memo(({ year, genreFilterValue, genreList }) => {
  const [noOfColumns, setNoOfColumns] = useState(2);
  const [originalMovies, setOriginalMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    filterMoviesOnGenre();
  }, [genreFilterValue]);

  useEffect(() => {
    loadMoviesByYear();
  }, []);

  const filterMoviesOnGenre = () => {
    const selectedGenreIds = genreFilterValue.map((item) => item.id);
    if (selectedGenreIds?.length === 1 && selectedGenreIds[0] === 0) {
      loadMoviesByYear();
    } else {
      const hasMatchingGenre = originalMovies.filter((movie) =>
        movie.genre_ids.some((genreId) => selectedGenreIds.includes(genreId))
      );
      setMovies(hasMatchingGenre);
    }
  };

  const loadMoviesByYear = async () => {
    const response = await getMovies(year);
    if (response?.status_code === 7) {
      Toast.show(
        response?.status_message.split(":")[0] + " : Unable to get movies"
      );
    } else {
      setOriginalMovies(response.results);
      setMovies(response.results);
    }
  };

  return (
    <View style={styles.contentContainer}>
      <Text style={styles.year}>{year}</Text>
      {movies?.length === 0 ? (
        <Text style={styles.noMovieText}>No movies available</Text>
      ) : (
        <FlatList
          data={movies}
          renderItem={({ item }) => (
            <MovieCard
              item={item}
              key={item.id}
              genreList={genreList}
              noOfColumns={noOfColumns}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={noOfColumns}
          contentContainerStyle={styles.cardContainer}
        />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  year: {
    color: "#fff",
    marginHorizontal: 10,
    fontSize: 24,
    marginBottom: 20,
  },
  noMovieText: {
    color: "gray",
    marginHorizontal: 10,
    fontSize: 16,
    marginHorizontal: "auto",
  },
});

export default MoviesByYear;
