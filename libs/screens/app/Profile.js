import React, { useEffect, useState } from 'react';
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
import KHeaderProfile from '../../ui-components/KHeaderProfile';

import { auth, database } from '../../../firebase/config';
import { getEmotionAndCauses } from '../../../firebase/getEmotionAndCauses';
import getPercentageTime from '../../../helpers/getPercentage';
import KPiePercentage from '../../ui-components/KPiePercentage';
import KSpacer from '../../ui-components/KSpacer';
import { getEmotionAndCausesAll } from '../../../firebase/getEmotionsAndCausesAll';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { onValue } from '@firebase/database';
import { ref } from 'firebase/database';

function Profile(props) {
  const [historyData, setHistoryData] = useState([1, 2, 3, 4]);
  const { height, width } = useWindowDimensions();
  const [user, setUser] = useState({});

  useEffect(() => {
    onValue(ref(database, 'users/'), snapshot => {
      if (snapshot.exists()) {
        let aux = Object.values(snapshot.val()).filter(
          el => el['id'] === auth.currentUser.uid
        );

        setUser(aux[0]);
      }
    });
  }, []);

  return (
    <KContainer>
      <KHeaderProfile username={user['name']} age={user['age']} />
      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontSize: 28, fontWeight: '500' }}>Stats</Text>
      </View>

      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontSize: 16, fontWeight: '300' }}>
          Stats based on my notes
        </Text>
      </View>
      <KSpacer />
      <KPiePercentage forUser={true} />
      <KSpacer h={20} />
      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontSize: 28, fontWeight: '500' }}>History</Text>
      </View>

      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontSize: 16, fontWeight: '300' }}>
          My written notes
        </Text>
      </View>
      <KSpacer />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{ height: height * 0.3 }}
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
      <KSpacer h={20} />
      <TouchableOpacity onPress={handleLogout}>
        <FontAwesomeIcon
          size={30}
          icon={fasRightFromBracket}
          color={designColors.iconColorUnfocused}
        />
      </TouchableOpacity>
    </KContainer>
  );
}

export default Profile;
