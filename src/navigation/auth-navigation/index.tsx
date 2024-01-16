import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import screens from "../../constants/screens";

const AuthNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name={screens.LOGIN}
        component={""}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screens.SIGN_UP}
        component={""}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigation;
