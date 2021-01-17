import * as React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-rn";

import CourseCard from "./CourseCard";

import { Course } from "../../store/types";

type CoursesSectionProps = {
  title: string;
  courses: Course[];
  titleColor?: string;
};

const CoursesSection: React.FC<CoursesSectionProps> = (props) => {
  return (
    <View style={tw("mb-10")}>
      <View
        style={[
          tw("border-b mb-4"),
          { borderColor: props.titleColor || "black" },
        ]}
      >
        <Text
          style={[
            tw("text-3xl font-extrabold"),
            { color: props.titleColor || "black" },
          ]}
        >
          {props.title}
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        {props.courses.map((c) => (
          <CourseCard key={c.id} data={c} style={tw("mr-4")} />
        ))}
      </View>
    </View>
  );
};

export default CoursesSection;
