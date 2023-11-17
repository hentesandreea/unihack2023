import React from 'react';
import {KeyboardAvoidingView, ScrollView, StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";


function KContainer(props) {
    const { top, bottom } = useSafeAreaInsets();

    return (
        <KeyboardAvoidingView style={{flex:1}}>
            <ScrollView contentContainerStyle={{
                flexGrow:1,
                top:top
            }}>
                {props.children}
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default KContainer;