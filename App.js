import { useEffect, useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import Output from './components/output';

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [electricityBill, setElectricityBill] = useState('')
  const [gasBill, setGasBill] = useState('')
  const [internetBill, setInternetBill] = useState('1000')
  const [othersBill, setOthersBill] = useState('')

  const [khanRent, setKhanRent] = useState('5600')
  const [riajRent, setRiajRent] = useState('2875')
  const [rajRent, setRajRent] = useState('3025')

  const [khanMeal, setKhanMeal] = useState('')
  const [riajMeal, setRiajMeal] = useState('')
  const [rajMeal, setRajMeal] = useState('')

  const [khanBazar, setKhanBazar] = useState('')
  const [riajBazar, setRiajBazar] = useState('')
  const [rajBazar, setRajBazar] = useState('')
  // useEffect(() => {
  //   setInternetBill(1000)
  // }, [internetBill]);

  return (
    <View style={styles.main}>
      <TextInput value={electricityBill} keyboardType='numeric' placeholder='Electricity bill' style={styles.billInput} />
      <TextInput value={gasBill} keyboardType='numeric' placeholder='Gas bill' style={styles.billInput} />
      <TextInput value={internetBill} keyboardType='numeric' placeholder='Internet bill' style={styles.billInput} />
      <TextInput value={othersBill} keyboardType='numeric' placeholder='Others..' style={styles.billInput} />

      <View style={styles.memberLayout}>
        <TextInput value={khanRent} keyboardType='numeric' placeholder="Khan's Rent" style={styles.memberInput} />
        <TextInput value={khanBazar} keyboardType='numeric' placeholder="Khan's Bazar" style={styles.memberInput} />
        <TextInput value={khanMeal} keyboardType='numeric' placeholder="Khan's Meal" style={styles.memberInput} />
      </View>

      <View style={styles.memberLayout}>
        <TextInput value={rajRent} keyboardType='numeric' placeholder="Raj's Rent" style={styles.memberInput} />
        <TextInput value={rajBazar} keyboardType='numeric' placeholder="Raj's Bazar" style={styles.memberInput} />
        <TextInput value={rajMeal} keyboardType='numeric' placeholder="Raj's Meal" style={styles.memberInput} />
      </View>

      <View style={styles.memberLayout}>
        <TextInput value={riajRent} keyboardType='numeric' placeholder="Riaj's Rent" style={styles.memberInput} />
        <TextInput value={riajBazar} keyboardType='numeric' placeholder="Riaj's Bazar" style={styles.memberInput} />
        <TextInput value={riajMeal} keyboardType='numeric' placeholder="Riaj's Meal" style={styles.memberInput} />
      </View>

      <Button title='Submit' style={styles.button} onPress={() => setIsOpen(!isOpen)} />

      <Output visibility={isOpen} setVisibility={setIsOpen} />
    </View>
  );
}

const styles = StyleSheet.create({
  'main': {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    rowGap: 12
  },
  'billInput': {
    borderColor: 'steelblue',
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    width: '100%'
  },

  'memberLayout': {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    columnGap: 8
  },

  'memberInput': {
    borderColor: 'steelblue',
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    flex: 1
  }
})