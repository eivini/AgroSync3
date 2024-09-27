import { View, Text, StyleSheet } from 'react-native';

export default function cadastro() {
  return (
    <View style={styles.container}>
      <Text>Tab [Cadastro]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});