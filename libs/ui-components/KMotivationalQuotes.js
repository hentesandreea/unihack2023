import {Text, View, StyleSheet} from "react-native";
import KSpacer from "./KSpacer";
import designColors from "../../constants/Colors";
import {LinearGradient} from "expo-linear-gradient";


function KMotivationalQuotes(
    {title, description}
) {
    return (
        <LinearGradient colors={["#e4e2f8", "rgba(215,211,252,0.93)"]}
                        style={styles.label}>
            <Text style={styles.header}>
                {title}
            </Text>
            <KSpacer />
            <Text style={styles.quote}>{description}</Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    label: {
        width: '90%',
        padding: 12,
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        borderRadius: 10,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 0.4
    },
    quote: {
        fontSize: 16,
        alignItems: 'flex-start',
        letterSpacing: 0.3
    },

})

export default KMotivationalQuotes;