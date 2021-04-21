import React from 'react';

import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

import { Button } from '../components';

import { colors, fonts } from '../styles';

const Confirmation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😃</Text>

        <Text style={styles.title}>Prontinho!</Text>

        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas {'\n'}
          plantinhas com muito cuidado.
        </Text>

        <View style={styles.buttonContainer}>
          <Button>Confirmar</Button>
        </View>
      </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 30,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    textAlign: 'center',
    fontSize: 17,
    paddingVertical: 10,
    color: colors.heading,
  },
  emoji: {
    fontSize: 78,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20,
  },
});

export default Confirmation;
