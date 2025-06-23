// ComponenteTelaConteudo/index.tsx
import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { styles } from './styles';

const ComponenteTelaConteudo = () => {
  // Função para lidar com o clique nos botões, ou seja.. quando o cliente clicar em um botão, exibe um alerta com o nome do botão
  const handleButtonPress = (buttonName: string) => {
    alert(`Você clicou em: ${buttonName}`);
  };

  return (
    <SafeAreaView style={styles.container}> 
      <StatusBar backgroundColor="#2a2a2a" barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.time}>00:00</Text>
          <View style={styles.statusIcons}>
            <Text style={styles.statusText}>📶 📶 🔋</Text>
          </View>
        </View>
        
        <View style={styles.headerContent}>
          <View style={styles.logoContainer}>
            <Image 
              source={require('../ComponenteTelaConteudo/icons/logo.png')} 
              style={styles.logoImage}
            />
            <Text style={styles.logo}>Correios</Text>
          </View>
          <TouchableOpacity style={styles.chatIcon}>
            <Text style={styles.chatIconText}>💬</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Greeting */}
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>Olá, VICTOR</Text>
      </View>

      {/* Info Card */}
      <View style={styles.infoCard}>
        <View style={styles.infoIconContainer}>
          <Text style={styles.infoIcon}>📦</Text>
        </View>
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoTitle}>Adicione para acompanhar.</Text>
          <Text style={styles.infoSubtitle}>
            Você não possui nenhum objeto em trânsito.
          </Text>
        </View>
        <TouchableOpacity style={styles.infoButton}>
          <Text style={styles.infoButtonText}>ℹ️</Text>
        </TouchableOpacity>
      </View>

      {/* Menu Buttons */}
      <View style={styles.menuContainer}>
        <TouchableOpacity 
          style={styles.menuButton}
          onPress={() => handleButtonPress('Postagem')}
        >
          <Text style={styles.menuIcon}>📦</Text>
          <Text style={styles.menuText}>Postagem</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuButton}
          onPress={() => handleButtonPress('Loja dos Correios')}
        >
          <Text style={styles.menuIcon}>🛍️</Text>
          <Text style={styles.menuText}>Loja dos{'\n'}Correios</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuButton}
          onPress={() => handleButtonPress('Busca Correios')}
        >
          <Text style={styles.menuIcon}>🔍</Text>
          <Text style={styles.menuText}>Busca{'\n'}Correios</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuButton}
          onPress={() => handleButtonPress('Correios Celular')}
        >
          <Text style={styles.menuIcon}>📱</Text>
          <Text style={styles.menuText}>Correios{'\n'}Celular</Text>
        </TouchableOpacity>
      </View>

      {/* Spacer */}
      <View style={styles.spacer} />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.bottomNavItem}
          onPress={() => handleButtonPress('Início')}
        >
          <View style={styles.bottomNavActive}>
            <Text style={styles.bottomNavIcon}>🏠</Text>
          </View>
          <Text style={styles.bottomNavTextActive}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.bottomNavItem}
          onPress={() => handleButtonPress('Buscar')}
        >
          <Text style={styles.bottomNavIcon}>🔍</Text>
          <Text style={styles.bottomNavText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.bottomNavItem}
          onPress={() => handleButtonPress('Rastrear')}
        >
          <Text style={styles.bottomNavIcon}>📍</Text>
          <Text style={styles.bottomNavText}>Rastrear</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.bottomNavItem}
          onPress={() => handleButtonPress('Perfil')}
        >
          <Text style={styles.bottomNavIcon}>👤</Text>
          <Text style={styles.bottomNavText}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.bottomNavItem}
          onPress={() => handleButtonPress('Menu')}
        >
          <Text style={styles.bottomNavIcon}>☰</Text>
          <Text style={styles.bottomNavText}>Menu</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ComponenteTelaConteudo;