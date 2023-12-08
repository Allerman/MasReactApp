// style.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject, // Use absolute fill to take the entire space
    zIndex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#004A2F',
    padding: 10,
    zIndex: 2, // Adjust the zIndex to make the header appear above the map
  },
  iconButton: {
    padding: 10,
  },
  logoText: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'monospace',
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  user: {
    position: 'absolute',
    top: 60,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
  menu: {
    position: 'absolute',
    top: 60,
    left: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
  menuItem: {
    paddingVertical: 8,
  },
  menuText: {
    textAlign: 'center',
  },
  bottomButtons: {
    position: 'absolute', // Define a posição absoluta para que os botões possam flutuar sobre o mapa
    bottom: 16, // Ajusta a distância do fundo da tela
    left: 0, // Alinha à esquerda
    right: 0, // Alinha à direita
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  button: {
    backgroundColor: '#004A2F',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
