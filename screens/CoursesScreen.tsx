import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import tw from "tailwind-rn";
import CoursesSection from "../components/Courses/CoursesSection";
import SideMenu from "../components/Courses/SideMenu";
import ScreenWithBottomBar from "../components/ScreenWithBottomBar";
import * as COLORS from "../constants/colors";
import { DUMMY_BUSINESS_COURSES, DUMMY_TECH_COURSES } from "../constants/dummy";
import { CoursesScreenNavigationProp } from "../navigation/stacks/types";
import { RootState, User } from "../store/types";

const CoursesScreen: React.FC = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const user = useSelector<RootState, User>((state) => state.auth.user!);

  const navigation = useNavigation<CoursesScreenNavigationProp>();

  return (
    <>
      <ScreenWithBottomBar style={{ backgroundColor: "white" }}>
        <View
          style={[
            tw("flex-row items-center px-6 py-4"),
            { backgroundColor: COLORS.DARK_RED, height: 75 },
          ]}
        >
          <Pressable onPress={() => setShowMenu(true)}>
            <FontAwesome5
              name="bars"
              size={32}
              color="white"
              style={tw("mr-6 my-1")}
            />
          </Pressable>
          <View
            style={[
              tw("flex-row items-center h-12 rounded-xl flex-1 pl-2 py-2"),
              { backgroundColor: COLORS.YELLOW },
            ]}
          >
            <TextInput
              style={tw("flex-1 h-full bg-white rounded-full px-3")}
              placeholder="Buscar curso..."
              placeholderTextColor="#333"
            />
            <FontAwesome5
              name="search"
              size={25}
              color={COLORS.DARK_RED}
              style={tw("mx-3")}
            />
          </View>
        </View>
        <TouchableOpacity
          style={[
            tw("mx-6 mt-4 mb-6 p-4 rounded-full"),
            {
              backgroundColor: COLORS.PURPLE,
              shadowColor: "black",
              shadowOpacity: 0.6,
              shadowOffset: {
                height: 5,
                width: 5,
              },
              shadowRadius: 7,
            },
          ]}
          onPress={() => navigation.navigate("Stats")}
        >
          <Text style={tw("text-center text-white text-lg font-bold")}>
            Ver minhas estatísticas
          </Text>
        </TouchableOpacity>
        <ScrollView style={[tw("px-6 pb-4"), { flex: 1 }]}>
          <CoursesSection
            title="Meus Cursos"
            courses={user.ongoingCourses}
            titleColor={COLORS.DARK_RED}
          />
          <CoursesSection
            title="Tecnologia"
            courses={DUMMY_TECH_COURSES}
            titleColor={COLORS.GOOD_GREEN}
          />
          <CoursesSection
            title="Empreendedorismo"
            courses={DUMMY_BUSINESS_COURSES}
            titleColor={COLORS.PURPLE}
          />
        </ScrollView>
      </ScreenWithBottomBar>
      {showMenu && (
        <Pressable
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
          onPress={() => setShowMenu(false)}
        >
          <SideMenu />
        </Pressable>
      )}
    </>
  );
};

export default CoursesScreen;
