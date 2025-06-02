import { View, StyleSheet, SafeAreaView, Image, Text } from 'react-native';
import { root } from '../../ui/Components';

export default function HeaderDefault() {
  return (
      <View style={styles.footer}>
        <View style={styles.logoContainer}>
          <View style={styles.logoSize}>
            <Image source={require('../../assets/logo.png')} style={styles.logo} />
          </View>
          <Text style={styles.logoText}>BOOKHUB</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 60,
    backgroundColor: root.C_MAIN_COLOR,
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoSize: {
    height: 50,
    width: 52,
    borderRadius: 15,
    backgroundColor: root.C_BACKGROUND_COLOR,
    marginRight: 7,
  },

  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  logoText: {
    color: root.C_BACKGROUND_COLOR,
    fontSize: 25,
    fontWeight: 'bold',
  },
});
