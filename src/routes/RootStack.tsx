import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const Home = React.lazy(async () => import('../pages/home/index'));

// stack param list type
interface AppStackParamList {
    Home: undefined;
}

const Stack = createStackNavigator<AppStackParamList>();

function RootStack(): JSX.Element {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}

export default RootStack;
