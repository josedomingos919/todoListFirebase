import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function Login() {
  const [type, setType] = useState("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Seu email"
        style={styles.input}
      />

      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="******"
        style={styles.input}
      />

      <TouchableOpacity
        onPress={handleLogin}
        style={[
          styles.handleLogin,
          {
            backgroundColor: type == "login" ? "#3ea6f2" : "#141414",
          },
        ]}
      >
        <Text style={styles.loginText}>
          {type == "login" ? "Acessar" : "Cadastrar"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          setType((type) => (type == "login" ? "cadastrar" : "login"))
        }
      >
        <Text style={{ textAlign: "center" }}>
          {type == "login" ? "Criar uma conta" : "Já possuo uma conta"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#f2f6fc",
    paddingHorizontal: 10,
  },
  input: {
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 10,
    height: 45,
    borderWidth: 1,
    borderColor: "#141414",
  },
  handleLogin: {
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    marginBottom: 10,
  },
  loginText: {
    color: "#fff",
    fontSize: 17,
  },
});
