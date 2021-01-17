import * as React from "react";
import { SafeAreaView, View, Pressable, Keyboard } from "react-native";
import tw from "tailwind-rn";

import UserFooterButton from "./User/UserFooterButton";

import * as COLORS from "../constants/colors";

type ScreenWithBottomBarProps = {
  style?: object;
};

const ScreenWithBottomBar: React.FC<ScreenWithBottomBarProps> = (props) => {
  return (
    <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "space-between",
          backgroundColor: COLORS.DARK_RED,
        }}
      >
        <View style={{ flex: 1, ...props.style }}>{props.children}</View>
        <View style={tw("flex-row pt-4")}>
          <UserFooterButton
            iconName="home"
            label="Início"
            targetScreen="User"
          />
          <UserFooterButton
            iconName="graduation-cap"
            label="Meus Cursos"
            targetScreen="Courses"
          />
          <UserFooterButton
            iconName="comments"
            label="Chat"
            targetScreen="Chat"
          />
        </View>
      </SafeAreaView>
    </Pressable>
  );
};

export default ScreenWithBottomBar;
