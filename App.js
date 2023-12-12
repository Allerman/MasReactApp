import React from 'react';
import styles from './components/style';
import Mapa from './components/mapa';
import { View } from 'react-native';
import Navigation from './components/navigation';
import TopBar from './components/topBar';

function App() {
  return (
    <View style={styles.containerApp}>
      <TopBar />
      <Mapa />
      <Navigation/>
    </View>
  );
}

export default App;