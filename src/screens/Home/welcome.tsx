import React, {FunctionComponent} from 'react';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Welcome: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={{height: '100%', width: '100%'}}>
      <SafeAreaView>
        <Text>teste</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    position: 'relative',
    flex: 1,
    resizeMode: 'contain',
    justifyContent: `center`,
  },
});

export default Welcome;
