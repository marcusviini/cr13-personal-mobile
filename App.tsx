import React, { useState } from "react";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MenuProvider } from "react-native-popup-menu";
import {
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
  Jost_700Bold,
  useFonts,
} from "@expo-google-fonts/jost";
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
    jost_400: Jost_400Regular,
    jost_500: Jost_500Medium,
    jost_600: Jost_600SemiBold,
    jost_700: Jost_700Bold,
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
