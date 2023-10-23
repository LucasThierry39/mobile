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
import { useState } from "react";

// -- CODIGO -- \\
export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [resultValue, setResultValue] = useState("");

  const convertToInch = () => {
    const inches = parseFloat(inputValue) / 2.54;
    setResultValue(`${inches.toFixed(4)} Polegadas`);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de medidas</Text>
      <TextInput
        style={styles.input}
        onChangeText={setInputValue}
        value={inputValue}
        placeholder="Digite em cm"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={convertToInch}>
        <Text style={styles.buttonLabel}>Converter</Text>
      </TouchableOpacity>
      <Text style={styles.result}>{resultValue}</Text>
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
  title: {
    fontSize: 24,
    color: "#00A4CD",
    margin: 8,
  },
  input: {
    height: 60,
    width: 180,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8
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
  result: {
    fontSize: 16,
    margin: 12,
  },
});
