import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, TextInput, Modal, Pressable, Animated } from "react-native";
import { StyleSheet } from "react-native";

import ListItem from "../../components/ListItem";
import foodList from "../usrData/foodList.json";
import { globalStyles } from "../styles/global";
import { ScrollView } from "moti";

export const UpdateFood = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [food, setFood] = useState("food");

    function toHome() {
        console.log('trying to navigate');
        navigation.navigate('Home');
    }

    const animatedProp = useRef(
        new Animated.Value(1)
      ).current;

    const animateBtn = () => {

        Animated.timing(animatedProp, {
          toValue: '#fff',
          duration: 150,
          useNativeDriver: true,
        }).start();
        
      };

    return (
        <View style={globalStyles.container}>

            <Modal animationType="slide" transparent={true} visible={modalVisible} >
                <View style={[globalStyles.elevation, styles.modalContainer]}>
                    <ScrollView >
                        {
                            foodList.map((item, index) =>{
                                return (
                                    <Pressable key={index} onPress={() => {setFood(item.name); setModalVisible(false)}}>
                                    <ListItem key={index} name={item.name} protein={item.protein}></ListItem>
                                    </Pressable>
                                )
                            })
                        }
                    </ScrollView>
                    <TouchableOpacity onPress={() => setModalVisible(false)} style={[styles.closeBtn]}><Text style={[globalStyles.btnText]}>close</Text></TouchableOpacity>
                </View>

            </Modal>

            <Text style={globalStyles.h1}>Update</Text>

            <TouchableOpacity style={[globalStyles.btn, styles.foodBtn]} onPress={() => { setModalVisible(true)}}>
                <Text style={[globalStyles.btnText]}>{food}</Text>
            </TouchableOpacity>

            <TextInput style={[globalStyles.btn, styles.input]} placeholder='weight (g)' keyboardType="number-pad" />

            <TextInput style={[globalStyles.btn, styles.input, { marginTop: 30 }]} placeholder='water (ml)' keyboardType="number-pad" />


            <TouchableOpacity style={[globalStyles.btn, styles.addBtn]} onPress={() => toHome()}>
                <Text style={globalStyles.btnText} >add</Text>
            </TouchableOpacity>

        </View >
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
    closeBtn: {
        backgroundColor: '#F14570',
        width: '40%',
        paddingVertical: 10,
        alignSelf: 'center',
        borderRadius: 5,
        position: 'relative',
        bottom: -20
    },
    foodBtn: {
        backgroundColor: '#F14570',
    },
    input: {
        backgroundColor: '#fff',
        paddingHorizontal: 15
    },
    modalContainer: {
        paddingHorizontal: 20,
        paddingVertical: 35,
        borderRadius: 8,
        margin: 20,
        marginTop: '40%',
        backgroundColor: '#fff',
        alignContent: "center",
        maxHeight: '50%',
    },
})