import React, {Component} from 'react';
// @ts-ignore
import {Button, ImageBackground, StyleSheet, Text, View} from 'react-native';
import InputTitle from "../components/Input-title";
import UserRepository from "../services/repository/UserRepository.ts"

type Props = {};
export default class LoginP extends Component<Props, any> {

    private email: String;
    private password: String;

    constructor(props: Props, context: any) {
        super(props, context);
        this.email = '';
        this.password = '';
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.ab}>
                    <ImageBackground source={require('../images/background.png')}
                                     style={{width: '100%', height: '100%'}}/>
                </View>
                <View style={styles.ab}>
                    <View style={styles.wrapper}>
                        <View style={styles.wrapperInput}>
                            <View style={styles.logo}><Text>Every Day Meals</Text></View>
                            <View style={styles.email}><InputTitle onChange={value => this.email = value}
                                                                   title={'email'}/></View>
                            <View style={styles.password}><InputTitle onChange={value => this.password = value}
                                                                      title={'password'}/></View>
                            <Button title={"Login"} onPress={this.collect}/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }


    collect = () => {

        //
        // fetch('http://51.38.128.202:100/app/login', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         nick: 'igor',
        //         password: 'pass',
        //     }),
        // }).then((response) => response.json())
        //     .then((responseJson) => {
        //         alert(JSON.stringify(responseJson))
        //
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });

        UserRepository.post(this.email, this.password);



        // let request: Request = new Request("http://51.38.128.202:100/app/schedule", {method: 'get'});
        //
        // let promise = fetch(request)
        //     .then(response => response.json())
        //     .then(data => {alert(JSON.stringify(data))}).catch(e =>alert(e));


        // alert('email: ' + this.email + 'pass: ' + this.password)
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
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        width: 200,
        backgroundColor: "white"

    },
    wrapper: {
        flex: 1,
        height: '100%',
        flexDirection: 'row',
    },

    wrapperInput: {
        width: '100%',
        height: 550,
        paddingLeft: 30,
        paddingRight: 30,
        alignSelf: 'center',
        justifyContent: "space-around"
    },
    email: {
        // marginTop: 10,
    },
    password: {
        // marginTop: 70,
    },


});
