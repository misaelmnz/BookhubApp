import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function CelularInput({ value, onChange, erro }) {
  const formatarCelular = (text) => {
    const cleaned = text.replace(/\D/g, '');
    if (cleaned.length <= 2) return cleaned;
    if (cleaned.length <= 7) return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
  };

  return (
    <TextInput
      style={[styles.input, erro && styles.inputError]}
      placeholder="Celular"
      keyboardType="phone-pad"
      value={formatarCelular(value)}
      onChangeText={onChange}
      maxLength={15}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  inputError: {
    borderColor: 'red',
  },
});