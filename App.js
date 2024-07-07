import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [text, setText] = useState('')
  const [enteredText, setEnteredText] = useState('')

  function onChangeText(newText) {
    setText(newText)
  }

  function onButtonPress() {
    setEnteredText([...enteredText, text])
    setText('')
  }

  return (
    <View style={style.main}>
      <View style={style.input}>
        <TextInput placeholder='Type here.....' style={style.textInput} onChangeText={onChangeText} value={text} />
        <Button title='Click' style={style.button} onPress={onButtonPress} />
      </View>
      <View style={style['text-alignment']}>
        {
          enteredText.map(item => <Text style={style.item}>{item}</Text>)
        }
      </View>
    </View>
  );
}

const style = StyleSheet.create({
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
  'text-alignment': {
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