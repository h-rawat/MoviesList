import React from "react";
import { Button, TouchableHighlight } from "react-native";

const HeaderButton = ({ title, color }) => {
  return (
    <TouchableHighlight>
      <Button title={title} color={color} />
    </TouchableHighlight>
  );
};

export default HeaderButton;
