import * as React from "react";
import { TouchableOpacity, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import tw from "tailwind-rn";

import { useNavigation, useRoute } from "@react-navigation/native";

type UserFooterButtonProps = {
  iconName: string;
  label: string;
  targetScreen: string;
};

const UserFooterButton: React.FC<UserFooterButtonProps> = (props) => {
  const navigation = useNavigation();
  const route = useRoute();

  const color = route.name === props.targetScreen ? "white" : "#777";

  return (
    <TouchableOpacity
      style={{ flex: 1, alignItems: "center" }}
      onPress={() => navigation.navigate(props.targetScreen)}
    >
      <FontAwesome5
        name={props.iconName}
        size={30}
        color={color}
        style={tw("mb-2")}
      />
      <Text style={{ color }}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default UserFooterButton;
