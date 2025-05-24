// NÃO ESQUECER DE COLOCAR A IMAGEM

import { View, StyleSheet, SafeAreaView, Image } from 'react-native';
import {root} from '../../theme/theme';

export default function FooterDefault() {
  return (
    <SafeAreaView>
      <View style={styles.footer}>
        <View style={styles.logoSize}>
        <Image source={require('../../assets/logo.png')} style={styles.logo}  />
        </View> 
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 60,
    backgroundColor: root.C_MAIN_COLOR,
    paddingInline: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logoSize: {
    height: 50,
    width: 50,
    borderRadius: 15,
    backgroundColor: root.C_BACKGROUND_COLOR,
    overflow: 'hidden',
  },

  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }

});
