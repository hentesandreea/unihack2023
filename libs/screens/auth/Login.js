import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import KContainer from '../../ui-components/KContainer';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope as fasEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faUser as fasUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faLock as fasLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { handleRegister } from '../../../firebase/handleRegister';
import { handleLogin } from '../../../firebase/handleLogin';

function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KContainer>
      <View style={styles.viewContainer}>
        <Text style={styles.container}>Welcome back!</Text>
      </View>

      <View style={styles.viewContainer2}>
        <View style={styles.textInputBox}>
          <FontAwesomeIcon size={20} icon={fasEnvelope} color={'grey'} />
          <TextInput
            autoCapitalize={'none'}
            style={styles.textInput}
            placeholder={'Email'}
            onChangeText={text => setEmail(text)}
          />
        </View>

        <View style={styles.textInputBox}>
          <FontAwesomeIcon size={20} icon={fasLock} color={'grey'} />
          <TextInput
            autoCapitalize={'none'}
            style={styles.textInput}
            placeholder={'Password'}
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
      </View>

      <View style={styles.viewContainer3}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            if (email !== '' && password !== '') {
              handleLogin(email, password);
            } else {
              Alert.alert('Try again', 'Not enough information');
            }
          }}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
        <View style={styles.viewContainer4}>
          <Text style={styles.textLogIn}>Do not have an account yet?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text style={styles.textButton2}> Register</Text>
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
    fontSize: 32,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  viewContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
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
    fontWeight: '300',
  },
  textButton2: {
    fontWeight: '300',
    color: '#7071E8',
    textAlign: 'center',
    fontSize: 18,
  },
  viewContainer4: {
    marginVertical: 30,
  },
});

export default Login;
