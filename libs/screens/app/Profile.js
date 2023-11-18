import React, { useState } from 'react';
import {
  Button,
  FlatList,
  Text,
  Touchable,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import KContainer from '../../ui-components/KContainer';
import { handleLogout } from '../../../firebase/handleLogout';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome as fasHome } from '@fortawesome/free-solid-svg-icons/faHome';
import designColors from '../../../constants/Colors';
import { faRightFromBracket as fasRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket';
import KNoteHistory from '../../ui-components/KNoteHistory';
import KButton from '../../ui-components/KButton';

import {auth} from "../../../firebase/config";
import {database} from "../../../firebase/config";
import {child, get, ref} from "firebase/database";


function Profile(props) {
  const [historyData, setHistoryData] = useState([1, 2, 3, 4]);
  const { height, width } = useWindowDimensions();

  return (
    <KContainer>
      <View
        style={{
          width: '100%',
          height: 50,
          paddingHorizontal: 20,
          paddingVertical: 5,
          alignItems: 'flex-end',
        }}>
        <TouchableOpacity onPress={handleLogout}>
          <FontAwesomeIcon
            size={30}
            icon={fasRightFromBracket}
            color={designColors.iconColorUnfocused}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={historyData}
        renderItem={({ item }) =>
          historyData.indexOf(item) !== historyData.length - 1 ? (
            <KNoteHistory />
          ) : (
            <View
              style={{
                width: width * 0.5,
                height: height * 0.3,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <KButton
                label={'Show more'}
                onPress={() => {}}
                color={designColors.gradient3}
              />
            </View>
          )
        }
      />
    </KContainer>
  );
}

export default Profile;
