import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import tw from "tailwind-rn";

type UserStatProps = {
  iconName: string;
  data: string | number;
  color?: string;
  rightMargined?: boolean;
  styles?: {
    container?: object;
    icon?: object;
    label?: object;
  };
};

const UserStat: React.FC<UserStatProps> = (props) => {
  return (
    <View
      style={[
        tw("flex-row items-center" + (props.rightMargined ? " mr-6" : "")),
        props.styles?.container,
      ]}
    >
      <FontAwesome5
        name={props.iconName}
        size={22}
        color={props.color || "white"}
        style={[tw("mr-2"), props.styles?.icon]}
      />
      <Text
        style={[
          tw("text-white text-xl"),
          props.color ? { color: props.color } : null,
          props.styles?.label,
        ]}
      >
        {props.data}
      </Text>
    </View>
  );
};

export default UserStat;
