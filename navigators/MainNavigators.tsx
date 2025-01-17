import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../src/components/WelcomeScreens';
import Game from '../src/components/Game';
import PerfileScreen from '../../ProyectoMovilesII/screens/PerfilScreens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={WelcomeScreen} />
            <Stack.Screen name="Registro" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={WelcomeScreen} />
            <Stack.Screen name="Welcome" component={MyTabs} />
        </Stack.Navigator>
    );
}

function MyTabs() {
    return (
        <Tab.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Galeria" component={Game} />
            <Stack.Screen name="Camara" component={PerfileScreen} />
        </Tab.Navigator>
    )
}

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>

    );
}