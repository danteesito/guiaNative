import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";

export default function EjercicioSiete() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.texto}>StatusBar Light</Text>

      <View style={styles.seccionOscura}>
        <StatusBar style="dark" />
        <Text style={styles.textoBlanco}>StatusBar Dark</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001e39ff",
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontSize: 10,
    color: "#fff",
    marginBottom: 5,
  },
  seccionOscura: {
    backgroundColor: "#f7c8e9ff", // rosa claro
    padding: 5,
    borderRadius: 10,
    marginTop: 5,
  },
  textoBlanco: {
    fontSize: 10,
    color: "#000",
  },
});