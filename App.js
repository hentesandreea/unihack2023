import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Login from "./libs/screens/auth/Login";
import Register from "./libs/screens/auth/Register";
import Home from "./libs/screens/app/Home";
import Journal from "./libs/screens/app/Journal";
import Profile from "./libs/screens/app/Profile";

import {faHome as fasHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faPenToSquare as fasPenToSquare} from '@fortawesome/free-solid-svg-icons/faPenToSquare'
import {faUserCircle as fasUserCircle} from '@fortawesome/free-solid-svg-icons/faUserCircle'
import {faEnvelope as fasEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import {faUser as fasUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faLock as fasLock} from '@fortawesome/free-solid-svg-icons/faLock';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import designColors from "./constants/Colors";

library.add(
    fasHome, fasPenToSquare, fasUserCircle, fasEnvelope, fasUser, fasLock
);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name={"Register"} component={Register}/>
            <Stack.Screen options={{headerShown: false}} name={"Login"} component={Login}/>
        </Stack.Navigator>
    )
}

const AppStack = () => {
    return (
        <Tab.Navigator  screenOptions={screenOptions}>

            <Tab.Screen options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => (
                    <FontAwesomeIcon size={focused?30:26} icon={fasHome} color={focused?designColors.iconColorFocused:designColors.iconColorUnfocused}/>
                ),
            }} name={"Home"} component={Home}/>
            <Tab.Screen options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => (
                    <FontAwesomeIcon size={focused?30:26} icon={fasPenToSquare} color={focused?designColors.iconColorFocused:designColors.iconColorUnfocused}/>
                ),
            }} name={"Journal"} component={Journal}/>
            <Tab.Screen options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => (
                    <FontAwesomeIcon size={focused?30:26} icon={fasUserCircle} color={focused?designColors.iconColorFocused:designColors.iconColorUnfocused}/>
                ),
            }} name={"Profile"} component={Profile}/>
        </Tab.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            {
                false ? AppStack() : AuthStack()
            }
        </NavigationContainer>
    );
}

const screenOptions = {
    tabBarStyle:{
        backgroundColor:designColors.background,
    },
};
