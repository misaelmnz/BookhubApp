import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

export default function BotaoCadastro({ onPress }) {
  return (
    <View style={styles.container}>
      <Button title="Criar conta" onPress={onPress} color="#ff9e40" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
});