import React, {Component} from 'react';
// @ts-ignore
import {ImageBackground, StyleSheet, View} from 'react-native';
import InputTitle from "../components/Input-title";

type Props = {};
export default class LoginP extends Component<Props, any> {


    render() {
        return (
            <View>
                <ImageBackground source={require('../images/background.png')} style={{width: '100%', height: '100%'}}>

                    <View style={styles.email}>
                        <InputTitle/>
                    </View>
                </ImageBackground>
            </View>

        )
    }
}
const styles = StyleSheet.create({

    wrapper: {
        flex: 1,
        flexDirection: 'column',
    },
    gap: {
        height: 300,
        overflow: 'hidden',
    },
    email: {
        marginTop: 300,
    },

});
