import { View, Text, StyleSheet } from 'react-native';

export default function Relatorio() {
  return (
    <View style={styles.container}>
      <Text> Tab dos Relatorios </Text>
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