import React, { useState } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SenhaInput({ value, onChange, erro }) {
  const [visivel, setVisivel] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, erro && styles.inputError]}
        placeholder="Senha"
        secureTextEntry={!visivel}
        value={value}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.icon} onPress={() => setVisivel(!visivel)}>
        <Ionicons name={visivel ? 'eye' : 'eye-off'} size={20} color="#888" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    paddingRight: 40,
  },
  inputError: {
    borderColor: 'red',
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 12,
  },
});