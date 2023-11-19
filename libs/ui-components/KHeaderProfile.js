import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { handleLogout } from '../../firebase/handleLogout';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRightFromBracket as fasRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket';
import designColors from '../../constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const KHeaderProfile = ({ username, age }) => {
  const { height, width } = useWindowDimensions();
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View
      style={{
        top: -top,
        width: '100%',
        height: height * 0.25,
        backgroundColor: 'rgba(255,255,255,0.78)',
        borderRadius: 20,
      }}>
      <View style={styles.up}>
        <View
          style={{
            top: top + 10,
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            borderStyle: 'solid',
            borderWidth: 2,
            borderColor: 'white',
          }}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/originals/94/0a/fc/940afc19cd0eb01c78904d43c2a80a8a.jpg',
            }}
            style={styles.image}></Image>
        </View>
      </View>
      <View style={styles.down}>
        <View style={styles.text}>
          <Text style={styles.name}>{username}</Text>
          <Text style={styles.age}>Age: {age}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  up: {
    width: '100%',
    backgroundColor: 'rgba(255,213,183,0.78)',
    alignItems: 'left',
    paddingHorizontal: 30,
    height: '50%',
  },
  down: {
    borderRadius: 20,
    padding: 20,
    height: '50%',
  },
  text: {
    top: 35,
    paddingHorizontal: 10,
    alignItems: 'left',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  age: {
    fontSize: 18,
    color: 'gray',
    fontWeight: 'normal',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 100,
  },
});
export default KHeaderProfile;
