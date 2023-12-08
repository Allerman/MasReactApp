// Botoes.js
import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import styles from './style';

const Botoes = () => {
  const abrirDenuncia = () => {
    console.log('Abrir Denúncia');
  };

  const ligarParaIbama = () => {
    Linking.openURL('tel:08000618080');
  };

  return (
    <View style={styles.container}>
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.button} onPress={abrirDenuncia}>
          <Text style={styles.buttonText}>Abrir Denúncia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={ligarParaIbama}>
          <Text style={styles.buttonText}>Ligar para o IBAMA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Botoes;
