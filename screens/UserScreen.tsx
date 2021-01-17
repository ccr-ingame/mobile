import * as React from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import tw from "tailwind-rn";

import { useSelector } from "react-redux";

import ScreenWithBottomBar from "../components/ScreenWithBottomBar";
import UserStat from "../components/User/UserStat";
import PetStat from "../components/User/PetStat";

import * as COLORS from "../constants/colors";

import { User, RootState } from "../store/types";

const UserScreen: React.FC = () => {
  const user = useSelector<RootState, User>((state) => state.auth.user!);

  console.log(user.profilePic);

  return (
    <ScreenWithBottomBar>
      <View style={tw("flex-row justify-between px-6 py-4")}>
        <View style={tw("flex-row")}>
          <View
            style={[
              tw("rounded-full mr-3"),
              { height: 60, width: 60, backgroundColor: "white" },
            ]}
          >
            {user.profilePic ? (
              <Image
                source={require("../assets/user/thumbnail.jpg")}
                style={[tw("rounded-full"), { height: "100%", width: "100%" }]}
              />
            ) : (
              <View style={tw("flex-1 items-center justify-center")}>
                <Text style={tw("text-2xl font-extrabold")}>
                  {user.displayName[0]}
                </Text>
              </View>
            )}
          </View>
          <View style={tw("justify-center")}>
            <View>
              <Text style={tw("text-white text-2xl font-bold")}>
                {user.displayName}
              </Text>
            </View>
            <View style={tw("flex-row items-center")}>
              <FontAwesome5
                name="trophy"
                size={15}
                color="white"
                style={tw("mr-1")}
              />
              <Text style={tw("text-white text-base")}>
                {user.rankPosition}
              </Text>
            </View>
          </View>
        </View>
        <View style={tw("flex-row items-center")}>
          <UserStat
            iconName="brain"
            data={user.points}
            color={COLORS.YELLOW}
            rightMargined
          />
          <UserStat
            iconName="graduation-cap"
            data={user.ongoingCourses.length}
          />
        </View>
      </View>
      <View
        style={{
          height: Dimensions.get("window").width,
          backgroundColor: "#ccc",
        }}
      >
        {user.pet ? (
          <Image
            source={require("../assets/pets/archer.png")}
            style={{ height: "100%", width: "100%" }}
          />
        ) : null}
      </View>
      <View
        style={[
          tw("flex-row items-center px-3 py-1"),
          { backgroundColor: COLORS.BLUE },
        ]}
      >
        <FontAwesome5
          name="bullseye"
          size={18}
          color="white"
          style={tw("mr-2")}
        />
        <Text style={tw("text-base text-white")}>
          <Text style={tw("font-black")}>{user.missions.length}</Text> Missões
          disponíveis
        </Text>
      </View>
      <View
        style={[
          tw("flex-1 px-3 py-3 justify-between"),
          { backgroundColor: COLORS.PURPLE },
        ]}
      >
        {user.pet ? (
          <>
            <PetStat name="HP" value={user.pet.stats.hp} />
            <PetStat name="Fome" value={user.pet.stats.hunger} />
            <PetStat name="Sede" value={user.pet.stats.thirst} />
            <PetStat name="Ataque" value={user.pet.stats.attack} />
            <PetStat name="Defesa" value={user.pet.stats.defense} />
            <PetStat name="Magia" value={user.pet.stats.magic} />
          </>
        ) : (
          <View style={tw("flex-1 items-center justify-center")}>
            <Text style={tw("text-base italic")}>
              Complete o Questionário primeiro.
            </Text>
          </View>
        )}
      </View>
    </ScreenWithBottomBar>
  );
};

export default UserScreen;
