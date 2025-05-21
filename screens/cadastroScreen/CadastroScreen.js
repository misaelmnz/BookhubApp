import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import NomeInput from './NomeInput';
import SobrenomeInput from './SobrenomeInput';
import DataNascimentoInput from './DataNascimentoInput';
import EmailInput from './EmailInput';
import CelularInput from './CelularInput';
import SenhaInput from './SenhaInput';
import ConfirmarSenhaInput from './ConfirmarSenhaInput';
import BotaoCadastro from './BotaoCadastro';
import Logo from './Logo';

export default function CadastroScreen({ navigation }) {
  const [form, setForm] = useState({
    nome: '',
    sobrenome: '',
    dataNascimento: null,
    email: '',
    celular: '',
    senha: '',
    confirmarSenha: '',
  });

  const [errorFields, setErrorFields] = useState({});
  const [showDatePicker, setShowDatePicker] = useState(false);

  const DDDsValidos = [
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '21', '22', '24', '27', '28', '31', '32', '33', '34', '35', '37', '38',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '51', '53', '54', '55', '61', '62', '63', '64', '65', '66', '67', '68',
    '69', '71', '73', '74', '75', '77', '79', '81', '82', '83', '84', '85', '86', '87', '88', '89', '91', '92', '93', '94', '95',
    '96', '97', '98', '99'
  ];

  const formatarNome = (texto) => {
    return texto
      .toLowerCase()
      .split(' ')
      .map(p => p.charAt(0).toUpperCase() + p.slice(1))
      .join(' ');
  };

  const validarCampos = () => {
    const erros = {};

    const nomeFormatado = formatarNome(form.nome.trim());
    const sobrenomeFormatado = formatarNome(form.sobrenome.trim());

    const regexNome = /^[A-Za-zÀ-ú\s]{1,20}$/;
    if (!regexNome.test(nomeFormatado)) erros.nome = 'Nome inválido.';
    if (!regexNome.test(sobrenomeFormatado)) erros.sobrenome = 'Sobrenome inválido.';

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(form.email) || form.email.length > 50) erros.email = 'E-mail inválido.';

    const celularNumerico = form.celular.replace(/\D/g, '');
    if (!/^\d{11}$/.test(celularNumerico)) {
      erros.celular = 'Celular inválido.';
    } else {
      const ddd = celularNumerico.substring(0, 2);
      const terceiroDigito = celularNumerico.charAt(2);

      if (!DDDsValidos.includes(ddd)) {
        erros.celular = 'DDD inválido.';
      } else if (terceiroDigito !== '9') {
        erros.celular = 'Celular inválido.';
      }
    }

    const idadeMinima = 18;
    const hoje = new Date();
    const nascimento = new Date(form.dataNascimento);
    const idade = hoje.getFullYear() - nascimento.getFullYear();
    const aniversarioJaPassou =
      hoje.getMonth() > nascimento.getMonth() ||
      (hoje.getMonth() === nascimento.getMonth() && hoje.getDate() >= nascimento.getDate());

    const idadeFinal = aniversarioJaPassou ? idade : idade - 1;
    if (idadeFinal < idadeMinima) erros.dataNascimento = 'É necessário ter pelo menos 18 anos.';

    if (form.senha.length < 8) {
      erros.senha = 'A senha deve ter pelo menos 8 caracteres.';
    } else {
      const regexComplexidade = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/;
      if (!regexComplexidade.test(form.senha)) {
        erros.senha = 'A senha deve conter letra maiúscula, minúscula, número e caractere especial.';
      }
    }

    if (form.confirmarSenha !== form.senha) {
      erros.confirmarSenha = 'As senhas não coincidem.';
    }


    return { erros, nomeFormatado, sobrenomeFormatado };
  };



  const handleSubmit = async () => {
    const { erros, nomeFormatado, sobrenomeFormatado } = validarCampos();
    setErrorFields(erros);

    if (Object.keys(erros).length > 0) {
      const primeiroCampoComErro = Object.keys(erros)[0];
      Alert.alert('Erro', erros[primeiroCampoComErro]);
      return;
    }


    try {
      const response = await fetch('http://192.168.15.13:3000/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_nome: nomeFormatado,
          user_sobrenome: sobrenomeFormatado,
          user_data_nascimento: form.dataNascimento.toISOString().split('T')[0],
          user_email: form.email,
          user_celular: form.celular.replace(/\D/g, ''),
          user_senha: form.senha,
        }),
      });

      const data = await response.json();

      if (data.success) {
        Alert.alert('Sucesso', 'Conta criada com sucesso!', [
          { text: 'Voltar à tela inicial', onPress: () => navigation.navigate('Login') },
        ]);
      } else {
        Alert.alert('Erro', data.message || 'Erro ao criar conta.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao conectar com o servidor.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Logo />
        <Text style={styles.title}>Criar Conta</Text>

        <NomeInput value={form.nome} onChange={text => setForm({ ...form, nome: text })} erro={errorFields.nome} />
        <SobrenomeInput value={form.sobrenome} onChange={text => setForm({ ...form, sobrenome: text })} erro={errorFields.sobrenome} />
        <DataNascimentoInput
          value={form.dataNascimento}
          onChange={date => setForm({ ...form, dataNascimento: date })}
          showDatePicker={showDatePicker}
          setShowDatePicker={setShowDatePicker}
          erro={errorFields.dataNascimento}
        />
        <EmailInput value={form.email} onChange={text => setForm({ ...form, email: text })} erro={errorFields.email} />
        <CelularInput value={form.celular} onChange={text => setForm({ ...form, celular: text })} erro={errorFields.celular} />
        <SenhaInput value={form.senha} onChange={text => setForm({ ...form, senha: text })} erro={errorFields.senha} />
        <ConfirmarSenhaInput value={form.confirmarSenha} onChange={text => setForm({ ...form, confirmarSenha: text })} erro={errorFields.confirmarSenha} />

        <BotaoCadastro onPress={handleSubmit} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 70,
    backgroundColor: '#FFF5E0',
    justifyContent: 'flex-start',
  },


  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
    fontWeight: 'bold',
    color: '#0C356A',
  },
});