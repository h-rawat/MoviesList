import React, { useEffect, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getMovieDetails } from "../api/getMovieDetails";

const MovieCardModal = ({ item, showModal, setShowModal }) => {
  const [data, setData] = useState();

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const response = await getMovieDetails(item.id);
    setData(response);
  };

  const getFiveCastMembers = () => {
    // get five cast members descending order of their popularity and belonging to the acting department
    return data?.cast
      ?.filter((item) => item.known_for_department === "Acting")
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 5)
      .map((item) => item.name)
      .join(", ");
  };

  const getDirector = () => {
    return data?.crew?.find((item) => item.job === "Director").name;
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={showModal}
      onRequestClose={() => {
        setShowModal(!showModal);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.CloseBtnContainer}>
            <Text style={[styles.modalTextColor, styles.title]}>
              {item.title}
            </Text>
            <TouchableHighlight onPress={() => setShowModal(!showModal)}>
              <MaterialCommunityIcons name="close" color="white" size={25} />
            </TouchableHighlight>
          </View>
          {/* <Text style={styles.modalTextColor}>
            Genres: {data?.genres?.map((genre) => genre.name).join(", ")}
          </Text> */}
          <Text style={[styles.modalTextColor, styles.overviewHeading]}>
            Cast:
          </Text>
          <Text style={[styles.modalTextColor, styles.textGray]}>
            {getFiveCastMembers()}
          </Text>
          <Text style={[styles.modalTextColor, styles.overviewHeading]}>
            Director:
          </Text>
          <Text style={[styles.modalTextColor, styles.textGray]}>
            {getDirector()}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalView: {
    margin: 80,
    width: "80%",
    flex: 1,
    backgroundColor: "#121212",
    borderRadius: 20,
    padding: 20,
  },
  CloseBtnContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  modalTextColor: {
    color: "#fff",
  },
  title: {
    fontSize: 22,
  },
  overviewHeading: {
    fontSize: 18,
    marginVertical: 5,
  },
  textGray: {
    color: "darkgray",
  },
});

export default MovieCardModal;
