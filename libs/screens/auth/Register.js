import {StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert, Image} from "react-native";
import KContainer from "../../ui-components/KContainer";
import designColors from "../../../constants/Colors";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faEnvelope as fasEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import {faUser as fasUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faLock as fasLock} from '@fortawesome/free-solid-svg-icons/faLock';



function Register(props) {
    return (
        <KContainer>
            <View style={styles.viewContainer}>
                <Image
                    style={{height:100, width: 100, borderRadius: 100}}
                    source={{
                    uri: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
                }}/>
                <Text style={styles.container}>Welcome to your mental health app!</Text>
            </View>

            <View style={styles.viewContainer2}>

                <View style={styles.textInputBox}>
                    <FontAwesomeIcon size={20} icon={fasEnvelope} color={'grey'}/>
                    <TextInput style={styles.textInput} placeholder={'Email'}/>
                </View>

                <View style={styles.textInputBox2}>
                <View style={styles.textInputBox}>
                    <FontAwesomeIcon size={20} icon={fasUser} color={'grey'}/>
                    <TextInput style={styles.textInput} placeholder={'Name'}/>
                </View>
                    <TextInput style={styles.textInput2} placeholder={'Age'} keyboardType={'numeric'}/>
                </View>

                <View style={styles.textInputBox}>
                    <FontAwesomeIcon size={20} icon={fasLock} color={'grey'}/>
                    <TextInput style={styles.textInput} placeholder={'Password'}/>
                </View>

            </View>
                
            <View style={styles.viewContainer3}>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                    Alert.alert("You have been registrated!")
                }}>
                    <Text style={styles.textButton}>Register</Text>
                </TouchableOpacity>
                <View style={styles.viewContainer4}>
                    <Text style={styles.textLogIn}>Already have an account?</Text>
                    <TouchableOpacity style={styles.buttonContainer2} onPress={() => {
                        Alert.alert("Your account")
                    }}>
                        <Text style={styles.textButton2}> Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        color: 'black',
        fontSize: 22,
    },
    viewContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: "center"
    },
    viewContainer2: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    viewContainer3: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputBox: {
        width: '80%',
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 10,
        borderRadius: 7,
        flexDirection: 'row',
        marginVertical: 5,
        borderWidth: 1,
    },
    textInputBox2: {
        width: '80%',
        height: 50,
        alignItems: 'center',
        borderRadius: 7,
        flexDirection: 'row',
        marginVertical: 13,
    },
    textInput: {
        padding: 10,
        flex: 1,
        backgroundColor: 'white',
        height: 45,
        alignItems: 'center',
        borderRadius: 7,
        margin: 8,
    },
    textInput2: {
        textAlign: 'center',
        padding: 10,
        flex: 1,
        backgroundColor: 'white',
        height: 50,
        borderRadius: 7,
        marginLeft: 10,
        borderWidth: 1,
    },
    buttonContainer: {
        width: '40%',
        height: 50,
        backgroundColor: '#7071E8',
        justifyContent: 'center',
        borderRadius: 7,
        borderWidth: 1,
    },
    textButton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
    textLogIn: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
    },
    textButton2: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        textDecorationLine: 'underline',
    },
    viewContainer4: {
        flexDirection: 'row',
        marginVertical: 30,
    }
});

export default Register;