import { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ConfirmarSenhaInput({ value, onChange, erro }) {
  const [secureText, setSecureText] = useState(true);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, erro && styles.inputErro]}
        placeholder="Confirmar senha"
        secureTextEntry={secureText}
        value={value}
        onChangeText={onChange}
        autoCapitalize="none"
      />
      <TouchableOpacity onPress={() => setSecureText(!secureText)} style={styles.icon}>
        <Ionicons name={secureText ? 'eye-off' : 'eye'} size={20} color="#999" />
      </TouchableOpacity>
      {erro && <Text style={styles.textoErro}>{erro}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    paddingRight: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  inputErro: {
    borderColor: 'red',
  },
  icon: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
  textoErro: {
    color: 'red',
    marginTop: 4,
    fontSize: 12,
  },
});