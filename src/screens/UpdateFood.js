import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  Pressable,
  Animated,
} from "react-native";
import { StyleSheet } from "react-native";

import ListItem from "../../components/ListItem";
import foodList from "../usrData/foodList.json";
import { globalStyles } from "../styles/global";
import { ScrollView } from "moti";
import Flame from "../assets/flame.svg";
import Meat from "../assets/meat.svg";

export const UpdateFood = ({ navigation }) => {
  const [foodListVisible, setFoodListVisible] = useState(true);
  const [weightInputVisible, setweightInputVisible] = useState(false);
  const [food, setFood] = useState();
  const [weight, setweight] = useState();

  function toHome() {
    console.log("trying to navigate");
    navigation.navigate("Home");
  }

  const animatedProp = useRef(new Animated.Value(1)).current;

  const animateBtn = () => {
    Animated.timing(animatedProp, {
      toValue: "#fff",
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const items = [];

  const handleAddItem = () => {
    items.push({
      food,
      weight,
    });
  };
  return (
    <View style={globalStyles.container}>
      <Modal animationType="slide" transparent={true} visible={foodListVisible}>
        <View style={[globalStyles.elevation, styles.modalContainer]}>
          <ScrollView>
            {foodList.map((item, index) => {
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    setFood(item.name);
                    setFoodListVisible(false);
                    setweightInputVisible(true);
                  }}
                >
                  <ListItem
                    key={index}
                    name={item.name}
                    protein={item.protein}
                  ></ListItem>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={weightInputVisible}
      >
        <View style={[globalStyles.elevation, styles.modalContainer]}>
          <TextInput
            style={[globalStyles.txtInput]}
            placeholder="weight (g)"
            onChangeText={(weight) => setweight(weight)}
          />
          <TouchableOpacity
            onPress={() => {
              setweightInputVisible(false);
              handleAddItem();
              console.log(items);
            }}
            style={[styles.closeBtn, { backgroundColor: "#10c285" }]}
          >
            <Text style={[globalStyles.btnText]}>Done</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Text style={globalStyles.h1}>Update</Text>
      <View>
        <Text></Text>
      </View>
      <TouchableOpacity style={[styles.summaryBackground]}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={[styles.summaryItem]}>{food}</Text>
          <Text style={[styles.summaryItem, { fontWeight: '300' }]}>{weight}g</Text>
        </View>
        <View style={styles.divider} />
        <View style={{ flexDirection: "row" }}>
          <View style={[styles.propContainer, { backgroundColor: "#F14570" }]}>
            <Flame style={{ color: "#F0F0F0" }} width={28} height={28} />
            <Text style={{ color: "#F0F0F0", fontWeight: "600" }}>512kcal</Text>
          </View>

          <View style={[styles.propContainer, { backgroundColor: "#10C285" }]}>
            <Meat style={{ color: "#F0F0F0" , marginRight: 2}} width={28} height={28} />
            <Text style={{ color: "#F0F0F0", fontWeight: "600" }}>512kcal</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[globalStyles.btn, styles.updateBtn]}
        onPress={() => toHome()}
      >
        <Text style={globalStyles.btnText}>update</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  updateBtn: {
    backgroundColor: "#10c285",
    position: "absolute",
    bottom: 40,
    marginHorizontal: 35,
    width: "90%",
  },
  closeBtn: {
    width: "40%",
    paddingVertical: 10,
    alignSelf: "center",
    borderRadius: 5,
    position: "relative",
    bottom: -20,
  },
  summaryBackground: {
    backgroundColor: "#fbfbfb",
    borderRadius: 8,
    padding: 18,
  },
  summaryItem: {
    color: "#141414",
    fontWeight: "600",
    fontSize: 20,
  },
  divider: {
    height: 2,
    marginVertical: 10,
    width: "100%",
    backgroundColor: "#F0F0F0",
  },
  propContainer: {
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 7,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },
  modalContainer: {
    paddingHorizontal: 20,
    paddingVertical: 35,
    borderRadius: 8,
    margin: 20,
    marginTop: "20%",
    backgroundColor: "#fff",
    alignContent: "center",
    maxHeight: "80%",
  },
});
