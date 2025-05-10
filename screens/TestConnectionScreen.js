import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';

export default function TestConnectionScreen() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const testConnection = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://192.168.15.13:3000/test-connection');
      const data = await response.json();
      setStatus(data.message);
    } catch (error) {
      setStatus('Erro ao conectar com o back-end');
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Testar Conexão com o Back-end" onPress={testConnection} />
      {loading ? <ActivityIndicator size="large" color="#0000ff" /> : <Text>{status}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});