import { StyleSheet, Text, View } from "react-native";

const MovieCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text>{item.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 80,
    backgroundColor: "#424242",
    flex: 1,
    margin: 10,
    marginTop: 0,
  },
});

export default MovieCard;
