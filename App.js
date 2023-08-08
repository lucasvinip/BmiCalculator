import { 
  StyleSheet,
  View,
  Pressable,
  Keyboard,
  } from 'react-native';
import Title from './src/components/Title/index.js';
import Form from './src/components/Form/index.js';

export default function App() {
  return (
    <Pressable 
    onPress={Keyboard.dismiss}
    style={styles.container}
    >
        <Title/>
        <Form/>
    </Pressable>
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
