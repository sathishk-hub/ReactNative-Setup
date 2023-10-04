import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { type RootStackParams } from './RootStackParams';
import Home from '../pages/home';

const Stack = createStackNavigator<RootStackParams>();

const routes: Array<React.ComponentProps<typeof Stack.Screen>> = [
    {
        name: 'Home',
        component: Home,
    },
];

function RootStack(): JSX.Element {
    return (
        <Stack.Navigator initialRouteName="Home">
            {routes.map(routeConfig => (
                <Stack.Screen key={routeConfig.name} {...routeConfig} />
            ))}
            {/* <Stack.Screen name="Home" component={Home} /> */}
        </Stack.Navigator>
    );
}

export default RootStack;
