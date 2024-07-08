import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import { FlatList, Image, StyleSheet, View } from "react-native";

import HeaderButton from "./HeaderButton";
import { getGenres } from "../api/getGenres";

const ItemSeperator = () => <View style={styles.seperator} />;

const Header = () => {
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    loadGenres();
  });

  const loadGenres = async () => {
    const response = await getGenres();
    setGenreList(response.genres);
  };

  return (
    <View style={styles.headerContainer}>
      <Image source={require("../assets/logo.png")} />
      <View style={styles.tabsContainer}>
        <FlatList
          horizontal
          data={genreList}
          renderItem={({ item }) => (
            <HeaderButton key={item.id} title={item.name} />
          )}
          ItemSeparatorComponent={ItemSeperator}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#242424",
    padding: 20,
    paddingTop: 20 + Constants.statusBarHeight,
  },
  tabsContainer: {
    marginTop: 30,
  },
  seperator: {
    width: 10,
  },
});

export default Header;
