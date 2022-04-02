import React, { useState } from "react";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MenuProvider } from "react-native-popup-menu";
import {
  useFonts,
  Arsenal_400Regular,
  Arsenal_400Regular_Italic,
  Arsenal_700Bold_Italic,
  Arsenal_700Bold,
} from "@expo-google-fonts/arsenal";
import Routes from "./src/routes";
import Splash from "./src/pages/Splash";
import Welcome from "./src/pages/Welcome";
import "react-native-gesture-handler";

if (Platform.OS === "android") {
  require("intl");
  require("intl/locale-data/jsonp/pt-BR");
}

export default function App() {
  // TODO: save in database
  const [newUser, setNewUser] = useState(true);

  let [fontsLoaded] = useFonts({
    jost_400: Arsenal_400Regular,
    jost_500: Arsenal_400Regular_Italic,
    jost_600: Arsenal_700Bold_Italic,
    jost_700: Arsenal_700Bold,
  });

  if (!fontsLoaded) {
    return <Splash/>;
  }

  if (newUser) {
    return (
      <>
        <Welcome setNewUser={setNewUser} />
        <StatusBar style="light" />
      </>
    );
  }

  return (
    <>
      <MenuProvider>
        <Routes />
      </MenuProvider>
      <StatusBar style="light" />
    </>
  );
}
