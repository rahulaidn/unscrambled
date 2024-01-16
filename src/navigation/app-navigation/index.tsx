import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


const AppNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name={"Login"}
        component={Login}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

export default AppNavigation;
