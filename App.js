import React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import History from "./History";
import Main from "./Main";

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen
          name="MainScreen"
          component={Main}
          options={{
            title: "Discount Calculator",
          }}
        />
        <Stack.Screen
          name="HistoryScreen"
          component={History}
          // options={{ headerBackVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
