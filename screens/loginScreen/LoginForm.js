import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function LoginForm({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.15.13:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario, senha }),
      });

      const data = await response.json();

      if (data.success) {
        navigation.navigate('Sucesso');
      } else {
        Alert.alert('Erro', 'Usuário não localizado ou dados incorretos.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao conectar com o servidor.');
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="E-mail ou Celular (Ex: 11999999999)"
        value={usuario}
        onChangeText={setUsuario}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <Button title="Entrar" onPress={handleLogin} color='#ff9e40' />
      <View style={styles.registerContainer}>
        <Text>Não possui conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.registerLink}>Cadastre-se! </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: { width: '100%' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  registerLink: {
    color: 'rgb(110, 110, 110)',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});