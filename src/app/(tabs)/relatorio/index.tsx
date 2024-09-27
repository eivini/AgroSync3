import { View, Text, StyleSheet } from 'react-native';

export default function relatorio() {
  return (
    <View style={styles.container}>
      <Text>Tab [Relatorio]</Text>
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