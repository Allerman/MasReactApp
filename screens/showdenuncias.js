import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import api from '../api';

const ShowDenuncias = () => {
  const [denuncias, setDenuncias] = useState([]);

  useEffect(() => {
    // Obter as denúncias do backend
    async function fetchDenuncias() {
      try {
        const response = await api.get('/denuncias');
        setDenuncias(response.data);
      } catch (error) {
        console.error('Erro ao obter denúncias:', error);
      }
    }

    fetchDenuncias();
  }, []);

  return (
    <ScrollView>
      <View>
        {denuncias.map((denuncia, index) => (
          <Card key={index}>
            <ListItem>
              <ListItem.Content>
                <ListItem.Title>{denuncia.titulo}</ListItem.Title>
                <ListItem.Subtitle>{denuncia.descricao}</ListItem.Subtitle>
                <View>
                  <Text>{denuncia.endereco.road}</Text>
                  <Text>{denuncia.endereco.suburb}</Text>
                  <Text>{denuncia.endereco.city}</Text>
                  <Text>{denuncia.endereco.state}</Text>
                </View>
              </ListItem.Content>
            </ListItem>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
};

export default ShowDenuncias;
