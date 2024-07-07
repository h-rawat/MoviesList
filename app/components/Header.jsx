import React from "react";
import Constants from "expo-constants";
import { Image, StyleSheet, View } from "react-native";

import HeaderButton from "./HeaderButton";

const genreList = [
  {
    id: "1",
    name: "Action",
  },
  {
    id: "2",
    name: "Comedy",
  },
  {
    id: "3",
    name: "Horror",
  },
];

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image source={require("../assets/logo.png")} />
      <View style={styles.tabsContainer}>
        {genreList.map((genre) => (
          <HeaderButton key={genre.id} title={genre.name} />
        ))}
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
    flexDirection: "row",
    gap: 10,
    marginTop: 30,
  },
});

export default Header;
