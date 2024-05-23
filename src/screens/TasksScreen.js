import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const TasksScreen = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskCreated = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <View style={styles.container}>
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList tasks={tasks} setTasks={setTasks} />
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
