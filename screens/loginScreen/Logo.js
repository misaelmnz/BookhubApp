import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.appName}>Bookhub</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginBottom: 40 },
  logo: { width: 100, height: 100, resizeMode: 'contain' },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0C356A',
    marginTop: 10,
  },
});