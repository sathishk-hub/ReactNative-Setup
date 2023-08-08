/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    useColorScheme,
} from 'react-native';
import config from 'react-native-config';
import FastImage from 'react-native-fast-image';
import { ScrollView } from 'react-native-gesture-handler';
import AppColors from '../../utils/AppColors';

import usePhotoService from '../../services/photo/service';

const iStyles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    container: { margin: 20 },
    photosContainer: { margin: 20, alignItems: 'center' },
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
    img: {
        width: 200,
        height: 200,
        margin: 10,
    },
});

function Home(): JSX.Element {
    const { photos, fetchAllPhotos } = usePhotoService();

    useEffect(() => {
        fetchAllPhotos();
    }, [fetchAllPhotos]);

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundColor = isDarkMode ? 'black' : 'white';

    const isFrom = config.APP_CONFIG ?? '';

    return (
        <SafeAreaView style={[iStyles.screenContainer, { backgroundColor }]}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundColor}
            />
            <ScrollView>
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
                <View style={iStyles.photosContainer}>
                    {photos?.map(item => {
                        return (
                            <View>
                                <FastImage
                                    style={iStyles.img}
                                    source={{
                                        uri: 'https://unsplash.it/400/400?image=1',
                                        headers: {
                                            Authorization: 'someAuthToken',
                                        },
                                        priority: FastImage.priority.normal,
                                    }}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                                <Text
                                    style={[
                                        iStyles.greetingText,
                                        iStyles.font,
                                    ]}>
                                    {item.title}
                                </Text>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;
