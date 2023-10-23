// -- IMPORTS -- \\
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

// -- CODIGO -- \\
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de medidas</Text>
      <TextInput style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonLabel}>Converter</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

// -- STYLES -- \\

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title:{
    fontSize: 24,
    color: '#00A4CD',
    margin: 8
  },
  input: {
    height: 40,
    width: 180,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: 180,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#00A4CD",
    alignItems: "center",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
