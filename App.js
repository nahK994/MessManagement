import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Output from './components/output';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [electricityBill, setElectricityBill] = useState('');
  const [gasBill, setGasBill] = useState('');
  const [internetBill, setInternetBill] = useState('1000');
  const [khalaBill, setKhalaBill] = useState('2100');
  const [othersBill, setOthersBill] = useState('');

  const [memberInfo, setMemberInfo] = useState([
    {
      'name': 'Khan',
      'rent': 5600,
      'meal': 0,
      'bazar': 0
    },
    {
      'name': 'Raj',
      'rent': 3025,
      'meal': 0,
      'bazar': 0
    },
    {
      'name': 'Riaj',
      'rent': 2875,
      'meal': 0,
      'bazar': 0
    }
  ])

  const setRent = (member, rent) => {
    setMemberInfo(
      memberInfo.map(item => {
        if (item.name === member.name) {
          return {
            ...item,
            'rent': parseFloat(rent) || 0
          };
        }
        return item;
      })
    )
  }

  const setBazar = (member, bazar) => {
    setMemberInfo(
      memberInfo.map(item => {
        if (item.name === member.name) {
          return {
            ...item,
            'bazar': parseFloat(bazar) || 0
          };
        }
        return item;
      })
    )
  }

  const setMeal = (member, meal) => {
    setMemberInfo(
      memberInfo.map(item => {
        if (item.name === member.name) {
          return {
            ...item,
            'meal': parseFloat(meal) || 0
          };
        }
        return item;
      })
    )
  }

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} // Adjust the offset if necessary
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
          {
            memberInfo.map(item =>
              <View style={styles.memberRow} key={item.name}>
                <TextInput
                  value={item.rent.toString()}
                  onChangeText={(text) => setRent(item, text)}
                  keyboardType='numeric'
                  placeholder={item.name + "'s Rent"}
                  style={styles.memberInput}
                />
                <TextInput
                  value={item.bazar.toString()}
                  onChangeText={(text) => setBazar(item, text)}
                  keyboardType='numeric'
                  placeholder={item.name + "'s Bazar"}
                  style={styles.memberInput}
                />
                <TextInput
                  value={item.meal.toString()}
                  onChangeText={(text) => setMeal(item, text)}
                  keyboardType='numeric'
                  placeholder={item.name + "'s Meal"}
                  style={styles.memberInput}
                />
              </View>
            )
          }
        </View>

        <TouchableOpacity style={styles.button} onPress={handleToggleModal}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>

        <Output
          visibility={isOpen}
          setVisibility={setIsOpen}
          electricityBill={electricityBill}
          gasBill={gasBill}
          internetBill={internetBill}
          khalaBill={khalaBill}
          othersBill={othersBill}
          memberInfo={memberInfo}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 32
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
    backgroundColor: 'white'
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
    backgroundColor: 'white'
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
