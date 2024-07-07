import { useState } from "react";

import Header from "./app/components/Header";
import MoviesByYear from "./app/components/MoviesByYear";
import { FlatList, StyleSheet, View } from "react-native";

export default function App() {
  const [data, setData] = useState(["2012", "2013", "2014", "2015"]);

  return (
    <>
      <Header />
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
