// Navigation.js
import React from 'react';
import styles from './style';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DenunciaScreen from '../screens/denunciaScreen';
import { View, Text, Button, Linking, TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();

const LigarParaIbamaScreen = () => {
  const numeroIbama = '08000618080';

  const handleLigarParaIbama = async () => {
    const canOpenURL = await Linking.canOpenURL(`tel:${numeroIbama}`);

    if (canOpenURL) {
      await Linking.openURL(`tel:${numeroIbama}`);
    } else {
      console.error('Não é possível realizar chamadas telefônicas neste dispositivo.');
    }
  };

  return (
    <View style={styles.denunciaContainer}>
      <Text style={styles.HeaderText}>Ligar para Ibama</Text>
      <TouchableOpacity style={styles.button} onPress={handleLigarParaIbama}>
        <Text style={styles.buttonText}>Ligar Agora</Text>
      </TouchableOpacity>
    </View>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Denuncia" component={DenunciaScreen} />
        <Tab.Screen name="Ligar para Ibama" component={LigarParaIbamaScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
