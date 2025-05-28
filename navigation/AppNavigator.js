import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import Sucesso from '../screens/loginScreen/Sucesso';
import CadastroScreen from '../screens/cadastroScreen/CadastroScreen';
import FeedScreen from '../screens/storeScreen/FeedScreen';
import ItemCard from '../screens/storeScreen/ItemCard';
import Searchscreen from '../screens/storeScreen/searchScreen/searchScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Search" component={Searchscreen} options={{ headerShown: false}} />
        <Stack.Screen name="Feed" component={FeedScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Sucesso" component={Sucesso} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}