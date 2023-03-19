import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({navigation}: any) => {
  const navigateToHomeScreen = () => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  };
  useEffect(() => {
    navigateToHomeScreen();
  }, []);
  return (
    <Image
      source={require('../../Images/Logo.png')}
      resizeMode="contain"
      style={styles.logo}
    />
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});
