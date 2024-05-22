import React from 'react';
import { View, StyleSheet } from 'react-native';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';

const FinancesScreen = () => {
  const handleTransactionCreated = (newTransaction) => {
    // Lógica para atualizar a lista de transações após a criação
  };

  return (
    <View style={styles.container}>
      <TransactionForm onTransactionCreated={handleTransactionCreated} />
      <TransactionList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default FinancesScreen;
