import {Text, View, StyleSheet} from "react-native";
import KSpacer from "./KSpacer";
import designColors from "../../constants/Colors";


function KMotivationalQuotes(
    {title, description}
) {
    return (
        <View style={styles.label}>
            <Text style={styles.header}>
                {title}
            </Text>
            <KSpacer h={5}/>
            <Text style={styles.quote}>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        backgroundColor: designColors.tertiary,
        width: '90%',
        padding: 12,
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        borderRadius: 10,
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing:0.4
    },
    quote: {
        fontSize: 14,
        alignItems: 'flex-start',
        letterSpacing:0.3
    },

})

export default KMotivationalQuotes;