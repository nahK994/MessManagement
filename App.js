import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';
import Output from './components/output';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [electricityBill, setElectricityBill] = useState('');
  const [gasBill, setGasBill] = useState('');
  const [internetBill, setInternetBill] = useState('1000');
  const [khalaBill, setKhalaBill] = useState('2100');
  const [othersBill, setOthersBill] = useState('');
  const [khanRent, setKhanRent] = useState('5600');
  const [riajRent, setRiajRent] = useState('2875');
  const [rajRent, setRajRent] = useState('3025');
  const [khanMeal, setKhanMeal] = useState('');
  const [riajMeal, setRiajMeal] = useState('');
  const [rajMeal, setRajMeal] = useState('');
  const [khanBazar, setKhanBazar] = useState('');
  const [riajBazar, setRiajBazar] = useState('');
  const [rajBazar, setRajBazar] = useState('');

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Expense Calculator</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Utility Bills</Text>
        <TextInput
          value={electricityBill}
          onChangeText={(text) => setElectricityBill(text)}
          keyboardType='numeric'
          placeholder='Electricity Bill'
          style={styles.input}
        />
        <TextInput
          value={gasBill}
          onChangeText={(text) => setGasBill(text)}
          keyboardType='numeric'
          placeholder='Gas Bill'
          style={styles.input}
        />
        <TextInput
          value={internetBill}
          onChangeText={(text) => setInternetBill(text)}
          keyboardType='numeric'
          placeholder='Internet Bill'
          style={styles.input}
        />
        <TextInput
          value={khalaBill}
          onChangeText={(text) => setKhalaBill(text)}
          keyboardType='numeric'
          placeholder='Khala Bill'
          style={styles.input}
        />
        <TextInput
          value={othersBill}
          onChangeText={(text) => setOthersBill(text)}
          keyboardType='numeric'
          placeholder='Others'
          style={styles.input}
        />
      </View>

      <View style={styles.memberContainer}>
        <Text style={styles.label}>Members Expenses</Text>
        <View style={styles.memberRow}>
          <TextInput
            value={khanRent}
            onChangeText={(text) => setKhanRent(text)}
            keyboardType='numeric'
            placeholder="Khan's Rent"
            style={styles.memberInput}
          />
          <TextInput
            value={khanBazar}
            onChangeText={(text) => setKhanBazar(text)}
            keyboardType='numeric'
            placeholder="Khan's Bazar"
            style={styles.memberInput}
          />
          <TextInput
            value={khanMeal}
            onChangeText={(text) => setKhanMeal(text)}
            keyboardType='numeric'
            placeholder="Khan's Meal"
            style={styles.memberInput}
          />
        </View>

        <View style={styles.memberRow}>
          <TextInput
            value={rajRent}
            onChangeText={(text) => setRajRent(text)}
            keyboardType='numeric'
            placeholder="Raj's Rent"
            style={styles.memberInput}
          />
          <TextInput
            value={rajBazar}
            onChangeText={(text) => setRajBazar(text)}
            keyboardType='numeric'
            placeholder="Raj's Bazar"
            style={styles.memberInput}
          />
          <TextInput
            value={rajMeal}
            onChangeText={(text) => setRajMeal(text)}
            keyboardType='numeric'
            placeholder="Raj's Meal"
            style={styles.memberInput}
          />
        </View>

        <View style={styles.memberRow}>
          <TextInput
            value={riajRent}
            onChangeText={(text) => setRiajRent(text)}
            keyboardType='numeric'
            placeholder="Riaj's Rent"
            style={styles.memberInput}
          />
          <TextInput
            value={riajBazar}
            onChangeText={(text) => setRiajBazar(text)}
            keyboardType='numeric'
            placeholder="Riaj's Bazar"
            style={styles.memberInput}
          />
          <TextInput
            value={riajMeal}
            onChangeText={(text) => setRiajMeal(text)}
            keyboardType='numeric'
            placeholder="Riaj's Meal"
            style={styles.memberInput}
          />
        </View>
      </View>

      <Button title='Calculate' onPress={handleToggleModal} />

      <Output
        visibility={isOpen}
        setVisibility={setIsOpen}
        electricityBill={electricityBill}
        gasBill={gasBill}
        internetBill={internetBill}
        khalaBill={khalaBill}
        othersBill={othersBill}
        khanRent={khanRent}
        khanBazar={khanBazar}
        khanMeal={khanMeal}
        rajRent={rajRent}
        rajBazar={rajBazar}
        rajMeal={rajMeal}
        riajRent={riajRent}
        riajBazar={riajBazar}
        riajMeal={riajMeal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  memberContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderColor: 'steelblue',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  memberRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
  },
  memberInput: {
    borderColor: 'steelblue',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    flex: 1,
    marginRight: 10,
  },
});

