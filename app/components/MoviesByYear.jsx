import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import MovieCard from "./MovieCard";
import { getMovies } from "../api/getMovies";

const MoviesByYear = ({ year }) => {
  const [noOfColumns, setNoOfColumns] = useState(2);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const response = await getMovies();
    setMovies(response.results);
  };

  return (
    <View style={styles.contentContainer}>
      <Text style={styles.year}>{year}</Text>
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard item={item} key={item.id} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={noOfColumns}
        contentContainerStyle={styles.cardContainer}
      />
    </View>
  );
};

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
});

export default MoviesByYear;
