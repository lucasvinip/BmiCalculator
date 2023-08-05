import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title/index.js';
import Form from './src/components/Form/index.js';

export default function App() {
  return (
    <View style={styles.container}>
        <Title/>
        <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:'space-evenly',
    backgroundColor: '#e0e5e5',
    paddingTop: 80
  },
});
