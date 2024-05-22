import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import api from '../api';

const TaskForm = ({ onTaskCreated }) => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataVencimento, setDataVencimento] = useState('');
  const [prioridade, setPrioridade] = useState('');
  const [estado, setEstado] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await api.post('/tarefas', { titulo, descricao, dataVencimento, prioridade, estado });
      onTaskCreated(response.data);
      setTitulo('');
      setDescricao('');
      setDataVencimento('');
      setPrioridade('');
      setEstado('');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível criar a tarefa.');
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Vencimento"
        value={dataVencimento}
        onChangeText={setDataVencimento}
      />
      <TextInput
        style={styles.input}
        placeholder="Prioridade"
        value={prioridade}
        onChangeText={setPrioridade}
      />
      <TextInput
        style={styles.input}
        placeholder="Estado"
        value={estado}
        onChangeText={setEstado}
      />
      <Button title="Adicionar Tarefa" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default TaskForm;
