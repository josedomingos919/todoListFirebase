import { useState } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import Login from "./src/components/login";

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return (
      <Login
        changeStatus={(user) => {
          setUser(user);
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>DENTRO DA TELA DE TAREFAS</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 10,
    backgroundColor: "#f2f6fc",
  },
});
