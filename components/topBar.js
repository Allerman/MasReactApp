import React, { useState } from 'react';
import styles from './style';
import { View, Text, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TopBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [userMenuVisible, setUserMenuVisible] = useState(false);

  const pages = ['Mapa', 'Fazer Denuncia', 'Denuncias', 'Ligar Para Ibama', 'Ajuda', 'Sobre'];
  const settings = ['Logout'];

  const handleOpenNavMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleOpenUserMenu = () => {
    setUserMenuVisible(!userMenuVisible);
  };

  const handleCloseNavMenu = () => {
    setMenuVisible(false);
  };

  const handleCloseUserMenu = () => {
    setUserMenuVisible(false);
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleOpenNavMenu} style={styles.iconButton}>
        <Icon name="menu" size={30} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.logoText}>MAS</Text>

      <TouchableOpacity onPress={handleOpenUserMenu} style={styles.iconButton}>
        <Icon name="account-circle" size={30} color="#fff" />
      </TouchableOpacity>

      {menuVisible && (
        <View style={styles.menu}>
          {pages.map((page) => (
            <TouchableOpacity key={page} onPress={handleCloseNavMenu} style={styles.menuItem}>
              <Text style={styles.menuText}>{page}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {userMenuVisible && (
        <View style={styles.user}>
          {settings.map((setting) => (
            <TouchableOpacity key={setting} onPress={handleCloseUserMenu} style={styles.menuItem}>
              <Text style={styles.menuText}>{setting}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};


export default TopBar;
