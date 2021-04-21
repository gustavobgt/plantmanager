import React from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  View,
  TextInput,
  StyleSheet,
  Platform,
} from 'react-native';
import { Button } from '../components';
import { colors, fonts } from '../styles';

const UserIdentification = () => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [isFilled, setIsFilled] = React.useState(false);
  const [name, setName] = React.useState('');

  const handleInputBlur = (): void => {
    setIsFocused(false);
    setIsFilled(!!name);
  };

  const handleInputFocus = (): void => {
    setIsFocused(true);
  };

  const handleInputChange = (value: string): void => {
    setIsFilled(!!value);
    setName(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.content}>
          <View style={styles.form}>
            <View style={styles.titleContainer}>
              <Text style={styles.emoji}>{isFilled ? '😃' : '🙂'}</Text>

              <Text style={styles.title}>
                Como podemos {'\n'}
                chamar você?
              </Text>
            </View>

            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && { borderColor: colors.green },
              ]}
              placeholder="Digite um nome"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
            />

            <View style={styles.buttonContainer}>
              <Button>Confirmar</Button>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center',
  },
  titleContainer: { alignItems: 'center' },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20,
  },
  emoji: {
    fontSize: 44,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    margin: 40,
    paddingHorizontal: 20,
  },
});

export default UserIdentification;
