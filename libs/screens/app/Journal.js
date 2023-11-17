import {Alert, Text, TextInput, TouchableOpacity, View} from "react-native";
import KContainer from "../../ui-components/KContainer";
import axios from "axios";
import OpenAIConstants from "../../../constants/OpenAIConstants";
import {useState} from "react";
import openAIConstants from "../../../constants/OpenAIConstants";
import KSpacer from "../../ui-components/KSpacer";
import designColors from "../../../constants/Colors";
import KButton from "../../ui-components/KButton";
import KTag from "../../ui-components/KTag";
import generalConstants from "../../../constants/GeneralConstants";

async function generateCauses({journalNote, emotion}) {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/engines/text-davinci-003/completions',
            {
                prompt: openAIConstants.prompt.replace("%", journalNote).replace("%", emotion),
                max_tokens: 200
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${OpenAIConstants.api}`
                }
            }
        );
        return (response.data.choices[0].text.trim());
    } catch (error) {
        console.error('Error generating required answer:', error);
        throw error;
    }
}


function Journal() {

    const [journalNote, setJournalNote] = useState("")
    const [listOfCauses, setListOfCauses] = useState([])
    const [emotionToSend, setEmotionToSend] = useState("")

    return (
        <KContainer>
            <KSpacer h={20}/>
            <View style={{width: "90%", alignItems: "flex-start"}}>
                <Text style={{fontSize: 32, fontWeight: "500", color: designColors.primary}}>My thoughts</Text>
            </View>
            <KSpacer h={20}/>
            <View style={{width: "90%", alignItems: "flex-start", paddingHorizontal: 5}}>
                <Text style={{fontSize: 14, color: designColors.iconColorUnfocused}}>{journalNote.length} / 200</Text>
            </View>
            <KSpacer h={5}/>
            <TextInput
                multiline={true}
                placeholeder={"Write something here"}
                value={journalNote}
                placeholderTextColor={"black"}
                autoComplete={"off"}
                style={{
                    borderRadius: 10,
                    height: 400,
                    width: "90%",
                    backgroundColor: designColors.tertiary,
                    padding: 15,
                }}
                onChangeText={(text) => setJournalNote(text)}
            />
            <KSpacer h={20}/>
            <View style={{width: "90%", alignItems: "flex-start", flexDirection: "row", flexWrap: "wrap", gap: 10}}>
                {
                    generalConstants.emotions.map(emotion => <KTag key={emotion}
                                                                   color={emotion !== emotionToSend ? designColors.tagComponentColor : designColors.iconColorFocused}
                                                                   label={emotion} onPress={() => {
                        setEmotionToSend(emotion)
                    }
                    }/>)
                }
            </View>
            <KSpacer h={30}/>
            <KButton label={"Send data"} onPress={() => {
                if (journalNote !== "" && emotionToSend !== "") {
                    generateCauses
                    ({journalNote: journalNote, emotion: emotionToSend}).then(response => {
                        setListOfCauses(response.split("/").map(el => el.toLowerCase()))
                    })
                    console.log(listOfCauses)

                    if (listOfCauses.length === 0) {
                        Alert.alert("Something went wrong", "Please try again to send your data", [
                            {
                                text: 'Sure', onPress: () => {
                                }
                            }
                        ])
                    } else {
                        //sending the thing to db
                        setListOfCauses([])
                        setJournalNote("")
                        setEmotionToSend("")
                    }
                } else {
                    Alert.alert("Something went wrong", "Please complete all the inputs", [
                        {
                            text: 'Sure', onPress: () => {
                            }
                        }
                    ])
                }
            }}/>
        </KContainer>
    );
}

export default Journal;