import { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native';

export default function Output(props) {
    var gasBillPerPerson = (props.gasBill / 3).toFixed(2);
    var electricityBillPerPerson = (props.electricityBill / 3).toFixed(2);
    var internetBillPerPerson = (props.internetBill / 3).toFixed(2);
    var othersBillPerPerson = (props.othersBill / 3).toFixed(2);
    var totalUtilityCostPerson = parseFloat(electricityBillPerPerson) + parseFloat(gasBillPerPerson) + parseFloat(internetBillPerPerson) + parseFloat(othersBillPerPerson);

    var totalMeal = parseInt(props.khanMeal) + parseInt(props.rajMeal) + parseInt(props.riajMeal);
    var totalBazar = parseInt(props.khanBazar) + parseInt(props.rajBazar) + parseInt(props.riajBazar);

    return (
        <Modal visible={props.visibility} animationType='slide'>
            <View style={styles.main}>
                <View style={styles.card}>
                    <Text style={styles.headerText}>Utility cost (Per person)</Text>
                    <View style={styles.row}>
                        <Text style={styles.label}>Electricity bill:</Text>
                        <Text style={styles.value}>{electricityBillPerPerson}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Gas bill:</Text>
                        <Text style={styles.value}>{gasBillPerPerson}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Internet bill:</Text>
                        <Text style={styles.value}>{internetBillPerPerson}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Others cost:</Text>
                        <Text style={styles.value}>{othersBillPerPerson}</Text>
                    </View>
                    <View style={styles.separator} />
                    <View style={styles.row}>
                        <Text style={styles.totalLabel}>TOTAL:</Text>
                        <Text style={styles.totalValue}>{totalUtilityCostPerson}</Text>
                    </View>
                </View>
                
                <View style={styles.card}>
                    <Text style={styles.headerText}>Meal</Text>
                    <View style={styles.row}>
                        <Text style={styles.label}>Total Bazar:</Text>
                        <Text style={styles.value}>{totalBazar}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Total Meal:</Text>
                        <Text style={styles.value}>{totalMeal}</Text>
                    </View>
                    <View style={styles.separator} />
                    <View style={styles.row}>
                        <Text style={styles.totalLabel}>Meal RATE:</Text>
                        <Text style={styles.totalValue}>{(totalBazar / totalMeal).toFixed(2)}</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => props.setVisibility(false)}>
                    <Text style={styles.buttonText}>Ok</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e3f2fd',
        padding: 20
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        width: '90%',
        elevation: 3, // For shadow on Android
        shadowColor: '#000', // For shadow on iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#1e88e5',
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    label: {
        fontSize: 16,
        color: '#555'
    },
    value: {
        fontSize: 16,
        color: '#555',
        fontWeight: 'bold'
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1e88e5'
    },
    totalValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1e88e5'
    },
    separator: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        marginVertical: 10
    },
    button: {
        backgroundColor: '#43a047',
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 25,
        elevation: 5, // For shadow on Android
        shadowColor: '#000', // For shadow on iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        marginTop: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
