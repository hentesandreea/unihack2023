import {View, Text,StyleSheet} from "react-native";
import KTag from "../../ui-components/KTag";

function KNoteHistory(props){
return(
    <View style ={styles.BigCont}>
        <View style={styles.Data}>
            <Text style={styles.dateText}>Date: 15.10.2023</Text>
        </View>
    <View style={styles.container}>
        <Text style ={styles.message}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <View style={styles.tags}>
            <KTag onPress={()=>{}} color={'#9599fc'} label={"Happy"}/>
            <KTag onPress={()=>{}} color={'#9599fc'} label={"Birthday"}/>
        </View>
    </View>
</View>
)
}

const styles = StyleSheet.create({
    BigCont:{
        height:'50%',
        width:'90%',
    },
Data:{
    alignItems:'left',
    padding:10,

},
dateText:{
    fontSize:18,
    alignItems:'left',
},
    container:{
        backgroundColor:'white',
        borderRadius:10,
        padding:10,
        height:'50%',
        width:'100%',
        justifyContent:'space-evenly',

    },
    tags:{
        flexDirection:'row',
        gap:8,
    }
})
export default KNoteHistory;