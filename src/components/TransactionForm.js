import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import api from '../api';

const TransactionForm = ({ onTransactionCreated }) => {
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await api.post('/transacoes', { descricao, categoria, valor, data });
      onTransactionCreated(response.data);
      setDescricao('');
      setCategoria('');
      setValor('');
      setData('');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível criar a transação.');
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TextInput
        style={styles.input}
        placeholder="Categoria"
        value={categoria}
        onChangeText={setCategoria}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor"
        value={valor}
        onChangeText={setValor}
      />
      <TextInput
        style={styles.input}
        placeholder="Data"
        value={data}
        onChangeText={setData}
      />
      <Button title="Adicionar Transação" onPress={handleSubmit} />
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

export default TransactionForm;
