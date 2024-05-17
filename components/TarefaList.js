// src/components/TarefaList.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import axios from 'axios';

const TarefaList = () => {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/tarefas')
      .then(response => setTarefas(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View>
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.titulo}</Text>
            <Text>{item.descricao}</Text>
            <Text>{item.dataVencimento}</Text>
            <Text>{item.prioridade}</Text>
            <Text>{item.estado}</Text>
            <Button title="Editar" onPress={() => { /* Navegar para tela de edição */ }} />
            <Button title="Excluir" onPress={() => { /* Implementar exclusão */ }} />
          </View>
        )}
      />
    </View>
  );
};

export default TarefaList;
