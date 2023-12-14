import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, TextInput } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
import { StyleSheet } from 'react-native';
import api from '../api';

const ShowDenuncias = () => {
  const [denuncias, setDenuncias] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDenuncia, setSelectedDenuncia] = useState(null);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [road, setRoad] = useState('');
  const [suburb, setSuburb] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  useEffect(() => {
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

  const handleDelete = async (id) => {
    try {
      const response = await api.delete(`/deletardenuncia/${id}`);

      if (response.status === 200) {
        setDenuncias((prevDenuncias) => prevDenuncias.filter((denuncia) => denuncia._id !== id));
      } else {
        console.error('Erro ao excluir denúncia:', response.data.error);
      }
    } catch (error) {
      console.error('Erro ao excluir denúncia:', error);
    }
  };

  const handleUpdate = (denuncia) => {
    setSelectedDenuncia(denuncia);
    setTitulo(denuncia.titulo);
    setDescricao(denuncia.descricao);
    setLatitude(denuncia.localizacao.coordinates[0].toString());
    setLongitude(denuncia.localizacao.coordinates[1].toString());
    setRoad(denuncia.endereco.road);
    setSuburb(denuncia.endereco.suburb);
    setCity(denuncia.endereco.city);
    setState(denuncia.endereco.state);
    setModalVisible(true);
  };

  const handleModalUpdate = async () => {
    try {
      const { _id } = selectedDenuncia;

      const response = await api.put(`/atualizardenuncia/${_id}`, {
        titulo,
        descricao,
        latitude,
        longitude,
        addressData: {
          road,
          suburb,
          city,
          state,
        },
      });

      if (response.status === 200) {
        setDenuncias((prevDenuncias) =>
          prevDenuncias.map((denuncia) =>
            denuncia._id === selectedDenuncia._id ? response.data.denuncia : denuncia
          )
        );
        setModalVisible(false);
        setSelectedDenuncia(null);
      } else {
        console.error('Erro ao atualizar denúncia:', response.data.error);
      }
    } catch (error) {
      console.error('Erro ao atualizar denúncia:', error);
    }
  };

  const handleModalCancel = () => {
    setModalVisible(false);
    setSelectedDenuncia(null);
  };

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
                  <Text>Rua: {denuncia.endereco.road}</Text>
                  <Text>Bairro: {denuncia.endereco.suburb}</Text>
                  <Text>Cidade: {denuncia.endereco.city}</Text>
                  <Text>Estado: {denuncia.endereco.state}</Text>
                </View>
              </ListItem.Content>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => handleUpdate(denuncia)}>
                  <Icon name="pencil" type="font-awesome" color="#517fa4" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelete(denuncia._id)}>
                  <Icon name="trash" type="font-awesome" color="#ff0000" />
                </TouchableOpacity>
              </View>
            </ListItem>
          </Card>
        ))}
      </View>

      {/* Modal de Atualização */}
    <Modal isVisible={isModalVisible}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Atualizar Denúncia</Text>
        <TextInput style={styles.textInput} value={titulo} onChangeText={(text) => setTitulo(text)} placeholder="Título" />
        <TextInput style={styles.textInput} value={descricao} onChangeText={(text) => setDescricao(text)} placeholder="Descrição" />
        <TextInput style={styles.textInput} value={latitude} onChangeText={(text) => setLatitude(text)} placeholder="Latitude" />
        <TextInput style={styles.textInput} value={longitude} onChangeText={(text) => setLongitude(text)} placeholder="Longitude" />
        <TextInput style={styles.textInput} value={road} onChangeText={(text) => setRoad(text)} placeholder="Rua" />
        <TextInput style={styles.textInput} value={suburb} onChangeText={(text) => setSuburb(text)} placeholder="Bairro" />
        <TextInput style={styles.textInput} value={city} onChangeText={(text) => setCity(text)} placeholder="Cidade" />
        <TextInput style={styles.textInput} value={state} onChangeText={(text) => setState(text)} placeholder="Estado" />
        <TouchableOpacity style={styles.button} onPress={handleModalUpdate}>
          <Text style={styles.buttonText}>Atualizar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleModalCancel}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#004A2F',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ShowDenuncias;