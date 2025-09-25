import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function Ejercicio() {
  const frases = [
  "El hombre que ella siempre llama, sí, ese soy yo",
    "El que la acompaña cuando llora y la cuida con amor",
    "El que ella quiere cerca cuando la noche es larga",
    "El que la hace reír, el que comparte su alma",
    "Es que ella me prefiere por cómo la trato, sin prisa",
    "Quiere estar conmigo, siente que todo encaja y avisa",
    "Siempre la abrazo fuerte cuando necesita calor",
    "Yo soy su compañero, ella mi luz y mi motor",
    "Cuando está sola me llama, y vuelvo a su lugar",
    "Soy su compañero fiel, su calma al terminar el día"
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {frases.map((frase, index) => (
          <Text key={index} style={styles.frase}>
            {frase}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  frase: {
    fontSize: 18,
    marginVertical: 10,
    color: "#000000ff", 
    textAlign: "center",
  },
});