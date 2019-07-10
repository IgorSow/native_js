import React, {Component} from 'react';
// @ts-ignore
import {Alert, StyleSheet, Text, View} from 'react-native';

type Props = { meal: MealDto };
export default class FullMeal extends Component<Props, any> {

    constructor(props: Props, context: any) {
        super(props, context);
        this.state = {
            value: ''
        }
    }

    FlatListItemSeparator = () => {
        return (
            //Item Separator
            <View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}}/>
        );
    };

    GetItem(item: any) {
        //Function for click on an item
        Alert.alert(item);
    }

    render() {
        return (
            <View style={styles.wrapper}>

                <View style={styles.elements}>
                    <Text>{(this.props.meal.title)}</Text>
                </View>
                <View style={styles.elements}>
                    <Text>Rodzaj dania: {(this.props.meal.typeMeal[0].mealTime)}</Text>
                </View>
                <View style={styles.elements}>
                    <Text>Autor: {(this.props.meal.authorReceipt)}</Text>
                </View>
                {/*<View style={styles.title}> Skladniki :*/}
                {/*<FlatList*/}
                {/*data={this.props.meal.products}*/}
                {/*//data defined in constructor*/}
                {/*ItemSeparatorComponent={this.FlatListItemSeparator}*/}
                {/*//Item Separator View*/}
                {/*renderItem={({ item }) => (*/}
                {/*// Single Comes here which will be repeatative for the FlatListItems*/}
                {/*<View>*/}
                {/*<Text*/}
                {/*onPress={this.GetItem.bind(this, 'Name : '+item.name +' Unit : '+item.specialUnit)}>*/}
                {/*</Text>*/}
                {/*</View>*/}
                {/*)}*/}
                {/*/>*/}


                {/*</View>*/}
                {/*<View style={styles.title}> {(this.props.title)}</View>*/}
                {/*<View style={styles.title}> {(this.props.title)}</View>*/}
                {/*<View style={styles.title}> {(this.props.title)}</View>*/}

            </View>
        )
    }


    toCapitalise(value: String) {
        value = value.toLowerCase();
        let result;

        result = value.charAt(0).toUpperCase();

        result += value.slice(1);

        return result;
    }

}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
    },

    elements: {

    },

    left: {
        flex: 0.65,
        backgroundColor: 'purple',


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
