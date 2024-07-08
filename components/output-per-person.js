import { View, Text, StyleSheet } from 'react-native';

export default function OutputPerPerson(props) {
    var mealCost = (props.mealRate * props.meal).toFixed(2);
    var mealBalance = (mealCost - parseInt(props.bazar)).toFixed(2);

    return (
        <View style={styles.card}>
            <Text style={styles.headerText}>{props.name}</Text>
            <View style={styles.row}>
                <Text style={styles.label}>Rent:</Text>
                <Text style={styles.value}>{props.rent}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Bazar:</Text>
                <Text style={styles.value}>{props.bazar}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Meal:</Text>
                <Text style={styles.value}>{props.meal}</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.labelColumn}>
                    <Text>Meal cost:</Text>
                    <Text style={styles.smallText}>(Meal x Meal_Rate)</Text>
                </View>
                <Text style={styles.value}>{mealCost}</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.labelColumn}>
                    <Text>Meal balance:</Text>
                    <Text style={styles.smallText}>(Meal cost - bazar)</Text>
                </View>
                <Text style={styles.value}>{mealBalance}</Text>
            </View>

            <View style={styles.separator} />
            <View style={styles.row}>
                <View style={styles.labelColumn}>
                    <Text style={styles.totalLabel}>Total:</Text>
                    <Text style={styles.smallText}>(Rent+Utility+Meal balance)</Text>
                </View>
                <Text style={styles.totalValue}>{(parseFloat(props.rent) + parseInt(props.totalUtilityCostPerson) + parseFloat(mealBalance)).toFixed(2)}</Text>
            </View>
        </View>
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
        color: '#555',
    },
    labelColumn: {
        flexDirection: 'column',
    },
    value: {
        fontSize: 16,
        color: '#555',
        fontWeight: 'bold'
    },
    smallText: {
        fontSize: 10,
        color: '#555',
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
    }
});
