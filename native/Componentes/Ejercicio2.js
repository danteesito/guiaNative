import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function Ejercicio() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>dante espinoza</Text>
      <Text style={styles.texto}>6to año</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002fffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 26, 
    color: '#000000ff', 
    fontWeight: 'bold',
    marginTop: 5, 
  },
});

export default Ejercicio;