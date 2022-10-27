import React, {FunctionComponent} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../../utils/colors';
import Logo from '../../assets/logo.png';

const Welcome: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.title}>PaperIt</Text>
      <Image source={Logo} />
      <View style={styles.container}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: colors.vividSkyBlue,
    fontFamily: 'Poiret One, cursive',
  },
  background: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.englishViolet,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    height: '80%',
    backgroundColor: colors.violetLowOpacity,
    width: '100%',
    borderRadius: 12,
  },
});

export default Welcome;
