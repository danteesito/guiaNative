import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

function Ejercicio() {
  return (
    <View style={styles.container}>
    <Image
      source={{ uri: 'https://wallpapers.com/images/hd/john-cena-with-wwe-belt-rx5tp0g1i4k4y3e7.jpg' }}
      style={styles.imagen}
    />

      <Text style={styles.nombre}>Jhon Cena</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#51ff00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    width: 150,
    height: 150,
    borderRadius: 75, 
    marginBottom: 15,
  },
  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000ff', 
  },
});

export default Ejercicio;