import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome as fasHome } from '@fortawesome/free-solid-svg-icons/faHome';
import designColors from '../../../constants/Colors';
import Home from './Home';
import { faPenToSquare as fasPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare';
import Journal from './Journal';
import { faUserCircle as fasUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon
              size={focused ? 32 : 26}
              icon={fasHome}
              color={
                focused
                  ? designColors.iconColorFocused
                  : designColors.iconColorUnfocused
              }
            />
          ),
        }}
        name={'Home'}
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon
              size={focused ? 32 : 26}
              icon={fasPenToSquare}
              color={
                focused
                  ? designColors.iconColorFocused
                  : designColors.iconColorUnfocused
              }
            />
          ),
        }}
        name={'Journal'}
        component={Journal}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon
              size={focused ? 32 : 26}
              icon={fasUserCircle}
              color={
                focused
                  ? designColors.iconColorFocused
                  : designColors.iconColorUnfocused
              }
            />
          ),
        }}
        name={'Profile'}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

const screenOptions = {
  tabBarStyle: {
    backgroundColor: designColors.backgroundTabNav,

    borderTopWidth: 0,
    borderTopColor: 'transparent',
  },
};
export default HomeStack;
