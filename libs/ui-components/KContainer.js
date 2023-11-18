import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import designColors from '../../constants/Colors';

function KContainer(props) {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/background.jpg')}
        resizeMode="cover"
        style={{ flex: 1, width: null, height: null }}
        blurRadius={6}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingTop: top,
            paddingBottom: bottom,
            alignItems: 'center',
          }}>
          {props.children}
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

export default KContainer;
