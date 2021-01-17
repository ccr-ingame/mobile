import { FontAwesome5 } from "@expo/vector-icons";
import * as React from "react";
import {
  Dimensions,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LineChart, ProgressChart } from "react-native-chart-kit";
import { useSelector } from "react-redux";
import tw from "tailwind-rn";
import ScreenWithBottomBar from "../components/ScreenWithBottomBar";
import * as COLORS from "../constants/colors";
import { RootState, User } from "../store/types";

import { useNavigation } from "@react-navigation/native";

const StatsScreen = () => {
  const user = useSelector<RootState, User>((state) => state.auth.user!);

  const navigation = useNavigation();

  return (
    <ScreenWithBottomBar>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Courses")}>
          <FontAwesome5
            name="chevron-left"
            size={30}
            color={COLORS.YELLOW}
            style={{ marginLeft: 20 }}
          />
        </TouchableOpacity>
        <Text style={[tw("flex-1 text-2xl font-black"), styles.topBarTitle]}>
          Estatísticas de {user.displayName}
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text
          style={[tw("self-start text-lg font-bold mb-2"), styles.colorYellow]}
        >
          Horas de estudo na última semana
        </Text>
        <LineChart
          data={{
            labels: [
              "11/01",
              "12/01",
              "13/01",
              "14/01",
              "15/01",
              "16/01",
              "17/01",
            ],
            datasets: [
              {
                data: [
                  Math.random() * 6,
                  Math.random() * 6,
                  Math.random() * 6,
                  Math.random() * 6,
                  Math.random() * 6,
                  Math.random() * 6,
                  Math.random() * 6,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 40} // from react-native
          height={220}
          yAxisSuffix="h"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: COLORS.PURPLE,
            backgroundGradientFrom: "#984CE4",
            backgroundGradientTo: "#671BB4",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "8",
              fill: COLORS.YELLOW,
            },
          }}
          bezier
          style={{
            borderRadius: 16,
          }}
        />
        <Text
          style={[
            tw("self-start text-lg font-bold mb-2 mt-6"),
            styles.colorYellow,
          ]}
        >
          Progresso nos cursos
        </Text>
        <ProgressChart
          data={{
            labels: ["Lógica", "Design"], // optional
            data: [0.9, 0.13],
          }}
          width={Dimensions.get("window").width - 40}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={{
            backgroundColor: COLORS.PURPLE,
            backgroundGradientFrom: "#984CE4",
            backgroundGradientTo: "#671BB4",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "8",
              fill: COLORS.YELLOW,
            },
          }}
          hideLegend={false}
          style={{ borderRadius: 16 }}
        />
        <TouchableOpacity
          style={[tw("my-6 rounded-full"), styles.shareButton]}
          onPress={() =>
            Share.share({
              message: `Confira as minhas estatísticas no app InGame da CCR: https://ccr.ingame.com/${user.username}/stats`,
            })
          }
        >
          <Text style={[tw("text-2xl font-bold"), { color: COLORS.DARK_RED }]}>
            Compartilhar Estatísticas
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenWithBottomBar>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.DARK_RED,
    height: 75,
  },
  topBarTitle: {
    textAlign: "center",
    color: COLORS.YELLOW,
  },
  contentContainer: {
    backgroundColor: COLORS.PURPLE,
    flex: 1,
    alignItems: "center",
    padding: 20,
    paddingBottom: 0,
  },
  shareButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.YELLOW,
    width: "100%",
    shadowColor: "black",
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    shadowRadius: 10,
  },
  colorYellow: {
    color: COLORS.YELLOW,
  },
});

export default StatsScreen;
