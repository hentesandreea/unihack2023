import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Login from "./libs/screens/auth/Login";
import Register from "./libs/screens/auth/Register";
import Home from "./libs/screens/app/Home";
import Journal from "./libs/screens/app/Journal";
import Profile from "./libs/screens/app/Profile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name={"Login"} component={Login}/>
            <Stack.Screen options={{headerShown:false}} name={"Register"} component={Register}/>
        </Stack.Navigator>
    )
}

const AppStack = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen options={{headerShown:false}} name={"Home"} component={Home}/>
            <Tab.Screen options={{headerShown:false}} name={"Journal"} component={Journal}/>
            <Tab.Screen options={{headerShown:false}} name={"Profile"} component={Profile}/>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
