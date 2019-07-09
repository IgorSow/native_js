import React, {Component} from 'react';
// @ts-ignore
import {Linking, PermissionsAndroid, Platform, StyleSheet, Text, ImageBackground, View, TextInput} from 'react-native';

type Props = {};
export default class InputTitle extends Component<Props, any> {


    render() {
        return (
            <View>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>LOGIN</Text>
                    <TextInput style={styles.input}></TextInput>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft:30,
        paddingRight:30,
    },
    title: {
        fontSize: 12,
        color: '#FFFFFF',
        height: 13,
        textAlign: 'left',
        marginBottom: 11,
        fontFamily: 'Mitr',

    },
    input: {
        height: 36,
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        opacity: 0.7,
    },
});
