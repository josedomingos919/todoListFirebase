import { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from "react-native";

import Login from "./src/components/login";
import TaskList from "./src/components/taskList";
import { dataBase, firebaseDatabase } from "./src/services/firebaseConnection";

let tasks = [
  { key: 1, nome: "Comprar Teste" },
  { key: 2, nome: "Estudar Javascript" },
];

export default function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState("");

  function handleDelete(key) {
    console.log(key);
  }

  function handleEdit(data) {
    console.log(data);
  }

  function handleAdd() {
    if (newTask == "") return;

    // criar referencia na bd
    const taskRef = firebaseDatabase.ref(dataBase, "tarefas");

    // adicionar um no a essa referencia
    let tarefasRef = firebaseDatabase.child(taskRef, user);

    // gerar chave aleatoria
    let chave = firebaseDatabase.push(tarefasRef).key;

    //adicionar no chave da tarefa
    let newTaskReferByChave = firebaseDatabase.child(tarefasRef, chave);

    //salvar elemento no firebase
    firebaseDatabase
      .set(newTaskReferByChave, {
        name: newTask,
      })
      .then(() => {
        const data = {
          key: chave,
          nome: newTask,
        };

        setTasks((prev) => [data, ...prev]);
      });

    Keyboard.dismiss();
    setNewTask("");
  }

  if (!user) {
    return <Login changeStatus={setUser} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTask}>
        <TextInput
          style={styles.input}
          placeholder="O que vai fazer hoje?"
          value={newTask}
          onChangeText={setNewTask}
        />
        <TouchableOpacity onPress={handleAdd} style={styles.buttonAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={({ key }) => key}
        renderItem={({ item }) => {
          return (
            <TaskList
              deleteItem={handleDelete}
              editItem={handleEdit}
              data={item}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
    backgroundColor: "#f2f6fc",
  },
  containerTask: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#141414",
    height: 45,
  },
  buttonAdd: {
    backgroundColor: "#141414",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
    paddingHorizontal: 14,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 22,
  },
});
