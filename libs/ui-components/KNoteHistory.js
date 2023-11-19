import {View, Text, StyleSheet, useWindowDimensions, Image} from "react-native";
import KTag from "./KTag";
import designColors from "../../constants/Colors";
import {LinearGradient} from "expo-linear-gradient";
import KSpacer from "./KSpacer";
import {useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import {auth, database} from "../../firebase/config";
import formatDateToString from "../../helpers/formatDate";
import {auto} from "openai/_shims/registry";

function KNoteHistory({thought}) {

    const {height, width} = useWindowDimensions();
    const [causes, setCauses] = useState(thought["listOfCouses"])

    console.log(causes)

    return (
        <View style={{width: width * 0.8, padding: 10, borderRadius: 10}}>
            <LinearGradient colors={designColors.gradient1} style={{
                width: "100%",
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                padding:15
            }}>
                <Text style={{fontSize: 22, fontWeight: "500"}}>{formatDateToString(thought["date"])}</Text>
                <KSpacer/>
                <View style={{width: "50%"}}>
                    <KTag color={designColors.gradient4} onPress={()=>{}} label={thought["selectedEmotion"]}/>

                </View>
                <KSpacer h={5}/>
                <View style={{width:"100%", flexDirection:"row", flexWrap:"wrap", gap:5}}>
                    <KTag color={designColors.gradient3} onPress={()=>{}} label={causes[0]}/>
                    <KTag color={designColors.gradient3} onPress={()=>{}} label={causes[1]}/>
                    <KTag color={designColors.gradient3} onPress={()=>{}} label={causes[2]}/>
                </View>

            </LinearGradient>
            <View style={{
                backgroundColor: "rgb(255,255,255)",
                width: "100%",
                padding: 15,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
            }}>
                <Text style={{fontSize: 14, fontWeight: "500"}}>{thought["note"]}</Text>
            </View>

        </View>
    )
}

export default KNoteHistory;