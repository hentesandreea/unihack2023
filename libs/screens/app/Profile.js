import React, { useEffect, useState} from 'react';
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
import {handleLogout} from '../../../firebase/handleLogout';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome as fasHome} from '@fortawesome/free-solid-svg-icons/faHome';
import designColors from '../../../constants/Colors';
import {faRightFromBracket as fasRightFromBracket} from '@fortawesome/free-solid-svg-icons/faRightFromBracket';
import KNoteHistory from '../../ui-components/KNoteHistory';
import KButton from '../../ui-components/KButton';
import KHeaderProfile from '../../ui-components/KHeaderProfile';

import KPiePercentage from '../../ui-components/KPiePercentage';
import KSpacer from '../../ui-components/KSpacer';
import {auth} from "../../../firebase/config";
import {database} from "../../../firebase/config";
import { onValue, ref} from "firebase/database";
import formatDate from "../../../helpers/formatDate";


function Profile({navigation}) {
    const [historyData, setHistoryData] = useState([]);
    const [thoughtData, setToughtData] = useState()
    const {height, width} = useWindowDimensions();
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

    const listOfThoughtRoute = ref(database, 'thoughts/');


    useEffect(() => {
        onValue(listOfThoughtRoute, (snapshot) => {
            if(snapshot.exists()){
                let thoughts = Object.values(snapshot.val()).filter(th => {
                    return th["userId"] === auth.currentUser.uid
    })
                thoughts.push("&")
                setHistoryData(thoughts.filter(el => formatDate(el["date"]) === formatDate( (new Date()).toString()) || el==="&"))
            }

            console.log(historyData)
        });

    }, []);



    return (
      <KContainer><KHeaderProfile username={user['name']} age={user['age']} />
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
        renderItem={({ item, index }) =>
                    historyData.indexOf(item) !== historyData.length -1? (
                        <KNoteHistory thought={item} />
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
                                onPress={() => navigation.navigate("ProfileThoughtsHistory")}
                                color={designColors.gradient3}
                            />
                        </View>
                    )}/>
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
