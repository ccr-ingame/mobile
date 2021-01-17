import * as React from "react";
import { View, StyleSheet, Image, ViewStyle } from "react-native";
import ChatStatusIndicator from "./ChatStatusIndicator";

const THUMBNAIL_SIZE = 45;

type FriendIconProps = {
  thumbnailSource: any;
  status: "online" | "offline";
  style?: ViewStyle;
};

const FriendIcon = (props: FriendIconProps) => {
  return (
    <View style={[styles.container, props.style]}>
      <Image source={props.thumbnailSource} style={styles.image} />
      <ChatStatusIndicator
        status={props.status}
        style={styles.statusIndicator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: THUMBNAIL_SIZE,
    width: THUMBNAIL_SIZE,
    borderRadius: THUMBNAIL_SIZE / 2,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: THUMBNAIL_SIZE / 2,
  },
  statusIndicator: {
    position: "absolute",
    right: -5,
    bottom: -3,
    borderWidth: 1,
    borderColor: "white",
  },
});

export default FriendIcon;
