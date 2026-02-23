import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/Login";
import Profile from "./screens/Profile";
import User from "./screens/User";
import Post from "./screens/Post";
import { LoginContext } from "./context/LoginContext";

const Stack = createNativeStackNavigator();

//Root Screen
export default function App() {
  const [userName, setUserName] = useState("");

  return (
    <LoginContext.Provider value={{ userName, setUserName }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="Post" component={Post} />
        </Stack.Navigator>
      </NavigationContainer>
    </LoginContext.Provider>
  );
}
