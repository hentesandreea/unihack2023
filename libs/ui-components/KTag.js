import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import designColors from "../../constants/Colors";

function KTag({label,onPress, color}) {
    return (
        <TouchableOpacity onPress={onPress} style={{backgroundColor: color, padding:10, borderRadius:10}}>
            <Text style={{fontSize:16, letterSpacing:0.5, fontWeight:"500"}}>{label}</Text>
        </TouchableOpacity>
    );
}

export default KTag;