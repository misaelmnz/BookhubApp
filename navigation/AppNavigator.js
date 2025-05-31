import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import CadastroScreen from '../screens/cadastroScreen/CadastroScreen';
import FeedScreen from '../screens/storeScreen/FeedScreen';
import Screen from '../screens/storeScreen/searchScreen/Screen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SearchScreen">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Feed" component={FeedScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SearchScreen" component={Screen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}