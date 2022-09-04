import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { StyleSheet } from "react-native";

import { globalStyles } from "../styles/global";

export const UpdateFood = ({ navigation }) => {

    function toHome() {
        console.log('trying to navigate');
        navigation.navigate('Home');
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.h1} >Update</Text>
            <TouchableOpacity style={[globalStyles.btn, styles.foodBtn]}>
                <Text style={[globalStyles.btnText]}>food</Text>
            </TouchableOpacity>
            <TextInput style={[globalStyles.btn, styles.input]} placeholder='weight (g)' keyboardType="number-pad" />

            <TextInput style={[globalStyles.btn, styles.input, { marginTop: 30 }]} placeholder='water (ml)' keyboardType="number-pad" />

            <TouchableOpacity style={[globalStyles.btn, styles.addBtn]} onPress={() => toHome()}>
                <Text style={globalStyles.btnText} >add</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    addBtn: {
        backgroundColor: '#10c285',
        position: 'absolute',
        bottom: 40,
        marginHorizontal: 35,
        width: '90%'
    },
    foodBtn: {
        backgroundColor: '#F14570',
    },
    input: {
        backgroundColor: '#fff',
        paddingHorizontal: 15
    }
})