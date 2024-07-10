import Toast from "react-native-simple-toast";
import { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

import MovieCardModal from "./MovieCardModal";
import { getMovieDetails } from "../api/getMovieDetails";

const MovieCard = ({ item, genreList, noOfColumns }) => {
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
        style={[
          styles.card,
          {
            maxWidth: Dimensions.get("window").width / noOfColumns - 30,
          },
        ]}
      >
        <View>
          <ImageBackground
            source={{
              uri: imageUrl,
            }}
            style={styles.imageBackground}
          >
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.title}>{item.vote_average.toFixed(1)}</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableHighlight>
      {showModal && (
        <MovieCardModal
          item={item}
          movieDetails={movieDetails}
          showModal={showModal}
          setShowModal={setShowModal}
          genreList={genreList}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: "auto",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "flex-end",
    marginTop: "auto",
    width: "100%",
    padding: 5,
  },
  card: {
    height: 250,
    backgroundColor: "#424242",
    flex: 1,
    margin: 10,
    marginTop: 0,
  },
  title: {
    color: "#fff",
  },
});

export default MovieCard;
