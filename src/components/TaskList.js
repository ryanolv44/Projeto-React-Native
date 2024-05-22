import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert } from 'react-native';
import api from '../api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await api.get('/tarefas');
      setTasks(response.data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível buscar as tarefas.');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/tarefas/${id}`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível deletar a tarefa.');
    }
  };

  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Text>{item.titulo}</Text>
            <Text>{item.descricao}</Text>
            <Text>{item.dataVencimento}</Text>
            <Text>{item.prioridade}</Text>
            <Text>{item.estado}</Text>
            <Button title="Deletar" onPress={() => handleDelete(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderColor: '#ddd',
    borderWidth: 1,
  },
});

export default TaskList;
