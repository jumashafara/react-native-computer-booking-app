import React from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { globalStyles } from "../styles/global";

const Details = ({ route, navigation }) => {
  const { computer } = route.params;

  const handlBooking = () => {
    Alert.alert(
      "Done!",
      `${computer.name} has been reserved for you, thank you.`
    );

    navigation.goBack();
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Name</Text>
      <Text style={styles.infoContainer}>{computer.name}</Text>
      <Text style={globalStyles.heading}>Operating System</Text>
      <Text style={styles.infoContainer}>{computer.OS}</Text>
      <Text style={globalStyles.heading}>Other Specifications</Text>
      <Text style={styles.infoContainer}>{computer.details}</Text>
      <View style={globalStyles.container}>
        <Button title="Book This PC" onPress={() => handlBooking()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "white",
    padding: 15,
    margin: 10,
  },
});

export default Details;
