import { FontAwesome5 } from "@expo/vector-icons";
import * as React from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import tw from "tailwind-rn";
import ChatStatusIndicator from "../components/Chat/ChatStatusIndicator";
import FriendIcon from "../components/Chat/FriendIcon";
import ScreenWithBottomBar from "../components/ScreenWithBottomBar";
import * as COLORS from "../constants/colors";
import { showMessage } from "react-native-flash-message";

const ChatScreen = () => {
  const [chatMsg, setChatMsg] = React.useState("");

  const sendMessageHandler = () => {
    showMessage({
      message: "Mensagem global enviada!",
      description: `"${chatMsg}"`,
      type: "success",
    });
    setChatMsg("");
    Keyboard.dismiss();
  };

  return (
    <ScreenWithBottomBar>
      <View style={[tw("px-6"), styles.topBar]}>
        <View style={styles.flexRow}>
          <ChatStatusIndicator status="online" />
          <Text style={styles.statusText}>Online</Text>
        </View>
        <View style={styles.flexRow}>
          <FriendIcon
            thumbnailSource={require("../assets/user/friends/joana.jpeg")}
            status="offline"
            style={styles.friendIconMarginRight}
          />
          <FriendIcon
            thumbnailSource={require("../assets/user/friends/joseph.jpeg")}
            status="offline"
            style={styles.friendIconMarginRight}
          />
          <FriendIcon
            thumbnailSource={require("../assets/user/friends/maria.jpeg")}
            status="offline"
          />
        </View>
      </View>
      <View style={[tw("px-10"), styles.contentContainer]}>
        <FontAwesome5
          name="sad-tear"
          size={90}
          color={COLORS.BAD_RED}
          style={tw("mb-10")}
        />
        <Text style={tw("text-lg text-center")}>
          Que pena, você não tem nenhum amigo online no momento.
        </Text>
      </View>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={60}
        style={styles.messageContainer}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.messageInputField}
            placeholder="Enviar mensagem global..."
            value={chatMsg}
            onChangeText={setChatMsg}
          />
          <TouchableOpacity
            style={styles.sendMessageButton}
            onPress={sendMessageHandler}
          >
            <FontAwesome5
              name="paper-plane"
              size={30}
              color={COLORS.DARK_RED}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScreenWithBottomBar>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.DARK_RED,
    height: 75,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusText: {
    fontSize: 16,
    color: "white",
    marginLeft: 7,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  messageContainer: {
    position: "absolute",
    bottom: 12,
    height: 60,
    width: "100%",
    paddingHorizontal: 12,
  },
  inputContainer: {
    flexDirection: "row",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  messageInputField: {
    flex: 1,
    height: "100%",
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  sendMessageButton: {
    height: "100%",
    justifyContent: "center",
    backgroundColor: COLORS.YELLOW,
    borderRadius: 10,
    marginLeft: 12,
    paddingHorizontal: 20,
  },
  friendIconMarginRight: {
    marginRight: 10,
  },
});

export default ChatScreen;
