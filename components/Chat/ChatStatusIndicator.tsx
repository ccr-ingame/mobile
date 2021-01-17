import * as React from "react";
import { View, ViewStyle, StyleSheet } from "react-native";

type ChatStatusIndicatorProps = {
  status: "online" | "offline";
  style?: ViewStyle;
};

import * as COLORS from "../../constants/colors";

const ChatStatusIndicator = (props: ChatStatusIndicatorProps) => {
  return (
    <View
      style={[
        styles.default,
        props.status === "online" ? styles.online : styles.offline,
        props.style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  default: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  online: {
    backgroundColor: COLORS.GOOD_GREEN,
  },
  offline: {
    backgroundColor: COLORS.BAD_RED,
  },
});

export default ChatStatusIndicator;
