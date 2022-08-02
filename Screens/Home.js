// from react
import React from "react";
import { globalStyles, globalImages } from "../styles/global";

// custom components
import { loginButton, signUpButton } from "../components/Buttons";
// inbuilt components
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";

const Home = ({ computers, navigation }) => {
  const logged_in = false;
  navigation.setOptions({
    headerRight: () =>
      logged_in ? (
        <></>
      ) : (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <>{loginButton(navigation)}</>
          <>{signUpButton(navigation)}</>
        </View>
      ),
  });
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Available PCs</Text>
      <FlatList
        data={computers}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details", {
                  computer: item,
                })
              }
            >
              <View style={styles.computerInfo}>
                <Text style={styles.heading}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  computerInfo: {
    backgroundColor: "white",
    borderColor: "lightgray",
    borderWidth: 1,
    padding: 15,
    margin: 10,
  },
  heading: {
    fontWeight: "500",
  },
});

export default Home;
