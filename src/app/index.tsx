import { View, Text, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logoAgroSync.jpg')} />
      <Text style={logo.text}>AgroSync</Text>
      <Text style={logo.text}>Cadastro</Text>
    </View>
  );
}


const logo = StyleSheet.create({
    text: {
        flex: 1,
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold',
        top: '0%'
    }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e3f34',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFF7',
    fontSize: 25,
    fontWeight: 'bold'
  }
});
