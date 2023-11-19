import React, {useEffect, useState} from 'react';
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

import {auth} from "../../../firebase/config";
import {database} from "../../../firebase/config";
import {child, get, onValue, ref} from "firebase/database";
import formatDate from "../../../helpers/formatDate";


function Profile({navigation}) {
    const [historyData, setHistoryData] = useState([]);
    const [thoughtData, setToughtData] = useState()
    const {height, width} = useWindowDimensions();

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
        <KContainer><KHeaderProfile></KHeaderProfile>
            {/*<View*/}
              {/*  style={{*/}
                {/*    width: '100%',*/}
                {/*    height: 50,*/}
                {/*    paddingHorizontal: 20,*/}
                {/*    paddingVertical: 5,*/}
                {/*    alignItems: 'flex-end',*/}
              {/*  }}>*/}
              {/*  <TouchableOpacity onPress={handleLogout}>*/}
                {/*    <FontAwesomeIcon*/}
                  {/*      size={30}*/}
                  {/*      icon={fasRightFromBracket}*/}
                  {/*      color={designColors.iconColorUnfocused}*/}
                {/*    />*/}
              {/*  </TouchableOpacity>*/}
            {/*</View>*/}
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
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
        </KContainer>
    );
}


export default Profile;
