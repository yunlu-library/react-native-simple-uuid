import { Text, View, StyleSheet } from 'react-native';
import uuid from 'react-native-simple-uuid';

const result = uuid.v4();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
