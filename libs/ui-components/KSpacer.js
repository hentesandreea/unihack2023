import React from 'react';
import {View, Text} from "react-native";

function KSpacer({h=10}) {
    return (
        <View style={{height:h}}>
            <Text></Text>
        </View>
    );
}

export default KSpacer;