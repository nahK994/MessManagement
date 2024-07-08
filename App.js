import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [text, setText] = useState('')
  const [enteredText, setEnteredText] = useState([])

  function onChangeText(newText) {
    setText(newText)
  }

  function onButtonPress() {
    setEnteredText([...enteredText, text])
    setText('')
  }

  function onDeleteHandler(item) {
    setEnteredText(enteredText.filter(i => i != item))
  }

  return (
    <View style={styles.main}>
      <View style={styles.input}>
        <TextInput placeholder='Type here.....' style={styles.textInput} onChangeText={onChangeText} value={text} />
        <Button title='Add' style={styles.button} onPress={onButtonPress} />
      </View>
      <View style={styles.textAlignment}>
        {
          enteredText.map((item, index) => <TouchableOpacity><Text onPress={() => onDeleteHandler(item)} key={index} style={styles.item}>{item}</Text></TouchableOpacity>)
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  'main': {
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
    rowGap: 12
  },
  'input': {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 12
  },
  'textInput': {
    borderColor: 'green',
    borderWidth: 1,
    flex: 2,
    borderRadius: 20,
    padding: 10
  },
  'button': {
    flex: 1
  },
  'textAlignment': {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap'
  },
  'item': {
    borderRadius: 12,
    backgroundColor: 'steelblue',
    padding: 6,
    color: 'white'
  }
})