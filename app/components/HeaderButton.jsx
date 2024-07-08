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
      if (genreFilterValue.length > 1) {
        const updatedGenreFilterValue = genreFilterValue.filter(
          (genre) => genre.id !== data.id
        );
        setGenreFilterValue(updatedGenreFilterValue);
      }
    } else {
      setGenreFilterValue([...genreFilterValue, data]);
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
