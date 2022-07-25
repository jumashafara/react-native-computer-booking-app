// from react
import React from "react";
import { useState } from "react";

//from react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// custom components
import Home from "./Screens/Home";
import Details from "./Screens/Details";

// react-native components
import { StyleSheet } from "react-native";

const HomeStack = createNativeStackNavigator();

const App = () => {
  const [computers, setComputers] = useState([
    // dummy data
    {
      id: 1,
      name: "LATITUDE E5410",
      OS: "Windows 10",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      name: "Lenovo E40",
      OS: "Windows 11",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      name: "Mac Book Pro",
      OS: "MacOS",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      name: "HP Sweep",
      OS: "ChromeOS",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      name: "Acer Mine",
      OS: "Windows 8.1",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]);

  const headerOptions = {
    headerStyle: {
      backgroundColor: "forestgreen",
    },
    headerTitleStyle: { color: "white", fontSize: 20 },
    headerTintColor: "white",
  };
  return (
    <NavigationContainer>
      <HomeStack.Navigator screenOptions={headerOptions}>
        <HomeStack.Screen name="Data Idea PC">
          {(props) => <Home {...props} computers={computers} />}
        </HomeStack.Screen>
        <HomeStack.Screen name="Details" component={Details} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
