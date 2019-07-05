/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Platform, TouchableOpacity, Linking, PermissionsAndroid} from 'react-native';
import { CameraKitCameraScreen, } from 'react-native-camera-kit';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor() {

        super();

        this.state = {

            QR_Code_Value: '',

            Start_Scanner: false,

        };
    }

    // render() {
    //     return (
    //         <View style={styles2.container}>
    //             <Text style={styles2.welcome}>Welcome to act Native!</Text>
    //             <Text style={styles2.instructions}>To get sta, edit App.js</Text>
    //             <Text style={styles2.instructions}>{instructions}</Text>
    //         </View>
    //     );
    // }












    openLink_in_browser = () => {

        Linking.openURL(this.state.QR_Code_Value);

    };

    onQR_Code_Scan_Done = (QR_Code) => {

        this.setState({ QR_Code_Value: QR_Code });

        this.setState({ Start_Scanner: false });
    };

    open_QR_Code_Scanner=()=> {

        var that = this;

        if (Platform.OS === 'android') {
            // noinspection JSAnnotator
            async function requestCameraPermission() {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.CAMERA, {
                            'title': 'Camera App Permission',
                            'message': 'Camera App needs access to your camera '
                        }
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {

                        that.setState({ QR_Code_Value: '' });
                        that.setState({ Start_Scanner: true });
                    } else {
                        alert("CAMERA permission denied");
                    }
                } catch (err) {
                    alert("Camera permission err", err);
                    console.warn(err);
                }
            }
            requestCameraPermission();
        } else {
            that.setState({ QR_Code_Value: '' });
            that.setState({ Start_Scanner: true });
        }
    };




    render() {
        if (!this.state.Start_Scanner) {

            return (
                <View style={styles.MainContainer}>

                    <Text style={{ fontSize: 22, textAlign: 'center' }}>React Native Scan QR Code Example</Text>

                    <Text style={styles.QR_text}>
                        {this.state.QR_Code_Value ? 'Scanned QR Code: ' + this.state.QR_Code_Value : ''}
                    </Text>

                    {this.state.QR_Code_Value.includes("http") ?
                        <TouchableOpacity
                            onPress={this.openLink_in_browser}
                            style={styles.button}>
                            <Text style={{ color: '#FFF', fontSize: 14 }}>Open Link in default Browser</Text>
                        </TouchableOpacity> : null
                    }

                    <TouchableOpacity
                        onPress={this.open_QR_Code_Scanner}
                        style={styles.button}>
                        <Text style={{ color: '#FFF', fontSize: 14 }}>
                            Open QR Scanner
                        </Text>
                    </TouchableOpacity>

                </View>
            );
        }
        return (
            <View style={{ flex: 1 }}>

                <CameraKitCameraScreen
                    showFrame={true}
                    scanBarcode={true}
                    laserColor={'#FF3D00'}
                    frameColor={'#00C853'}
                    colorForScannerFrame={'black'}
                    onReadCode={event =>
                        this.onQR_Code_Scan_Done(event.nativeEvent.codeStringValue)
                    }
                />

            </View>
        );
    }


}

const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    QR_text: {
        color: '#000',
        fontSize: 19,
        padding: 8,
        marginTop: 12
    },
    button: {
        backgroundColor: '#2979FF',
        alignItems: 'center',
        padding: 12,
        width: 300,
        marginTop: 14
    },
});

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
