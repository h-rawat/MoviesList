import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import MovieCardModal from "./MovieCardModal";

const MovieCard = ({ item }) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${item.poster_path}`;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <TouchableHighlight
        onPress={() => {
          console.log("pressed");
          setShowModal(true);
        }}
        style={styles.card}
      >
        <View>
          <Image source={imageUrl} />
          <Text style={styles.title}>{imageUrl}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title}>{item.vote_average.toFixed(1)}</Text>
        </View>
      </TouchableHighlight>
      <MovieCardModal
        item={item}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
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
