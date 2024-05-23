import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';

const FinancesScreen = () => {
  const [transactions, setTransactions] = useState([]);

  const handleTransactionCreated = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <View style={styles.container}>
      <TransactionForm onTransactionCreated={handleTransactionCreated} />
      <TransactionList transactions={transactions} setTransactions={setTransactions} />
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
