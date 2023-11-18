import React from 'react';
import {KeyboardAvoidingView, ScrollView, StyleSheet, TextInput} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import designColors from "../../constants/Colors";


function KContainer(props) {
    const { top, bottom } = useSafeAreaInsets();

    return (
        <KeyboardAvoidingView style={{flex:1,
            backgroundColor:designColors.background
        }}>
            <ScrollView contentContainerStyle={{
                flexGrow:1,
                paddingTop:top,
                paddingBottom:bottom,
                alignItems:"center",
            }}>
                {props.children}
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default KContainer;