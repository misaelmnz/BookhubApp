// navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import Sucesso from '../screens/loginScreen/Sucesso';
import TelaCadastro from '../screens/loginScreen/TelaCadastro'; // tela em construção...

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Sucesso" component={Sucesso} />
        <Stack.Screen name="tela_cadastro" component={TelaCadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}