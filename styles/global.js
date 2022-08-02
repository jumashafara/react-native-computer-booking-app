import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  heading: {
    fontWeight: "600",
    padding: 5,
    paddingLeft: 15,
    fontSize: 16,
  },
  container: {
    backgroundColor: "whitesmoke",
    padding: 15,
    fontSize: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 15,
  },
});

export const globalImages = {
  computers: {
    latitude: require("../assets/splash.png"),
  },
};
