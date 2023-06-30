import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Card from './Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/Central-Perk-Logo.png')} style={{width: 180, height: 120}} resizeMode={"stretch"} />
      <Text style={{marginBottom: 20}}>Proba nuestro cafe</Text>
      <Card />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0
  },
});
