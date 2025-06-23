// ComponenteTelaConteudo/styles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  
  // Header Styles
  header: {
    backgroundColor: '#2a2a2a',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
    marginBottom: 16,
  },
  time: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusIcons: {
    flexDirection: 'row',
  },
  statusText: {
    color: 'white',
    fontSize: 16,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  logo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  chatIcon: {
    padding: 8,
  },
  chatIconText: {
    fontSize: 20,
  },

  // Greeting Styles
  greetingContainer: {
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  greeting: {
    color: '#ffff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // Info Card Styles
  infoCard: {
    backgroundColor: '#2a2a2a',
    marginHorizontal: 16,
    marginBottom: 24,
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fbbf24',
  },
  infoIconContainer: {
    marginRight: 12,
  },
  infoIcon: {
    fontSize: 24,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoTitle: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  infoSubtitle: {
    color: '#888',
    fontSize: 14,
  },
  infoButton: {
    padding: 8,
  },
  infoButtonText: {
    fontSize: 16,
  },

  // Menu Styles
  menuContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  menuButton: {
    alignItems: 'center',
    padding: 16,
    width: 80,
  },
  menuIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  menuText: {
    color: '#ffff',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 16,
    justifyContent: 'center',
  },

  // Spacer
  spacer: {
    flex: 1,
  },

  // Bottom Navigation Styles
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#2a2a2a',
    paddingVertical: 8,
  },
  bottomNavItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  bottomNavActive: {
    backgroundColor: '#fbbf24',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  bottomNavIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  bottomNavText: {
    color: '#888',
    fontSize: 10,
  },
  bottomNavTextActive: {
    color: '#fbbf24',
    fontSize: 10,
    fontWeight: 'bold',
  },
});