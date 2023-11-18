import KContainer from "../../ui-components/KContainer";
import {useEffect, useState} from "react";
import KMotivationalQuotes from "../../ui-components/KMotivationalQuotes";
import KSpacer from "../../ui-components/KSpacer";
import {View} from "react-native";
import {getQuotes} from "../../../helpers/getQuotes";
import LottieView from "lottie-react-native";
import KButton from "../../ui-components/KButton";
import designColors from "../../../constants/Colors";


function Home() {

    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        getQuotes().then(resp => setQuotes(resp))
    }, []);

    return (
        <KContainer>
            <KSpacer h={20}/>
            <View style={{width: "100%", alignItems: "center", gap: 10}}>
                {
                    quotes.length !== 0 ?
                        quotes.map(quote => <KMotivationalQuotes key={quotes.indexOf(quote)} title={quote[1]}
                                                                 description={quote[0]}/>) :
                        <LottieView
                            autoPlay
                            speed={1.5}
                            source={require("../../../lottie/loading.json")}
                            style={{height: "100%", width: "100%"}}/>
                }
            </View>
            <KSpacer h={20}/>
            <KButton label={"Refresh"} onPress={()=>{
                setQuotes([])
                getQuotes().then(resp => setQuotes(resp))
            }} color={designColors.primary}/>
        </KContainer>
    );
}

export default Home;