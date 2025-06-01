import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Container, TextCustom, ButtonCustom, root } from '../../ui/components';

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
        navigation.navigate('Feed');
      } else {
        Alert.alert('Erro', 'Usuário não localizado ou dados incorretos.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao conectar com o servidor.');
      console.log(error);
    }
  };

  return (
    <Container style={styles.form}>
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
      <ButtonCustom onPress={handleLogin} style={styles.button}>
        <TextCustom color={root.C_WHITE} fontWeight="bold" textAlign="center">
          Entrar
        </TextCustom>
      </ButtonCustom>
      <View style={styles.registerContainer}>
        <TextCustom>Não possui conta? </TextCustom>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <TextCustom style={styles.registerLink}>Cadastre-se! </TextCustom>
        </TouchableOpacity>
      </View>
    </Container>
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
  button: {
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: root.C_MAIN_COLOR,
    borderRadius: 8,
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