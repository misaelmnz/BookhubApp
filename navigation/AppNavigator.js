import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import CadastroScreen from '../screens/cadastroScreen/CadastroScreen';
import FeedScreen from '../screens/storeScreen/FeedScreen';
import SearchScreen from '../screens/storeScreen/searchScreen/SearchScreen';
import ResultScreen from '../screens/storeScreen/resultsScreen/ResultScreen';
import DetailScreen from '../screens/storeScreen/detailScreen/DetailScreen';
import PublicationMain from '../screens/publicationScreen/PubScreen';
import { useAuth } from '../context/AuthContext';
import CreateScreen from '../screens/publicationScreen/publicationCreation/CreateScreen';
import FormScreen from '../screens/publicationScreen/publicationCreation/FormScreen';
import RenderForm from '../screens/publicationScreen/publicationCreation/RenderForm';
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { userToken } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={userToken ? "Feed" : "Login"} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Feed" component={FeedScreen} options={{headerShown: false}} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Pesquisa" component={SearchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Resultado" component={ResultScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="Detalhe da publicação" component={DetailScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Publicação" component={PublicationMain} options={{ headerShown: false}}/>
        <Stack.Screen name="Criar Publicação" component={CreateScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="Teste" component={FormScreen}/>
        <Stack.Screen name="RenderForm" component={RenderForm}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}