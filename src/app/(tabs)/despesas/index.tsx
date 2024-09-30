import { View, Text, StyleSheet } from 'react-native';

export default function Despesas() {
  return (
    <View style={styles.container}>
      <Text> Tab das Despesas </Text>
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