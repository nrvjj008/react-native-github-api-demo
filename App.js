import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import UserListScreen from "./src/screens/UserListScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

//stack to keep track of the screen navigations
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserListScreen" component={UserListScreen} />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            title: "Profile",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
