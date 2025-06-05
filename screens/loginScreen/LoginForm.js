import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Text,
} from 'react-native';
import { Container, ButtonCustom, root } from '../../ui/Components';
import { useAuth } from '../../context/AuthContext';


export default function LoginForm({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const { login } = useAuth();

  const handleLogin = async () => {
  try {
    const success = await login(usuario, senha);
    if (success) {
      navigation.navigate('Feed');
      console.log(usuario, senha)
    } else {
      Alert.alert('Erro', 'Usuário ou senha inválidos.');
      console.log(usuario, senha)
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
        <Text color={root.C_WHITE} fontWeight="bold" textAlign="center">
          Entrar
        </Text>
      </ButtonCustom>
      <View style={styles.registerContainer}>
        <Text>Não possui conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.registerLink}> Cadastre-se! </Text>
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