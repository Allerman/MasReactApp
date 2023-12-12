import React, { useState } from 'react';
import styles from '../components/style';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';

const DenunciaScreen = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [address, setAddress] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permissão de localização não concedida!');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setAddress(`Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`);
  };

  const submitDenuncia = () => {
    // Lógica para enviar a denúncia
    console.log('Denúncia enviada:', { image, title, text, address });
    // Reinicializa os campos após o envio
    setImage(null);
    setTitle('');
    setText('');
    setAddress('');
  };

  return (
    <View style={styles.denunciaContainer}>
      <Text style={styles.HeaderText}>Abrir Denúncia</Text>
      
      {/* Campo da Câmera */}
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Escolher Imagem</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.image} />}

      {/* Campo do Título */}
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />

      {/* Campo do Texto */}
      <TextInput
        style={styles.input}
        placeholder="Texto da Denúncia"
        multiline
        numberOfLines={4}
        value={text}
        onChangeText={setText}
      />

      {/* Campo do Endereço (automático ao clicar no botão) */}
      <TouchableOpacity style={styles.button} onPress={getLocation}>
        <Text style={styles.buttonText}>Obter Endereço Atual</Text>
      </TouchableOpacity>
      <Text style={styles.addressText}>{address}</Text>

      {/* Botão de Envio (condicional) */}
      {image && title && text && address && (
        <TouchableOpacity style={styles.submitButton} onPress={submitDenuncia}>
          <Text style={styles.submitButtonText}>Enviar Denúncia</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default DenunciaScreen;
