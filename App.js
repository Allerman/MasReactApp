import React from 'react';
import Botoes from './components/botoes';
import styles from './components/style';
import Mapa from './components/mapa';
import { View } from 'react-native';
import TopBar from './components/topBar';

export default function App() {
  return (
    <View style={styles.containerApp}>
      <TopBar/>
      <Mapa/>
      <Botoes/>
    </View>
  );
}
