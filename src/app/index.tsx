import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
   return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={require('../assets/logoSemFundo.png')} 
      />
      <Image 
        style={styles.image}
        source={require('../assets/loginMato.png')} 
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

      <TextInput 
        style={styles.input}
        placeholder='Senha'
        placeholderTextColor={'#6B6B6B'}
        secureTextEntry={true}
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
  text: {
    color: '#FFF',
    fontSize: 35,
    fontWeight: 'bold',
    top: '0%',
    margin: 30,
  }
})

const styles = StyleSheet.create({
  container: {
    marginTop: '0%',
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
    marginBottom: 5,
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