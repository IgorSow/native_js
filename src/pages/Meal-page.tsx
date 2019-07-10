import React, {Component} from 'react';
// @ts-ignore
import {Button, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {MealDto} from "../services/objects/MealDto";
// @ts-ignore
import MealRepository from "../services/repository/MealRepository.ts"
type Props = {};
type State = {meal: MealDto};
export default class MealPage extends Component<Props, State> {


    constructor(props: Props, context: any) {
        super(props, context);
        this.state = {
            meal: null
        };

        this.init()

    }
    async init(){
        let meal = await MealRepository.getById(1);
        this.setState({meal: meal})
    }
    componentDidMount(){

    }

    render() {

        if (this.state.meal) {
            return (
                <View style={{flex: 1}}>
                    <View style={styles.ab}>
                        <ImageBackground source={require('../images/background_full.png')}
                                         style={{width: '100%', height: '100%'}}/>
                    </View>
                    <View style={styles.ab}>
                        <View style={styles.wrapper}>
                            <View style={styles.wrapperInput}>
                                <View style={styles.logo}><Text>{(this.state.meal.title)}</Text></View>
                            </View>
                        </View>
                    </View>
                </View>
            )
        }
        else {
            return (
                <View style={{flex: 1}}>
                    <View style={styles.ab}>
                        <ImageBackground source={require('../images/background_full.png')}
                                         style={{width: '100%', height: '100%'}}/>
                    </View>
                    <View style={styles.ab}>
                        <View style={styles.wrapper}>
                            <View style={styles.wrapperInput}>
                                <View style={styles.logo}><Text>LOADING......</Text></View>
                            </View>
                        </View>
                    </View>
                </View>
            )
        }
    }


    collect = async () => {


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
