import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
{
  /* <Feather name="edit" size={24} color="black" /> */
}
export default function TaskList({ data, deleteItem, editItem }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => deleteItem(data.key)}
        style={{ marginRight: 10 }}
      >
        <FontAwesome name="trash" size={20} color="#fff" />
      </TouchableOpacity>

      <View style={styles.taskContainer}>
        <TouchableWithoutFeedback onPress={() => editItem(data)}>
          <Text style={styles.textTask}>{data.nome}</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#121212",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
  },
  taskContainer: {
    paddingRight: 10,
  },
  textTask: {
    color: "#fff",
    paddingRight: 10,
  },
});
