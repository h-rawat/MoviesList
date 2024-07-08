import { useEffect, useState } from "react";

import Header from "./app/components/Header";
import MoviesByYear from "./app/components/MoviesByYear";
import { FlatList, StyleSheet, View } from "react-native";
import { getGenres } from "./app/api/getGenres";

export default function App() {
  const [data, setData] = useState(["2012"]);
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    loadGenres();
  }, []);

  const loadGenres = async () => {
    const response = await getGenres();
    setGenreList(response.genres);
  };

  return (
    <>
      <Header genreList={genreList} />
      <View style={styles.moviesContent}>
        <FlatList
          data={data}
          renderItem={({ item }) => <MoviesByYear year={item} />}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  moviesContent: {
    backgroundColor: "#121212",
    flex: 1,
  },
});
