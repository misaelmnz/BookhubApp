import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import Logo from './Logo';
import LoginForm from './LoginForm';
import { root , Container } from '../../ui/components';


export default function LoginScreen({ navigation }) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 20}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <Container
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}
            padding={0}
            margin={0}
            borderRadius={0}
            backgroundColor={root.C_BACKGROUND_COLOR}
            paddingHorizontal={20}
            paddingBottom={40}
          >
            <Logo />
            <LoginForm navigation={navigation} />
          </Container>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: root.C_BACKGROUND_COLOR,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});