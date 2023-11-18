import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import designColors from "../../constants/Colors";
import {LinearGradient} from "expo-linear-gradient";

function KTag({label,onPress, color}) {
    return (
        <LinearGradient colors={color} style={{
            backgroundColor: color, padding:10, borderRadius:10, alignItems:"center"
        }}>
            <TouchableOpacity onPress={onPress}>
                <Text style={{fontSize:16, letterSpacing:0.5, fontWeight:"500"}}>{label}</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

export default KTag;