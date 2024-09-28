import { View, Text, StyleSheet } from 'react-native';

export default function Saude() {
  return (
    <View style={styles.container}>
      <Text> Tab da Saude / Etc </Text>
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