import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import styles from './style';
import * as Location from 'expo-location';

const Mapa = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permissão de localização não concedida!');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  // Função para adicionar um marcador em uma localização específica
  const adicionarMarcadorEspecifico = () => {
    // Localização fictícia, substitua pelos dados reais da sua denúncia
    const localizacaoDenuncia = {
      latitude: -22.9035,
      longitude: -43.2096,
    };

    return (
      <Marker
        coordinate={localizacaoDenuncia}
        title="Local da Denúncia"
        pinColor="red" // Cor do marcador (pino)
      />
    );
  };

  return (
    <View style={styles.container}>
      {userLocation && (
        <MapView
          style={styles.map}
          region={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {/* Marcador da sua localização atual */}
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
            title="Sua Localização Atual"
          />

          {/* Chamada da função para adicionar o marcador específico */}
          {adicionarMarcadorEspecifico()}
        </MapView>
      )}
    </View>
  );
};


export default Mapa;
