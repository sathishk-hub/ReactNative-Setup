/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    useColorScheme,
} from 'react-native';
import config from 'react-native-config';
import AppColors from './src/AppColors';

const iStyles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    greetingContainer: {
        borderColor: AppColors.green,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
    },
    font: {
        fontWeight: '700',
    },
    greetingText: {
        color: AppColors.black,
        marginTop: 5,
    },
});

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundColor = isDarkMode ? 'black' : 'white';

    const isFrom = config.APP_CONFIG ?? '';

    return (
        <SafeAreaView style={[iStyles.screenContainer, { backgroundColor }]}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundColor}
            />
            <View style={iStyles.container}>
                <View style={iStyles.greetingContainer}>
                    <Text style={[iStyles.greetingText, iStyles.font]}>
                        Hi Sathish K,
                    </Text>
                    <Text style={[iStyles.greetingText, iStyles.font]}>
                        {`I am from ${isFrom}`}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default App;
