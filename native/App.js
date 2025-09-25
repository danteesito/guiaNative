import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ejercicio1 from './Componentes/Ejercicio1';
import Ejercicio2 from './Componentes/Ejercicio2';
import Ejercicio3 from './Componentes/Ejercicio3';
import Ejercicio4 from './Componentes/Ejercicio4';
import Ejercicio5 from './Componentes/Ejercicio5';
import Ejercicio6 from './Componentes/Ejercicio6';
import Ejercicio7 from './Componentes/Ejercicio7';
import Ejercicio9 from './Componentes/Ejercicio9';

export default function App() {
  return (
    <SafeAreaProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <Ejercicio1 />
        <Ejercicio2 />
        <Ejercicio3 />
        <Ejercicio4 />
        <Ejercicio5 />
        <Ejercicio6 />
        <Ejercicio7 />
        <Ejercicio9 />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
