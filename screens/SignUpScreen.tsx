import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import tw from "tailwind-rn";
import HomeButton from "../components/Home/HomeButton";
import HomeInputField from "../components/Home/HomeInputField";
import HomeLogo from "../components/Home/HomeLogo";
import * as COLORS from "../constants/colors";
import { signUp } from "../store/actions";

const SignUpScreen: React.FC = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [, setErrors] = React.useState<string | null>();

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const signUpHandler = () => {
    if (password !== confirmPassword) {
      return setErrors("Senhas não batem.");
    }

    const userData = {
      fullName,
      email,
      username,
      password,
    };

    dispatch(signUp(userData));
  };

  return (
    <SafeAreaView style={[tw("flex-1"), { backgroundColor: COLORS.PURPLE }]}>
      <Pressable style={tw("flex-1 px-12")} onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={60}
          style={tw("flex-1")}
        >
          <View style={tw("flex-1 items-center justify-center")}>
            <HomeLogo />
          </View>
          <View style={{ flex: 1.5 }}>
            <ScrollView>
              <HomeInputField
                placeholder="Nome completo"
                iconName="user-alt"
                value={fullName}
                onChangeText={setFullName}
                style={tw("mb-4")}
              />
              <HomeInputField
                placeholder="E-mail"
                iconName="envelope"
                value={email}
                onChangeText={setEmail}
                style={tw("mb-4")}
              />
              <HomeInputField
                placeholder="Nome de usuário"
                iconName="at"
                value={username}
                onChangeText={setUsername}
                style={tw("mb-4")}
              />
              <HomeInputField
                password
                placeholder="Senha"
                iconName="key"
                value={password}
                onChangeText={setPassword}
                style={tw("mb-4")}
              />
              <HomeInputField
                password
                placeholder="Confirme a senha"
                iconName="key"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                onSubmitEditing={signUpHandler}
              />
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
        <View style={tw("items-center mb-3")}>
          <HomeButton
            text="CRIAR CONTA"
            onPress={signUpHandler}
            buttonStyles={tw("mb-2")}
          />
          <Pressable onPress={() => navigation.navigate("SignIn")}>
            <Text style={[tw("text-center text-lg"), { color: COLORS.YELLOW }]}>
              Voltar ao <Text style={tw("italic")}>Login</Text>
            </Text>
          </Pressable>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default SignUpScreen;
