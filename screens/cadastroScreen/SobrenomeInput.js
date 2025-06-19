import { TextInput, StyleSheet } from 'react-native';

export default function SobrenomeInput({ value, onChange, erro }) {
  return (
    <TextInput
      style={[styles.input, erro && styles.inputError]}
      placeholder="Sobrenome"
      value={value}
      onChangeText={onChange}
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