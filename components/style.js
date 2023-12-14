// style.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    zIndex: 4,
  },
  container: {
    flex: 1,
    zIndex: 1,
  },
  mapa: {
    ...StyleSheet.absoluteFillObject, 
    zIndex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#004A2F',
    padding: 10,
    zIndex: 2, 
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
    position: 'absolute',
    bottom: 16, 
    left: 0,
    right: 0, 
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  button: {
    backgroundColor: '#004A2F',
    padding: 10,
    borderRadius: 8,
  },
  buttonText:{
    color: '#F0F8FF',
  },
  input:{
    padding: 8,
  },

});

export default styles;
