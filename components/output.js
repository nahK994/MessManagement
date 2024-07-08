import { View, TouchableOpacity, Text, StyleSheet, Modal, ScrollView } from 'react-native';
import OutputPerPerson from './output-per-person';

export default function Output(props) {
    var gasBillPerPerson = (props.gasBill / 3).toFixed(2);
    var electricityBillPerPerson = (props.electricityBill / 3).toFixed(2);
    var internetBillPerPerson = (props.internetBill / 3).toFixed(2);
    var khalaBillPerPerson = (props.khalaBill / 3).toFixed(2);
    var othersBillPerPerson = (props.othersBill / 3).toFixed(2);
    var totalUtilityCostPerson = parseFloat((parseFloat(gasBillPerPerson) + parseFloat(electricityBillPerPerson) + parseFloat(internetBillPerPerson) + parseFloat(khalaBillPerPerson) + parseFloat(othersBillPerPerson)).toFixed(2));

    var totalMeal = parseInt(props.khanMeal) + parseInt(props.rajMeal) + parseInt(props.riajMeal);
    var totalBazar = parseInt(props.khanBazar) + parseInt(props.rajBazar) + parseInt(props.riajBazar);
    var mealRate = parseFloat((totalBazar / totalMeal).toFixed(2));

    return (
        <Modal visible={props.visibility} animationType='slide'>
            <ScrollView contentContainerStyle={styles.scrollContent}>
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
                            <Text style={styles.label}>Khala bill:</Text>
                            <Text style={styles.value}>{khalaBillPerPerson}</Text>
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
                            <Text style={styles.totalValue}>{mealRate}</Text>
                        </View>
                    </View>

                    <OutputPerPerson
                        name="Khan"
                        bazar={props.khanBazar}
                        meal={props.khanMeal}
                        rent={props.khanRent}
                        mealRate={mealRate}
                        totalUtilityCostPerson={totalUtilityCostPerson}
                    />

                    <OutputPerPerson
                        name="Raj"
                        bazar={props.rajBazar}
                        meal={props.rajMeal}
                        rent={props.rajRent}
                        mealRate={mealRate}
                        totalUtilityCostPerson={totalUtilityCostPerson}
                    />

                    <OutputPerPerson
                        name="Riaj"
                        bazar={props.riajBazar}
                        meal={props.riajMeal}
                        rent={props.riajRent}
                        mealRate={mealRate}
                        totalUtilityCostPerson={totalUtilityCostPerson}
                    />

                    <TouchableOpacity style={styles.button} onPress={() => props.setVisibility(false)}>
                        <Text style={styles.buttonText}>Ok</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    scrollContent: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10,
        backgroundColor: '#e3f2fd'
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        minWidth: '90%',
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
