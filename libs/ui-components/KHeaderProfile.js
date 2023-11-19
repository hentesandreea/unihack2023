import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import {handleLogout} from "../../firebase/handleLogout";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faRightFromBracket as fasRightFromBracket} from "@fortawesome/free-solid-svg-icons/faRightFromBracket";
import designColors from "../../constants/Colors";

const KHeaderProfile =() =>{
    return(
    <View style={styles.header}>
        <View style={styles.up}>
            <View style ={styles.circle}>
                <Image source={{uri:"https://i.pinimg.com/originals/94/0a/fc/940afc19cd0eb01c78904d43c2a80a8a.jpg"}}
                       style={styles.image}>
                </Image>
        </View>

            </View>
        <View style={styles.down}>

            <View style ={styles.text}>
                <Text style={styles.name}>Helena Mills</Text>
                <Text style={styles.age}>Age: 21</Text>
            </View>
        </View>
    </View>

    )
}
const styles = StyleSheet.create({
    header:{
        width:"100%",
        height:"30%",
        backgroundColor:'white',

    },
    up:{
        height:'45%',
        width:'100%',
        backgroundColor:'#FFD5B7',
        padding:20,
        alignItems:'left',
    },
    circle:{
        width: 90,
        height: 90,
        borderRadius: 100 / 2,
        borderStyle:'solid',
        borderWidth:2,
        borderColor:'white',
    },
    down:{
        borderRadius:20,
        padding:20,
        height:'65%',
        justifyContent:'center',

    },
    text:{
        alignItems:'left',
        justifyContent:'center',
    },
    name:{
        fontSize:18,
        fontWeight:'bold',
    },
    age:{
        fontSize:16,
        color:'gray',
        fontWeight:'normal',
    },
    image:{
        height:'100%',
        width:'100%',
        borderRadius:100,

    },

})
export default KHeaderProfile;