import { Link } from 'expo-router';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'react-native'

export default function App() {
  function userLogin(){
    console.log('você clicou no botão de login')
  }

   return (
    <View style={styles.container}>
      <StatusBar 
        barStyle={'dark-content'}
        backgroundColor='transparent'
        translucent
      />
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={require('../assets/logoSemFundo.png')} 
        />

        <Text style={styles.textLogin}>
          AgroSync
        </Text>

        <View style={styles.login}>
          
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
        </View>

        <View style={styles.buttonLogin}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={userLogin}
          >
            <Text style={styles.buttonText}>
              Entrar
            </Text>
          </TouchableOpacity>
          <Link href={'/(tabs)'}>Tabs</Link>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e3f34',
    alignItems: 'center',
  },
  image: {
    
  },
  login: {

  },
  textLogin: {
    color: '#FFF',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 100,
  },
  text: {
    color: '#FFFFF7',
    fontSize: 25,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1e25',
    height: 40,
    width: 220,
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
  },
  buttonLogin: {
    width: 'auto',
    marginTop: 10
  }
});