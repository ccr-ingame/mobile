import * as React from "react";
import { View, TextInput, Keyboard, ReturnKeyType } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import tw from "tailwind-rn";

type HomeInputFieldProps = {
  placeholder: string;
  value: string;
  onChangeText: (newText: string) => void;
  iconName?: string;
  password?: boolean;
  style?: object;
  returnKeyType?: ReturnKeyType;
  onSubmitEditing?: () => void;
};

const HomeInputField: React.FC<HomeInputFieldProps> = (props) => (
  <View
    style={[
      tw("w-full rounded border border-gray-400 px-3 py-3 bg-white"),
      props.style,
    ]}
  >
    <View style={tw("flex-row")}>
      {props.iconName && (
        <FontAwesome5
          name={props.iconName}
          size={24}
          color="black"
          style={tw("pr-3")}
        />
      )}
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        secureTextEntry={props.password}
        returnKeyType={props.returnKeyType}
        onSubmitEditing={props.onSubmitEditing || Keyboard.dismiss}
        placeholderTextColor="black"
        style={{ flex: 1, fontSize: 16 }}
      />
    </View>
  </View>
);

export default HomeInputField;
