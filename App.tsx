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
    useColorScheme,
} from 'react-native';

const styles = StyleSheet.create({
    highlight: {
        fontWeight: '700',
    },
});

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? 'black' : 'white',
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <Text style={styles.highlight}>App.tsx</Text>
        </SafeAreaView>
    );
}

export default App;
