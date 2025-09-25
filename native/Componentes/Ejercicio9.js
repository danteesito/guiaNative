import React, { useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView, Pressable, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function EjercicioNueve() {
  const insets = useSafeAreaInsets();
  const [liked, setLiked] = useState(false);

  const hobbies = [
    "Comer",
    "Dormir ",
    "hacer caca",
    "Jugar con una pelota",
    "hacer pis",
  ];

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mini App</Text>
      </View>

      <Image
        source={{ uri: "https://placedog.net/500/500?id=5" }}
        style={styles.foto}
      />

      <Text style={styles.nombre}>Max </Text>
      <Text style={styles.info}>Edad: 3 años | Raza: Husky</Text>

      <Pressable
        style={[styles.boton, liked ? styles.botonActivo : styles.botonInactivo]}
        onPress={() => setLiked(!liked)}
      >
        <Text style={styles.botonTexto}>{liked ? "Siguiendo ❤️" : "Seguir"}</Text>
      </Pressable>

      <ScrollView
        style={styles.scrollHobbies}
        contentContainerStyle={{ paddingBottom: insets.bottom, paddingTop: 10 }}
      >
        {hobbies.map((hobby, index) => (
          <View key={index} style={styles.hobbyCard}>
            <Text style={styles.hobbyTexto}>{hobby}</Text>
          </View>
        ))}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    padding: 15,
    backgroundColor: "#F57F17",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  nombre: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0700c6ff",
    textAlign: "center",
  },
  info: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    marginBottom: 15,
  },
  boton: {
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginBottom: 10,
  },
  botonInactivo: {
    backgroundColor: "#42A5F5",
  },
  botonActivo: {
    backgroundColor: "#66BB6A",
  },
  botonTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  scrollHobbies: {
    maxHeight: 250,
  },
  hobbyCard: {
    backgroundColor: "#F7E7C8",
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  hobbyTexto: {
    fontSize: 16,
    color: "#000",
  },
});
