import { useEffect, useState } from 'react';
import { View, Button, StyleSheet, Modal } from 'react-native';

export default function Output(props) {

    return <Modal visible={props.visibility} animationType='slide'>
        <View style={styles.main}>
          <Button title='Ok' onPress={() => props.setVisibility(false)} />
        </View>
    </Modal>
};

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        rowGap: 12
    }
})