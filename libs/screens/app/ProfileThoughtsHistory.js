import KContainer from "../../ui-components/KContainer";
import {FlatList, Text, TouchableOpacity, useWindowDimensions, View} from "react-native";
import KNoteHistory from "../../ui-components/KNoteHistory";
import KButton from "../../ui-components/KButton";
import designColors from "../../../constants/Colors";
import React, {useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import {auth, database} from "../../../firebase/config";
import formatDate from "../../../helpers/formatDate";
import KSpacer from "../../ui-components/KSpacer";
import {handleLogout} from "../../../firebase/handleLogout";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faRightFromBracket as fasRightFromBracket} from "@fortawesome/free-solid-svg-icons/faRightFromBracket";

export function ProfileThoughtsHistory({navigation}) {

    const [historyData, setHistoryData] = useState([]);
    const [thoughtData, setToughtData] = useState()
    const {height, width} = useWindowDimensions();

    const listOfThoughtRoute = ref(database, 'thoughts/');


    useEffect(() => {
        onValue(listOfThoughtRoute, (snapshot) => {
            if (snapshot.exists()) {
                let thoughts = Object.values(snapshot.val()).filter(th => {
                    return th["userId"] === auth.currentUser.uid
                })
                thoughts.push("&")
                setHistoryData(thoughts)
            }

            console.log(historyData)
        });

    }, []);

    return (
        <View style={{flex: 1, alignItems: "center"}}>
            <KSpacer h={30}/>

            <View style={{width: "100%", height: 50, alignItems: "center", justifyContent: "space-between", flexDirection: "row", paddingHorizontal: 20}}>
                <View style={{width: 30}}></View>

                <Text style={{fontWeight: "bold", fontSize: 20}}>History</Text>

                <TouchableOpacity onPress={navigation.goBack}>
                    <FontAwesomeIcon
                        size={30}
                        icon={fasRightFromBracket}
                        color={designColors.iconColorUnfocused}
                    />
                </TouchableOpacity>
            </View>

            <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                // horizontal
                data={historyData}
                renderItem={({item, index}) =>
                    historyData.indexOf(item) !== historyData.length - 1 ?
                        <KNoteHistory thought={item}/> : <></>

                }/>
        </View>
    );
}