import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import History from "./History";
import Main from "./Main";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={Main}
          options={{ title: "Discount Calculator" }}
        />
        <Stack.Screen name="HistoryScreen" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
