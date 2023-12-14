import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import styles from './style';
import * as Location from 'expo-location';
import api from '../api';

const Mapa = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [denuncias, setDenuncias] = useState([]);

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

    // Obtenha as denúncias do backend
    async function fetchDenuncias() {
      try {
        const response = await api.get('/denuncias');
        setDenuncias(response.data);
      } catch (error) {
        console.error('Erro ao obter denúncias:', error);
      }
    }

    fetchDenuncias();
  }, []);

  // Função para adicionar marcadores para cada denúncia
  const adicionarMarcadoresDenuncias = () => {
    return denuncias.map((denuncia) => (
      <Marker
        key={denuncia._id}
        coordinate={{
          latitude: denuncia.localizacao.coordinates[0],
          longitude: denuncia.localizacao.coordinates[1],
        }}
        title={denuncia.titulo}
      />
    ));
  };

  return (
    <View style={styles.container}>
      {userLocation && (
        <MapView
          style={styles.mapa}
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

          {/* Chamada da função para adicionar os marcadores das denúncias */}
          {adicionarMarcadoresDenuncias()}
        </MapView>
      )}
    </View>

  );
};

export default Mapa;
