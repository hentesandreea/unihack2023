import React from 'react';
import {Text, TouchableOpacity} from "react-native";
import designColors from "../../constants/Colors";

function KButton({label, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={{
            width:"40%",
            height:60,
            backgroundColor:designColors.primary,
            alignItems:"center",
            justifyContent:"center",
            padding:10,
            borderRadius:10
        }}>
            <Text style={{fontSize:20, fontWeight:"500", letterSpacing:0.2, color:"white"}}>{label}</Text>
        </TouchableOpacity>
    );
}

export default KButton;