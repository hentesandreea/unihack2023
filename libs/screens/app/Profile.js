import React from 'react';
import {Button, Text, Touchable, TouchableOpacity, View} from "react-native";
import KContainer from "../../ui-components/KContainer";
import {handleLogout} from "../../../firebase/handleLogout";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faHome as fasHome} from "@fortawesome/free-solid-svg-icons/faHome";
import designColors from "../../../constants/Colors";
import {faRightFromBracket as fasRightFromBracket} from "@fortawesome/free-solid-svg-icons/faRightFromBracket";

function Profile(props) {
    return (
        <KContainer>
            <View
                style={{width: "100%", height: 50, paddingHorizontal: 20, paddingVertical: 5, alignItems: "flex-end"}}>
                <TouchableOpacity onPress={handleLogout}>
                    <FontAwesomeIcon size={30} icon={fasRightFromBracket} color={designColors.iconColorUnfocused}/>
                </TouchableOpacity>
            </View>


        </KContainer>
    );
}


export default Profile;