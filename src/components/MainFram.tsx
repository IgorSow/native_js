import React, {Component} from 'react';
// @ts-ignore
import {ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';

type Props = {};
export default class MainFram extends Component<Props, any> {

    constructor(props: Props, context: any) {
        super(props, context);
    }

    render() {
           return (
                <View style={{flex: 1}}>
                    <View style={styles.ab}>
                        <ImageBackground source={require('../images/background_full.png')}
                                         style={{width: '100%', height: '100%'}}/>
                    </View>
                    <View style={styles.ab}>
                        <View style={styles.wrapper}>
                            {this.props.children}
                        </View>
                    </View>
                </View>
            )
        }
}
const styles = StyleSheet.create({

    ab: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0

    },
    wrapper: {
        flex: 1,
        margin: 30,
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.87)',
        flexDirection: 'row',
        borderRadius: 10,
    },
});
