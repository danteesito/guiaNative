import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function EjercicioSeis() {
  const insets = useSafeAreaInsets();

  const juegos = [
    {
      title: "The Legend of Zelda: Breath of the Wild",
      score: 10,
      description: "Explora un vasto mundo abierto lleno de aventuras, acertijos e historia",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ223BsCmewH8GbqUg86TooDwNbwNl2GDn3w&s", 
    },
    {
      title: "Minecraft",
      score: 9.7,
      description: "Crea, explora y sobrevive en un mundo infinito lleno de bloques y posibilidades",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBw9g6jfRMqOerLIjz4rhmQK5-V3D19bbjdw&s",
    },
    {
      title: "Fortnite",
      score: 9.2,
      description: "Un battle royale lleno de acción, construcción y diversión multijugador",
      image: "https://cdn2.unrealengine.com/mkart-ch6s4-keyart-final-4k-v2-3840x2160-c2ab9c26f5df.png",
    },
  ];

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingTop: insets.top,
        backgroundColor: "#f5f5f5",
      }}
    >
      {juegos.map((juego, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: juego.image }} style={styles.image} />
          <Text style={styles.title}>{juego.title}</Text>
          <Text style={styles.score}>⭐ {juego.score}</Text>
          <Text style={styles.description}>{juego.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 12,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: "cover",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  score: {
    fontSize: 16,
    marginVertical: 4,
    color: "#FFA500",
  },
  description: {
    fontSize: 14,
    color: "#444",
  },
});
