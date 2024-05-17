import { StyleSheet, Text, View } from 'react-native';
import TarefaList from './components/TarefaList';

export default function App() {
  return (
    <View style={styles.container}>
      <TarefaList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
