import AppNavigator from './navigation/AppNavigator';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() { 
  const [userToken, setUserToken] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'Inter-Black': require('./assets/fonts/Inter_18pt-Black.ttf'),
      'Inter-BlackItalic': require('./assets/fonts/Inter_18pt-BlackItalic.ttf'),
      'Inter-Bold': require('./assets/fonts/Inter_18pt-Bold.ttf'),
      'Inter-BoldItalic': require('./assets/fonts/Inter_18pt-BoldItalic.ttf'),
      'Inter-ExtraBold': require('./assets/fonts/Inter_18pt-ExtraBold.ttf'),
      'Inter-ExtraBoldItalic': require('./assets/fonts/Inter_18pt-ExtraBoldItalic.ttf'),
      'Inter-ExtraLight': require('./assets/fonts/Inter_18pt-ExtraLight.ttf'),
      'Inter-ExtraLightItalic': require('./assets/fonts/Inter_18pt-ExtraLightItalic.ttf'),
      'Inter-Italic': require('./assets/fonts/Inter_18pt-Italic.ttf'),
      'Inter-Light': require('./assets/fonts/Inter_18pt-Light.ttf'),
      'Inter-LightItalic': require('./assets/fonts/Inter_18pt-LightItalic.ttf'),
      'Inter-Medium': require('./assets/fonts/Inter_18pt-Medium.ttf'),
      'Inter-MediumItalic': require('./assets/fonts/Inter_18pt-MediumItalic.ttf'),
      'Inter-Regular': require('./assets/fonts/Inter_18pt-Regular.ttf'),
      'Inter-SemiBold': require('./assets/fonts/Inter_18pt-SemiBold.ttf'),
      'Inter-SemiBoldItalic': require('./assets/fonts/Inter_18pt-SemiBoldItalic.ttf'),
      'Inter-Thin': require('./assets/fonts/Inter_18pt-Thin.ttf'),
      'Inter-ThinItalic': require('./assets/fonts/Inter_18pt-ThinItalic.ttf'),
    }).then(() => setFontsLoaded(true));
  }, []);

  useEffect(() => {
    const loadToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) setUserToken(token);
      setIsLoading(false);
    }
    loadToken()
  }, [])

  if (isLoading) {
    return null;
  }

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <AuthProvider userToken={userToken} setUserToken={setUserToken}> 
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <AppNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});