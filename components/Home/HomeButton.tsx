import * as React from "react";
import { TouchableHighlight, Text } from "react-native";
import tw from "tailwind-rn";

import * as COLORS from "../../constants/colors";

type HomeButtonProps = {
  text: string;
  onPress: () => void;
  buttonStyles?: object;
  textStyles?: object;
};

const HomeButton: React.FC<HomeButtonProps> = (props) => {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={[
        tw("w-full items-center rounded-xl px-4 py-4"),
        { backgroundColor: COLORS.DARK_RED },
        props.buttonStyles,
      ]}
      underlayColor="#aaa"
    >
      <Text
        style={[
          tw("text-white text-3xl"),
          { color: COLORS.YELLOW },
          props.textStyles,
        ]}
      >
        {props.text}
      </Text>
    </TouchableHighlight>
  );
};

export default HomeButton;
