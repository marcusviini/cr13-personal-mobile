import React, { useState } from "react";
import { Platform } from "react-native";
import { MenuProvider } from 'react-native-popup-menu';
import { Provider } from "react-redux";
import store from './src/store'
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
import Toast from "./src/components/Toast";
import "react-native-gesture-handler";


if (Platform.OS === "android") {
  require("intl");
  require("intl/locale-data/jsonp/pt-BR");
}

export default function App() {
  const [newUser, setNewUser] = useState(false);
  const [isLoad, setIsLoad] = useState(true);

  useFonts({
    jost_400: Arsenal_400Regular,
    jost_500: Arsenal_400Regular_Italic,
    jost_600: Arsenal_700Bold_Italic,
    jost_700: Arsenal_700Bold,
  });

  if(isLoad){
    setTimeout(() => {
      setIsLoad(false);
    }, 2500);
    return <Splash/>
  }
    
  if (newUser) {
    return (
      <>
        <Provider store={store}>
          <Toast/>
          <Welcome setNewUser={setNewUser} />
        </Provider>
      </>
    );
  }

  return (
    <>
      <Provider store={store}>
        <MenuProvider>
          <Toast/>
          <Routes />
        </MenuProvider>
      </Provider>
    </>
  );
}
