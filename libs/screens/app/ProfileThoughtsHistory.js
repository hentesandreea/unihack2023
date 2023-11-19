import KContainer from '../../ui-components/KContainer';
import {
  FlatList,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import KNoteHistory from '../../ui-components/KNoteHistory';
import React, { useEffect, useState } from 'react';
import { onValue, ref } from 'firebase/database';
import { auth, database } from '../../../firebase/config';
import KSpacer from '../../ui-components/KSpacer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function ProfileThoughtsHistory({ navigation }) {
  const [historyData, setHistoryData] = useState([]);
  const { top, bottom } = useSafeAreaInsets();

  const listOfThoughtRoute = ref(database, 'thoughts/');

  useEffect(() => {
    onValue(listOfThoughtRoute, snapshot => {
      if (snapshot.exists()) {
        let thoughts = Object.values(snapshot.val()).filter(th => {
          return th['userId'] === auth.currentUser.uid;
        });
        thoughts.push('&');
        setHistoryData(thoughts);
      }

      console.log(historyData);
    });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', top: top }}>
      <KSpacer h={30} />

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
          An historic of all the notes written by me
        </Text>
      </View>
      <KSpacer h={15} />

      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        // horizontal
        data={historyData}
        renderItem={({ item, index }) =>
          historyData.indexOf(item) !== historyData.length - 1 ? (
            <KNoteHistory thought={item} />
          ) : (
            <></>
          )
        }
      />
    </View>
  );
}
