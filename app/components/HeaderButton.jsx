import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const HeaderButton = ({
  data,
  title,
  genreFilterValue,
  setGenreFilterValue,
}) => {
  const IS_ACTIVE = genreFilterValue.filter(
    (genre) => genre.id === data.id
  ).length;

  const handleGenrePress = (data) => {
    if (IS_ACTIVE) {
      // if genre is selected
      if (genreFilterValue.length > 1) {
        // if there are more than 1 genres selected
        const updatedGenreFilterValue = genreFilterValue.filter(
          (genre) => genre.id !== data.id
        );
        setGenreFilterValue(updatedGenreFilterValue);
      }
    } else {
      if (data.id === 0) {
        // if user has selected "All", then remove selection of all other genres
        setGenreFilterValue([
          {
            id: 0,
            name: "All",
          },
        ]);
      } else {
        // user didnt select "All", so select the genre and unselect "All" if it was selected before
        const newArr = [
          ...genreFilterValue.filter((item) => item.id !== 0),
          data,
        ];
        setGenreFilterValue(newArr);
      }
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.btnContainer,
        {
          backgroundColor: IS_ACTIVE ? "#f0283c" : "#484848",
        },
      ]}
      onPress={() => handleGenrePress(data)}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 10,
    height: 35,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});

export default HeaderButton;
