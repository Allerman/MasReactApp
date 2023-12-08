// style.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerInicial: {
    flex: 1,
    backgroundColor: '#fff', // ou outra cor de fundo desejada
  },
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#fff', // Cor de fundo dos botões
  },
  button: {
    backgroundColor: '#007bff', // Cor do botão
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff', // Cor do texto do botão
    fontWeight: 'bold',
  },
});

export default styles;
