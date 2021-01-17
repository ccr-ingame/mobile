import * as React from "react";
import { View, SafeAreaView, Text } from "react-native";
import tw from "tailwind-rn";

import * as COLORS from "../../constants/colors";

const SideMenu: React.FC = () => {
  return (
    <SafeAreaView
      style={{
        position: "absolute",
        top: 0,
        height: "100%",
        backgroundColor: COLORS.DARK_RED,
      }}
    >
      <View style={tw("ml-5 mr-20 my-12")}>
        <View style={tw("mb-10")}>
          <Text style={[tw("text-4xl font-black"), { color: COLORS.YELLOW }]}>
            Categorias
          </Text>
        </View>
        <Text style={tw("text-2xl text-white mb-5")}>TECNOLOGIA</Text>
        <Text style={tw("text-2xl text-white mb-5")}>TREINAMENTO</Text>
        <Text style={tw("text-2xl text-white mb-5")}>PREMIUM</Text>
        <Text style={tw("text-2xl text-white mb-5")}>MENTORIA</Text>
        <Text style={tw("text-2xl text-white mb-5")}>INOVAÇÃO</Text>
      </View>
    </SafeAreaView>
  );
};

export default SideMenu;
