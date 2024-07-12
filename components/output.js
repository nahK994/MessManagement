import { View, TouchableOpacity, Text, StyleSheet, Modal, ScrollView } from 'react-native';
import OutputPerPerson from './output-per-person';
import { useEffect, useState } from 'react';

export default function Output(props) {
    const [memberInfo, setMemberInfo] = useState([]);
    const [mealRate, setMealRate] = useState(0);
    const [totalBazar, setTotalBazar] = useState(0);
    const [totalMeal, setTotalMeal] = useState(0);

    useEffect(() => {
        let totalBazar = 0;
        let totalMeal = 0;
        const members = props.memberInfo.map(member => {
            totalBazar += parseInt(member.bazar);
            totalMeal += parseInt(member.meal);
            return member;
        });

        setMemberInfo(members);
        setTotalBazar(totalBazar);
        setTotalMeal(totalMeal);

        const calculatedMealRate = totalMeal !== 0 ? parseFloat((totalBazar / totalMeal).toFixed(2)) : 0;
        setMealRate(calculatedMealRate);

        console.log("total bazar", totalBazar);
        console.log("total meal", totalMeal);
        console.log("meal rate", calculatedMealRate);
    }, [props.memberInfo]);

    const gasBillPerPerson = (props.gasBill / 3).toFixed(2);
    const electricityBillPerPerson = (props.electricityBill / 3).toFixed(2);
    const internetBillPerPerson = (props.internetBill / 3).toFixed(2);
    const khalaBillPerPerson = (props.khalaBill / 3).toFixed(2);
    const othersBillPerPerson = (props.othersBill / 3).toFixed(2);
    const totalUtilityCostPerson = parseFloat((parseFloat(gasBillPerPerson) + parseFloat(electricityBillPerPerson) + parseFloat(internetBillPerPerson) + parseFloat(khalaBillPerPerson) + parseFloat(othersBillPerPerson)).toFixed(2));

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

                    {memberInfo.map(member => (
                        <OutputPerPerson
                            key={member.name}
                            name={member.name}
                            bazar={member.bazar}
                            meal={member.meal}
                            rent={member.rent}
                            mealRate={mealRate}
                            totalUtilityCostPerson={totalUtilityCostPerson}
                        />
                    ))}

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
