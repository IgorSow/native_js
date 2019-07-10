import React, {Component} from 'react';
// @ts-ignore
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
// @ts-ignore
import {MealDto} from "../services/objects/MealDto";
// @ts-ignore
import MealRepository from "../services/repository/MealRepository.ts"
import MainFram from "../components/MainFram";

type Props = {};
type State = { meal: MealDto };
export default class MealPage extends Component<Props, State> {


    constructor(props: Props, context: any) {
        super(props, context);
        this.state = {
            meal: null,

        };
        let test = true;
        this.init()

    }

    async init() {
        let meal = await MealRepository.getById(2);
        this.setState({meal: meal})
    }

    componentDidMount() {

    }

    render() {

        if (this.state.meal) {


            return (
                <View style={styles.general}>
                    <MainFram>
                        <View style={styles.wrapperInput}>
                            <View style={styles.logo}>
                                <View style={styles.logo}><Text>{(this.state.meal.products.pop().name)}</Text></View>
                                <View style={styles.logo}><Text>{(this.state.meal.products.pop().name)}</Text></View>
                            </View>
                        </View>
                    </MainFram>
                </View>
            )
        } else {
            return (
                <View style={styles.general}>
                    <MainFram>
                        <View style={styles.wrapperInput}>
                            <ActivityIndicator size="large" color="#0000ff"/>
                            <View style={styles.logo}><Text>LOADING .....</Text></View>
                        </View>
                    </MainFram>
                </View>
            )
        }
    }


    collect = async () => {


    }
}
const styles = StyleSheet.create({

    general: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },

    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        width: 200,
        backgroundColor: "red"

    },
    wrapperInput: {
        opacity: 1,
        // width: '100%',
        height: 550,
        paddingLeft: 30,
        paddingRight: 30,
        alignSelf: 'center',
        justifyContent: "space-around",
        backgroundColor: 'yellow',
    },


});
