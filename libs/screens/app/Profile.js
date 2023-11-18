import React from 'react';
import {Text} from "react-native";
import KContainer from "../../ui-components/KContainer";
import KNoteHistory from "./KNoteHistory";

function Profile(props) {
    return (
        <KContainer>
            <KNoteHistory/>
        </KContainer>

    );
}

export default Profile;