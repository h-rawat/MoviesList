import { Image, StyleSheet, Text, View } from "react-native";

const MovieCard = ({ item }) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${item.poster_path}`;

  return (
    <View style={styles.card}>
      <Image source={imageUrl} />
      <Text style={styles.title}>{imageUrl}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.title}>{item.vote_average.toFixed(1)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 250,
    backgroundColor: "#424242",
    flex: 1,
    margin: 10,
    marginTop: 0,
    justifyContent: "flex-end",
    padding: 5,
  },
  title: {
    color: "#fff",
  },
});

export default MovieCard;
