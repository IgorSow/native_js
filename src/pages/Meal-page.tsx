import React, {Component} from 'react';
// @ts-ignore
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
// @ts-ignore
import {MealDto} from "../services/objects/MealDto";
// @ts-ignore
import MealRepository from "../services/repository/MealRepository.ts"
import MainFram from "../components/MainFram";
import BoxIcon from "../components/Box-icon";
import FullMeal from "../components/Full-meal";

type Props = {};
type State = { meal: MealDto };
export default class MealPage extends Component<Props, State> {


    constructor(props: Props, context: any) {
        super(props, context);
        this.state = {
            meal: null,

        };
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
                        <View style={styles.box_icon}>
                            <BoxIcon title={(this.state.meal.typeMeal[0].mealTime)} info={(this.state.meal.title)}
                                     onChange={() => {
                                     }}/>
                        </View>

                        <View style={styles.full_meal}>
                            <FullMeal meal={this.state.meal}/>
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
        borderBottomLeftRadius: 10,
    },

    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        width: 200,
        backgroundColor: "red"

    },

    box_icon: {
        height: 80,
        margin: 10,
    },

    full_meal: {
        flex: 1,
        margin: 10,
    },

    wrapperInput: {
        flex: 1,
        height: 150,
        margin: 10,
        // alignSelf: 'center',
        // justifyContent: "space-around",
        backgroundColor: 'yellow',
    },


});
