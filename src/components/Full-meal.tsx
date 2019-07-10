import React, {Component} from 'react';
// @ts-ignore
import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import FontService from "../services/FontService"

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
                    <Text style={styles.header}>{FontService.toCapitalise(this.props.meal.title)}</Text>
                </View>
                <View style={styles.elements}>
                    <Text style={styles.content}>Rodzaj dania: {(this.props.meal.typeMeal[0].mealTime)}</Text>
                </View>
                <View style={styles.elements}>
                    <Text style={styles.content}>Autor: {(this.props.meal.authorReceipt)}</Text>
                </View>
                <View style={styles.elements}>
                    <Text style={styles.content}>Czas przygotowania: {(this.props.meal.receiptDTO.prepareTime) + ' min'}</Text>
                </View>
                <View style={styles.elements}>
                    <Text style={styles.header}>
                        Skadniki:
                    </Text>
                    <FlatList
                        data={this.props.meal.products}
                        //data defined in constructor
                        ItemSeparatorComponent={this.FlatListItemSeparator}
                        //Item Separator View
                        renderItem={({item}) => (
                            // Single Comes here which will be repeatative for the FlatListItems
                            <View>
                                <Text style={styles.content}>
                                    {(item.name + '' + item.specialUnit)}
                                </Text>
                            </View>
                        )}
                    />
                </View>

                <View style={styles.elements}>
                    <Text style={styles.header}>
                        Sposób wykonania:
                    </Text>
                    <FlatList
                        data={this.props.meal.receiptDTO.steps}
                        //data defined in constructor
                        ItemSeparatorComponent={this.FlatListItemSeparator}
                        //Item Separator View
                        renderItem={({item}) => (
                            // Single Comes here which will be repeatative for the FlatListItems
                            <View>
                                <Text style={styles.content}>
                                    {(item.header)}
                                </Text>
                            </View>
                        )}
                    />
                </View>





                {/*<View style={styles.title}> {(this.props.title)}</View>*/}
                {/*<View style={styles.title}> {(this.props.title)}</View>*/}

            </View>
        )
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
        paddingLeft: 5,
    },

    header: {
        color: '#FF9210',
        fontSize: 15,
        fontWeight: 'bold',
    },
    content: {
        paddingLeft: 10,
    },


});
