import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { type RootStackParams } from './RootStackParams';

const Home = React.lazy(async () => import('../pages/home/index'));

const Stack = createStackNavigator<RootStackParams>();

function RootStack(): JSX.Element {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}

export default RootStack;
