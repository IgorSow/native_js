import React, {Component} from 'react';
// @ts-ignore
import {StyleSheet, Text, TextInput, View} from 'react-native';

type Props = { title: String, onChange: (value: String) => void };
export default class InputTitle extends Component<Props, any> {

    constructor(props: Props, context: any) {
        super(props, context);
        this.state = {
            value: ''
        }
    }

    render() {
        return (

            <View style={styles.wrapper}>
                <Text style={styles.title}>{(this.props.title)}</Text>
                <TextInput onChangeText={this.onChange} style={styles.input}></TextInput>
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
        flexDirection: 'column',
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
