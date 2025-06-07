import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { root, TextCustom, Container } from '../../ui/Components';

export default function Logo() {
  return (
    <Container
    alignItems="center"
    marginBottom={40}
    >
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <TextCustom
        fontSize={28}
        fontWeight="bold"
        color={root.C_BLACK}
        textAlign="center"
        fontFamily={root.C_FONT}
        style={styles.appName}
      >
        Bookhub
      </TextCustom>
    </Container>
  );
}

const styles = StyleSheet.create({
  logo: { width: 100, height: 100, resizeMode: 'contain' },
  appName: {
    fontFamily: root.C_FONT,
    marginTop: 10,
  },
});