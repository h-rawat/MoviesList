import Toast from "react-native-simple-toast";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

import MovieCardModal from "./MovieCardModal";
import { getMovieDetails } from "../api/getMovieDetails";

const MovieCard = ({ item }) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${item.poster_path}`;
  const [movieDetails, setMovieDetails] = useState();
  const [showModal, setShowModal] = useState(false);

  const loadMovieDetails = async () => {
    const response = await getMovieDetails(item.id);
    if (response?.status_code === 7) {
      Toast.show(
        response?.status_message.split(":")[0] +
          " : Unable to get movie details"
      );
    } else {
      setMovieDetails(response);
      setShowModal(true);
    }
  };

  return (
    <>
      <TouchableHighlight
        onPress={() => {
          loadMovieDetails(item.id);
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
      {showModal && (
        <MovieCardModal
          item={item}
          movieDetails={movieDetails}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
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
