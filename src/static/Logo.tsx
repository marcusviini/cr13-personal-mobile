import React from "react";
import { Image } from "react-native";

interface LogoProps {
  width: number;
  height: number;
}

export const Logo = ({ width, height }: LogoProps) => (
  <>
    <Image
      style={{
        width: width,
        height: height,
        resizeMode: "contain",
      }}
      source={require("../../assets/logoPrincipal.png")}
    />
  </>
);
