import React from 'react';
import {Button, Text, Touchable, TouchableOpacity, View} from "react-native";
import KContainer from "../../ui-components/KContainer";
import {handleLogout} from "../../../firebase/handleLogout";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faHome as fasHome} from "@fortawesome/free-solid-svg-icons/faHome";
import designColors from "../../../constants/Colors";
import {faRightFromBracket as fasRightFromBracket} from "@fortawesome/free-solid-svg-icons/faRightFromBracket";

import {auth} from "../../../firebase/config";
import {database} from "../../../firebase/config";
import {child, get, ref} from "firebase/database";


function Profile(props) {
    return (
        <KContainer>
            <View
                style={{width: "100%", height: 50, paddingHorizontal: 20, paddingVertical: 5, alignItems: "flex-end"}}>
                <TouchableOpacity onPress={handleLogout}>
                    <FontAwesomeIcon size={30} icon={fasRightFromBracket} color={designColors.iconColorUnfocused}/>
                </TouchableOpacity>
            </View>

            {/*<Button title={"APASA"} onPress={() =>{*/}
            {/*    console.log(userulAlaBlana.name);*/}
            {/*}}/>*/}
        </KContainer>

    );
}


export default Profile;