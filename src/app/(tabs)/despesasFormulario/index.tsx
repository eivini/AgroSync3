import { View, Text, StyleSheet } from 'react-native';

export default function despesas() {
  return (
    <View style={styles.container}>
      <Text>Tab [Despesas]</Text>
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