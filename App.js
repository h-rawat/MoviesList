import React, { useEffect, useCallback, useState } from "react";
import Toast from "react-native-simple-toast";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Header from "./app/components/Header";
import MoviesByYear from "./app/components/MoviesByYear";
import { getGenres } from "./app/api/getGenres";

export default function App() {
  const [data, setData] = useState(["2012"]);
  const [genreList, setGenreList] = useState([]);
  const [genreFilterValue, setGenreFilterValue] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadGenres();
  }, []);

  const loadGenres = async () => {
    const response = await getGenres();
    if (response?.status_code === 7) {
      Toast.show(
        response?.status_message.split(":")[0] + " : Unable to get genres"
      );
    } else {
      const genreList = [{ id: 0, name: "All" }, ...response.genres];
      setGenreList(genreList);
      setGenreFilterValue([
        {
          id: 0,
          name: "All",
        },
      ]);
    }
  };

  const loadMoreMovies = async (direction) => {
    if (loading) return;
    setLoading(true);

    let newYear;
    if (direction === "up") {
      newYear = (parseInt(data[0]) - 1).toString();
      setData([newYear, ...data]);
    } else if (direction === "down") {
      newYear = (parseInt(data[data.length - 1]) + 1).toString();
      setData([...data, newYear]);
    }

    setLoading(false);
  };

  const handleScroll = (event) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isCloseToTop = contentOffset.y <= 50;
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 50;

    if (isCloseToTop) {
      loadMoreMovies("up");
    }

    if (isCloseToBottom) {
      loadMoreMovies("down");
    }
  };

  const renderItem = useCallback(
    ({ item }) => (
      <MoviesByYear
        year={item}
        genreFilterValue={genreFilterValue}
        genreList={genreList}
      />
    ),
    [genreFilterValue, genreList]
  );

  const keyExtractor = useCallback((item) => item.toString(), []);

  return (
    <>
      <Header
        genreList={genreList}
        genreFilterValue={genreFilterValue}
        setGenreFilterValue={setGenreFilterValue}
      />
      <View style={styles.moviesContent}>
        {genreList.length === 0 ? (
          <Text style={styles.noDataText}>No Data Available</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            onScroll={handleScroll}
            scrollEventThrottle={16} // in ms
            ListFooterComponent={
              loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
              ) : null
            }
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  moviesContent: {
    backgroundColor: "#121212",
    flex: 1,
  },
  noDataText: {
    color: "#fff",
    marginTop: 20,
    marginHorizontal: "auto",
    fontSize: 20,
  },
});
