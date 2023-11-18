import { useContext } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { FavoritesContext } from "../store/context/FavoriteMovieContext";
import { Ionicons } from "@expo/vector-icons";
import { moviesData } from "../data/movies";
import { useNavigation } from "@react-navigation/native";
function FavoritesScreen() {
  const navigation = useNavigation();
  const favoriteMovieCtx = useContext(FavoritesContext);
  const favoriteMovie = moviesData.filter((movie) =>
    favoriteMovieCtx.ids.includes(movie.id)
  );
  function renderMovieItem(itemData) {
    const item = itemData.item;
    const movieItemProps = {
      id: item.id,
      poster: item.backdrop,
      title: item.title,
      genres: item.genre,
      rating: item.rating,
      description: item.description,
    };
    const id = item.id;
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("MovieDetails", { id })}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 175,
                height: 100,
                marginEnd: 20,
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <Image
                source={{ uri: movieItemProps.poster }}
                style={{ flex: 1, resizeMode: "cover" }}
              />
            </View>

            <Text style={{ width: 125, color: "white", fontWeight: "bold" }}>
              {movieItemProps.title}
            </Text>
          </View>
          <Ionicons name="play-circle-outline" color={"white"} size={46} />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList data={favoriteMovie} renderItem={renderMovieItem} />
    </View>
  );
}
export default FavoritesScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#1E1E1E",
    paddingTop: 100,
  },
});
