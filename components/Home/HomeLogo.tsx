import * as React from "react";
import { Image } from "react-native";

type HomeLogoProps = {
  size?: number | string;
};

const HomeLogo: React.FC<HomeLogoProps> = (props) => {
  return (
    <Image
      source={require("../../assets/home/home-logo.png")}
      style={{ height: props.size || "100%", width: props.size || "100%" }}
    />
  );
};

export default HomeLogo;
