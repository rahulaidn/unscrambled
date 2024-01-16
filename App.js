import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screen/Home";
import Challenge from "./src/screen/Challenge";
import NewChallenge from "./src/screen/Challenge2";
import Lost from "./src/screen/Lost";
import Win from "./src/screen/Win";
import Wrong from "./src/screen/Wrong";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Challenge"
        component={Challenge}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="NewChallenge"
        component={NewChallenge}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Lost"
        component={Lost}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Win"
        component={Win}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Wrong"
        component={Wrong}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  
  );
}
