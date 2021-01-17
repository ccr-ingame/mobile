import * as React from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import tw from "tailwind-rn";

import * as COLORS from "../../constants/colors";

import { Course } from "../../store/types";

type CourseCardProps = {
  data: Course;
  style?: object | false | null;
};

const CourseCard: React.FC<CourseCardProps> = (props) => {
  return (
    <View
      style={[
        tw("rounded-2xl items-center justify-center"),
        {
          height: 140,
          width: 140,
          backgroundColor: props.data.backgroundColor,
        },
        props.style,
      ]}
    >
      <FontAwesome5
        name={props.data.icon}
        size={45}
        color={props.data.color}
        style={tw("mb-4")}
      />
      <Text style={[tw("text-xl font-bold"), { color: props.data.color }]}>
        {props.data.name}
      </Text>
      {props.data.progress && (
        <View
          style={[
            tw("rounded-full bg-white items-center justify-center"),
            {
              position: "absolute",
              right: -10,
              bottom: -10,
              height: 55,
              width: 55,
              borderWidth: 5,
              borderColor: COLORS.GOOD_GREEN,
            },
          ]}
        >
          <Text style={tw("font-bold")}>
            {Math.round(props.data.progress * 100)}%
          </Text>
        </View>
      )}
    </View>
  );
};

export default CourseCard;
