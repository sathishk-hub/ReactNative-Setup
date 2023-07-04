import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './RootStack';

function AppRoutes(): JSX.Element {
    return (
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    );
}

export default AppRoutes;
