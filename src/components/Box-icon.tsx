import React, {Component} from 'react';
// @ts-ignore
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import FontService from "../services/FontService"

type Props = { title: String, info: String, onChange: (value: String) => void };
export default class BoxIcon extends Component<Props, any> {

    constructor(props: Props, context: any) {
        super(props, context);
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.left}>
                    <View style={styles.title}>
                        <Text style={{fontSize: 20}}>{(FontService.toCapitalise(this.props.title))}</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={{fontSize: 12}}>{(FontService.toCapitalise(this.props.info))}</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <View style={styles.icon1}>
                        <Text> </Text>
                    </View>
                    <View style={styles.icon1}>
                        <ImageBackground source={require('../images/extend.png')}
                                         style={{width: '100%', height: '100%'}}/>
                    </View>
                    <View style={styles.icon1}>
                        <ImageBackground source={require('../images/reload.png')}
                                         style={{width: '100%', height: '100%'}}/>
                    </View>
                </View>
                {/*<TextInput onChangeText={this.onChange} style={styles.input}></TextInput>*/}
            </View>
        )
    }

    onChange = (value: String) => {
        this.props.onChange(value)
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',

    },

    left: {
        flex: 0.65,
        backgroundColor: 'purple',
        borderBottomLeftRadius: 10,

    },
    title: {
        margin: 5,
        flex: 1,
        backgroundColor: 'red'
    },
    info: {
        flex: 1,
        margin: 5,
        // color: 'blue',
        // height: 13,
        // textAlign: 'right',
        // marginBottom: 11,
        // fontFamily: 'Mitr',
        backgroundColor: 'white',
        justifyContent: 'flex-end',

    },
    right: {
        flex: 0.35,
        backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopRightRadius: 10,
    },

    icon1: {
        width: 25,
        height: 25,
        backgroundColor: 'yellow'
    },

});
