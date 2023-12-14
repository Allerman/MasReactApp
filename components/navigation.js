import React from 'react';
import styles from './style';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DenunciaScreen from '../screens/createdenuncia';
import { View, Text, Linking, TouchableOpacity, ScrollView} from 'react-native';
import { Card } from 'react-native-elements';

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
    <ScrollView>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Card containerStyle={{ width: '80%', alignItems: 'center'}}>
        <Text style={{ marginTop: 20, textAlign: 'center' }}>
          O Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis (IBAMA) é um órgão federal brasileiro vinculado ao Ministério do Meio Ambiente. Foi criado em 1989 e tem como principal objetivo implementar e executar as políticas nacionais para o meio ambiente, fiscalizar o cumprimento da legislação ambiental, promover a conservação da biodiversidade e dos ecossistemas, além de atuar na gestão dos recursos naturais renováveis.
        </Text>
      </Card>

      <TouchableOpacity style={styles.button} onPress={handleLigarParaIbama}>
        <Text style={styles.buttonText}>Ligar Agora</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const NavButton = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* Adicione a tela DenunciaScreen ao Tab.Navigator */}
        <Tab.Screen name="Denuncia" component={DenunciaScreen} />
        <Tab.Screen name="Ligar para Ibama" component={LigarParaIbamaScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavButton;