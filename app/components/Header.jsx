import React from "react";
import Constants from "expo-constants";
import { FlatList, Image, StyleSheet, View } from "react-native";

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
  {
    id: "4",
    name: "Horror",
  },
  {
    id: "5",
    name: "Horror",
  },
  {
    id: "6",
    name: "Horror",
  },
];

const ItemSeperator = () => <View style={styles.seperator} />;

const Header = () => {
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
