import {View, Text, StyleSheet, useWindowDimensions, Image} from "react-native";
import KTag from "./KTag";
import designColors from "../../constants/Colors";
import {LinearGradient} from "expo-linear-gradient";
import KSpacer from "./KSpacer";

function KNoteHistory(props) {

    const {height, width} = useWindowDimensions();

    return (
        <View style={{width: width * 0.8, padding: 10, height: height * 0.4, borderRadius: 10}}>
            <LinearGradient colors={designColors.gradient1} style={{
                width: "100%",
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                padding:15
            }}>
                <Text style={{fontSize: 22, fontWeight: "500"}}>12.11.2023</Text>
                <KSpacer/>
                <View style={{width: "30%",}}>
                    <KTag color={designColors.gradient4} onPress={()=>{}} label={"Happy"}/>

                </View>
                <KSpacer h={5}/>
                <View style={{width:"100%", flexDirection:"row", flexWrap:"wrap", gap:5}}>
                    <KTag color={designColors.gradient3} onPress={()=>{}} label={"Anniversary"}/>
                    <KTag color={designColors.gradient3} onPress={()=>{}} label={"Party"}/>
                    <KTag color={designColors.gradient3} onPress={()=>{}} label={"Friends"}/>
                </View>

            </LinearGradient>
            <View style={{
                backgroundColor: "rgb(255,255,255)",
                width: "100%",
                padding: 15,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
            }}>
                <Text style={{fontSize: 14, fontWeight: "500"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Faucibus purus in massa tempor nec feugiat nisl pretium.</Text>
            </View>

        </View>
    )
}

export default KNoteHistory;