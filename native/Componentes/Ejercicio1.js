import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function Ejercicio() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}> hola mundo con react</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00d5ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 26, 
    color: 'black', 
  },
});

export default Ejercicio;