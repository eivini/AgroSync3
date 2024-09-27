import { View, Text, StyleSheet, Image, Button, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
   return (
    <View style={styles.container}>
      <Image 
        style={logo.container}
        source={require('../assets/logoAgroSync.jpg')} 
      />
      <Text style={logo.text}>
        AgroSync
      </Text>

      <TextInput 
        style={styles.input}
        placeholder='Email'
        placeholderTextColor={'#6B6B6B'}
        keyboardType='email-address'
        textAlign='center'
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Entrar
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const logo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1e3f34',
      justifyContent: 'center',
      alignItems: 'center',
    },
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
  },
  input: {
    backgroundColor: '#1f1e25',
    height: 40,
    width: 200,
    borderRadius: 15,
    color: '#FFF',
    padding: 10,
  },
  buttonText: {
    color: '#FFF',

  },
  button: {
    width: 80,
    height: 35,
    borderRadius: 12,
    backgroundColor: '#31cf67',
    alignItems: 'center',
    justifyContent: 'center',
  }
});