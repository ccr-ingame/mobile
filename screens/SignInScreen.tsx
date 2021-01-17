import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import tw from "tailwind-rn";
import HomeButton from "../components/Home/HomeButton";
import HomeInputField from "../components/Home/HomeInputField";
import HomeLogo from "../components/Home/HomeLogo";
import * as COLORS from "../constants/colors";
import { signIn } from "../store/actions";

const SignInScreen: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [, setErrors] = React.useState<string | null>();

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const signInHandler = () => {
    if (!(username && password)) {
      return setErrors("Nome de usuário e/ou senha inválidos.");
    }
    dispatch(signIn(username, password));
  };

  return (
    <SafeAreaView style={[tw("flex-1"), { backgroundColor: COLORS.PURPLE }]}>
      <Pressable style={tw("flex-1")} onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={tw("flex-1 mx-12")}
        >
          <View style={tw("flex-1 items-center justify-center")}>
            <HomeLogo />
          </View>
          <View style={tw("flex-1")}>
            <HomeInputField
              placeholder="Nome de usuário"
              iconName="user-alt"
              value={username}
              onChangeText={setUsername}
              style={tw("mb-6")}
            />
            <HomeInputField
              placeholder="Senha"
              iconName="key"
              value={password}
              onChangeText={setPassword}
              style={tw("mb-6")}
              returnKeyType="done"
              onSubmitEditing={signInHandler}
            />
            <Text
              style={[
                tw("text-center text-lg underline"),
                { color: COLORS.YELLOW },
              ]}
            >
              Esqueceu a senha?
            </Text>
          </View>
          <View style={tw("items-center mb-12")}>
            <HomeButton
              text="LOGIN"
              onPress={signInHandler}
              buttonStyles={tw("mb-2")}
            />
            <Pressable onPress={() => navigation.navigate("SignUp")}>
              <Text
                style={[tw("text-center text-lg"), { color: COLORS.YELLOW }]}
              >
                Criar conta
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </Pressable>
    </SafeAreaView>
  );
};

export default SignInScreen;
