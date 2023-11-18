import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import designColors from '../../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';

function KButton({ label, onPress, color }) {
  return (
    <LinearGradient
      colors={color}
      style={{
        height: 60,
        // backgroundColor: designColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
      }}>
      <TouchableOpacity onPress={onPress}>
        <Text style={{ fontSize: 20, fontWeight: '500', letterSpacing: 0.2 }}>
          {label}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

export default KButton;
