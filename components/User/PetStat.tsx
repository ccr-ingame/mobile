import * as React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-rn";

import * as COLORS from "../../constants/colors";

type PetStatProps = {
  name: string;
  value: number;
};

const PetStat: React.FC<PetStatProps> = (props) => {
  return (
    <View style={tw("w-full flex-row items-center")}>
      <View style={{ flex: 1 }}>
        <Text style={tw("text-white text-base font-bold")}>{props.name}</Text>
      </View>
      <View style={[tw("h-4 bg-gray-100 rounded-full"), { flex: 4 }]}>
        <View
          style={[
            tw("rounded-full"),
            {
              backgroundColor: COLORS.GOOD_GREEN,
              height: "100%",
              width: `${Math.round(props.value * 100)}%`,
            },
          ]}
        ></View>
      </View>
    </View>
  );
};

export default PetStat;
