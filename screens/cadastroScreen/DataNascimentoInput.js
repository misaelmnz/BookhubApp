import React from 'react';
import { View, Text, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DataNascimentoInput({ value, onChange, showDatePicker, setShowDatePicker }) {
  const handleChange = (event, selectedDate) => {
    setShowDatePicker(false);

    if (event.type === 'set' && selectedDate) {
      onChange(selectedDate);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
        <Text style={{ color: value ? '#000' : '#999' }}>
          {value ? value.toLocaleDateString('pt-BR') : 'Data de nascimento'}
        </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          mode="date"
          value={value || new Date()}
          display="spinner"
          onChange={handleChange}
          maximumDate={new Date()}
          locale="pt-BR"
        />
      )}
    </View>
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
});