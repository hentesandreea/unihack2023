import {Text, View, StyleSheet} from "react-native";


function KMotivationalQuotes(
    {title, description}
) {
    return (
       <View style={styles.label}>
        <Text style ={styles.header}>
            {title}
        </Text>
           <Text style={styles.quote}>{description}</Text>
       </View>
    );
}
const styles = StyleSheet.create({
    label:{
        backgroundColor:'white',
        height:'12%',
        width:'90%',
        padding:10,
        alignItems:'left',
        justifyContent:'space-evenly',
        borderRadius:10,
    },
    header:{
      fontSize:16,
        fontWeight:'bold',
    },
    quote:{
        fontSize:14,
        alignItems:'left',
    },

})

export default KMotivationalQuotes;