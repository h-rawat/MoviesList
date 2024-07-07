import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const HeaderButton = ({ title, color = "#484848" }) => {
  return (
    <TouchableOpacity
      style={[
        styles.btnContainer,
        {
          backgroundColor: color,
        },
      ]}
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
