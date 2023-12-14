import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './components/style';
import Mapa from './components/mapa';
import Denuncias from './screens/showdenuncias'; // Substitua pelo nome real do componente Denuncias
import Sobre from './screens/sobre'; // Substitua pelo nome real do componente Sobre
import NavButton from './components/navigation';
import Createdenuncia from './screens/createdenuncia';
import TopBar from './components/topBar';

const Stack = createStackNavigator();

function App() {
  return (
    <View style={styles.containerApp}>
      <NavigationContainer>
      <TopBar />
        <Stack.Navigator initialRouteName="Mapa">
          <Stack.Screen name="Mapa" component={Mapa} />
          <Stack.Screen name="Denuncias" component={Denuncias} />
          <Stack.Screen name="Sobre" component={Sobre} />
          <Stack.Screen name="Fazer Denuncia" component={Createdenuncia} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <NavButton/>  */}
    </View>
  );
}

export default App;
