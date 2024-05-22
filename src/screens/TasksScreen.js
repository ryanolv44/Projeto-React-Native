import React from 'react';
import { View, StyleSheet } from 'react-native';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const TasksScreen = () => {
  const handleTaskCreated = (newTask) => {
    // Lógica para atualizar a lista de tarefas após a criação
  };

  return (
    <View style={styles.container}>
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default TasksScreen;
