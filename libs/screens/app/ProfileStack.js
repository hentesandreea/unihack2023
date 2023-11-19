import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Profile from "./Profile";
import {ProfileThoughtsHistory} from "./ProfileThoughtsHistory";

const Stack = createNativeStackNavigator();

export const ProfileStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{headerShown: false}}
                name={'Profile'}
                component={Profile}
            />
            <Stack.Screen
                options={{headerShown: false}}
                name={'ProfileThoughtsHistory'}
                component={ProfileThoughtsHistory}
            />
        </Stack.Navigator>
    );
};