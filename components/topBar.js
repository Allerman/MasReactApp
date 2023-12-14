import React, { useState } from 'react';
import styles from './style';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const TopBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [userMenuVisible, setUserMenuVisible] = useState(false);

  const navigation = useNavigation();

  const pages = ['Mapa','Fazer Denuncia', 'Denuncias', 'Sobre'];

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

  const handleNavigateToPage = (page) => {
    navigation.navigate(page);
    handleCloseNavMenu();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleOpenNavMenu} style={styles.iconButton}>
        <Icon name="menu" size={30} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.logoText}>MAS</Text>

      {menuVisible && (
        <View style={styles.menu}>
          {pages.map((page) => (
            <TouchableOpacity key={page} onPress={() => handleNavigateToPage(page)} style={styles.menuItem}>
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
