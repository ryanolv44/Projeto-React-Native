import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TaskList from '../components/TaskList';
import TransactionList from '../components/TransactionList';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Resumo das Tarefas</Text>
      <TaskList />
      <Text style={styles.title}>Resumo das Finanças</Text>
      <TransactionList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default HomeScreen;
