import React from 'react';
import Botoes from 'Botoes';
import styles from './components/style';
import Mapa from './components/mapa';
import { View } from 'react-native';
import TopBar from './components/topBar';

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar />
      <Mapa/>
      <Botoes/>
      {/* Adicione aqui outros componentes do seu aplicativo */}
    </View>
  );
}
