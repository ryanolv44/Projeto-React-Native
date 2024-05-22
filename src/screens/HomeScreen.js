import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TaskList from '../components/TaskList';
import TransactionList from '../components/TransactionList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo das Tarefas</Text>
      <TaskList />
      <Text style={styles.title}>Resumo das Finanças</Text>
      <TransactionList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default HomeScreen;
