import React from 'react';
import { StyleSheet, ImageBackground, Text, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Login2 = () => {
  const navigation = useNavigation();

  function handleNavigateToClientLogin() {
    navigation.navigate('ClientLogin1');
  }

  function handleNavigateToBarLogin() {
    navigation.navigate('BarLogin');
  }

  return (
    <LinearGradient colors={['#DE2B2B', '#FF922E']} style={styles.container}>
      <View style={{alignItems: 'center' }}>
        <Image source={require('../../../assets/Logo.png')}></Image>
      </View>

      <View style={styles.footer}>
      <Text style={styles.description}>Entrar Como</Text>
        <RectButton style={styles.button} onPress={handleNavigateToClientLogin}>
          <Text style={styles.buttonText}>Usuário</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handleNavigateToBarLogin}>
          <Text style={styles.buttonText}>Empresa</Text>
        </RectButton>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  title: {
    color: '#fff',
    fontSize: 64,
    fontFamily: 'Lato_700Bold',
    maxWidth: 260,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  subTitle: {
    color: '#fff',
    fontSize: 32,
    fontFamily: 'Lato_700Bold',
    maxWidth: 260,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  subTitleTop: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Lato_700Bold',
    maxWidth: 260,
    textAlign: 'center',
  },

  welcome: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'Lato_700Bold',
    marginTop: 20,
    padding: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  description: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Lato_700Bold',
    marginTop: 0,
    paddingBottom: 24,
    textAlign: 'center',
  },

  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  buttonDrink: {
    backgroundColor: '#fff',
    height: 60,
    width: '90%',
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },

  button: {
    backgroundColor: '#fff',
    height: 60,
    width: '90%',
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#DE2B2B',
    fontFamily: 'Lato_700Bold',
    fontSize: 20,
  },
});

export default Login2;
