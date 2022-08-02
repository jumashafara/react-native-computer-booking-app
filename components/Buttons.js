import React from "react";
import { Button, View } from "react-native";

export const loginButton = (navigation) => (
  <View style={{ marginHorizontal: 10 }}>
    <Button title="login" onPress={() => navigation.navigate("Login")} />
  </View>
);

export const signUpButton = (navigation) => (
  <View style={{ marginHorizontal: 10 }}>
    <Button title="signup" onPress={() => navigation.navigate("Signup")} />
  </View>
);
