import { View, Text, StyleSheet } from 'react-native';

export default function saude() {
  return (
    <View style={styles.container}>
      <Text>Tab [Saude]</Text>
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