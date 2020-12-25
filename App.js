import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import ListingEditScreen from "./src/containers/screens/ListingEditScreen";

import LoginScreen from "./src/containers/screens/LoginScreen";
import MessageScreen from "./src/containers/screens/MessageScreen";
import RegisterScreen from "./src/containers/screens/RegisterScreen";

export default function App() {
  return (
    <ListingEditScreen />
    // <MessageScreen/>
    // <RegisterScreen/>
    // <LoginScreen/>
  );
}
