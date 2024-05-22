import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert } from 'react-native';
import api from '../api';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const response = await api.get('/transacoes');
      setTransactions(response.data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível buscar as transações.');
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/transacoes/${id}`);
      setTransactions(transactions.filter(transaction => transaction.id !== id));
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível deletar a transação.');
    }
  };

  return (
    <View>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.transaction}>
            <Text>{item.descricao}</Text>
            <Text>{item.categoria}</Text>
            <Text>{item.valor}</Text>
            <Text>{item.data}</Text>
            <Button title="Deletar" onPress={() => handleDelete(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  transaction: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderColor: '#ddd',
    borderWidth: 1,
  },
});

export default TransactionList;
