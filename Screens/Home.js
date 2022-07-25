// from react
import React from "react";
import { globalStyles } from "../styles/globalStyles";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextComponent,
} from "react-native";

const Home = ({ computers, navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Available PCs</Text>
      <FlatList
        data={computers}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", { computer: item })}
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
