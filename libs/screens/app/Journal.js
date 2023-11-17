import {Text, TextInput, TouchableOpacity} from "react-native";
import KContainer from "../../ui-components/KContainer";
import axios from "axios";
import OpenAIConstants from "../../../constants/OpenAIConstants";
import {useState} from "react";
import openAIConstants from "../../../constants/OpenAIConstants";
async function generateCauses({journalNote, emotion}) {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/engines/text-davinci-003/completions',
            {
                prompt: openAIConstants.prompt.replace("%",journalNote).replace("%",emotion),
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

    return (
        <KContainer>
            <TextInput
                placeholeder={"Write something here"}
                value={journalNote}
                placeholderTextColor={"black"}
                style={{
                    padding: 10,
                    height: "10%",
                    width: "80%"
                }}
                onChangeText={(text) => setJournalNote(text)}
            />
            <TouchableOpacity onPress={() => {
                generateCauses
                ({journalNote: journalNote, emotion: "sad"}).then(response => {
                    setListOfCauses(response.split("/").map(el => el.toLowerCase()))
                })
                console.log(listOfCauses)

                if(listOfCauses.length === 0) {
                    alert("Please send again!")
                }else {
                    //sending the thing to db
                    setListOfCauses([])
                    setJournalNote("")
                }
            }}>
                <Text>Send data</Text>
            </TouchableOpacity>
        </KContainer>
    );
}

export default Journal;