import {Alert, Button, StyleSheet, Text, TextInput, View} from "react-native";
import KContainer from "../../ui-components/KContainer";
import {useEffect, useState} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from "@firebase/auth";
import {auth} from "../../../firebase/config";
import {handleLogin} from "../../../firebase/handleLogin";
function Login({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <KContainer>
            <Text>Login</Text>

            <View style={{height: 50}}></View>


            <Text>Email</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(text) => setEmail(text)}
            ></TextInput>
            <Text>Password</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(text) => setPassword(text)}
            ></TextInput>

            <Button title={"DAI TATI"} onPress={() => {
                handleLogin(email, password)
            }}></Button>

            <View style={{height: 50}}></View>

            <Button title={"DU-TE LA REGISTER"} onPress={() => {
                navigation.navigate("Register")
            }}></Button>

        </KContainer>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        backgroundColor: "red",
        width: "90%",
        height: 50,
    },
});

export default Login;