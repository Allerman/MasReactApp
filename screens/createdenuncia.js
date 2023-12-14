import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import * as Location from 'expo-location';

const Createdenuncia = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [road, setRoad] = useState(''); 
  const [suburb, setSuburb] = useState(''); 
  const [city, setCity] = useState(''); 
  const [state, setState] = useState(''); 
  const [address, setAddress] = useState('');
  const [denunciaLocation, setDenunciaLocation] = useState(null);

  const novadenuncia = axios.create({
    baseURL: "http://192.168.27.103:3000"
  })

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permissão de localização não concedida!');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setDenunciaLocation(location.coords);

      // Obter o endereço correspondente às coordenadas
      const addressResponse = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.coords.latitude}&lon=${location.coords.longitude}&zoom=18&addressdetails=1`
      );

      const addressData = await addressResponse.json();

      if (addressData.address) {
        const { road, suburb, city, state } = addressData.address;
        setRoad(road);
        setSuburb(suburb);
        setCity(city);
        setState(state);
        setAddress(`${road}, ${suburb}, ${city}, ${state} `);
      } else {
        setAddress('Endereço não encontrado');
      }
    } catch (error) {
      console.error('Erro ao obter localização:', error);
    }
  };

  const submitDenuncia = async () => {
    try {
      if (!title || !text || !address || !denunciaLocation) {
        console.error('Por favor, preencha todos os campos antes de enviar a denúncia.');
        return;
      }
  
      const formData = {
        titulo: title,
        descricao: text,
        latitude: denunciaLocation.latitude,
        longitude: denunciaLocation.longitude,
        addressData: {
          road,
          suburb,
          city,
          state,
        },
      };
  
      // Fazer a requisição POST para criar uma nova denúncia
      const response = await novadenuncia.post('/novadenuncia', formData);
  
      if (response.status === 201) {
        console.log('Denúncia enviada com sucesso');
  
        // Limpar os campos após o envio bem-sucedido
        setTitle('');
        setText('');
        setRoad('');
        setSuburb('');
        setCity('');
        setState('');
        setAddress('');
        setDenunciaLocation(null);
      } else {
        console.error('Erro ao criar denúncia:', response.data.error);
      }
    } catch (error) {
      console.error('Erro ao enviar denúncia:', error);
    }
  };

  return (
    <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, color: '#004A2F', fontWeight: 'bold' }}>
        Bem-vindo ao MAS - Monitoramento Ambiental em Suape
      </Text>

      <TextInput
        style={{
          width: '80%',
          height: 40,
          borderColor: '#004A2F',
          borderWidth: 2,
          borderRadius: 10,
          padding: 10,
          marginVertical: 10,
        }}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={{
          width: '80%',
          height: 80,
          borderColor: '#004A2F',
          borderWidth: 2,
          borderRadius: 10,
          padding: 10,
          marginVertical: 10,
        }}
        placeholder="Texto da Denúncia"
        multiline
        numberOfLines={4}
        value={text}
        onChangeText={setText}
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#004A2F',
          padding: 15,
          borderRadius: 10,
          marginVertical: 10,
        }}
        onPress={getLocation}
      >
                <Text style={{ color: '#FFF', fontSize: 16 }}>Obter Endereço Atual</Text>
      </TouchableOpacity>

      {/* Novos campos para exibir os dados obtidos da localização */}
      <Text style={{ marginVertical: 10 }}>Rua: {road}</Text>
      <Text style={{ marginVertical: 10 }}>Bairro: {suburb}</Text>
      <Text style={{ marginVertical: 10 }}>Cidade: {city}</Text>
      <Text style={{ marginVertical: 10 }}>Estado: {state}</Text>

      {title && text && address && (
        <TouchableOpacity
          style={{
            backgroundColor: '#004A2F',
            padding: 15,
            borderRadius: 10,
            marginVertical: 10,
          }}
          onPress={submitDenuncia}
        >
          <Text style={{ color: '#FFF', fontSize: 16 }}>Enviar Denúncia</Text>
        </TouchableOpacity>
      )}

      {denunciaLocation && (
        <Text>
          Latitude: {denunciaLocation.latitude}, Longitude: {denunciaLocation.longitude}
        </Text>
      )}
    </View>
  );
};

export default Createdenuncia;
