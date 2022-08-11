import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Animated } from 'react-native';

import HistItem from '../../components/HistItem';
import BarChartSerie from '../../components/barChartSerie';

import { MotiText, MotiView } from "moti";

export const Home = ({ navigation }) => {

  const [date, setDate] = useState(getDate());

  const [protein, setProtein] = useState(1);
  const [calories, setCalories] = useState(1);
  const [water, setWater] = useState(1);

  const [histItems, setHistItems] = useState([]);

  const animatedProp = useRef(
    new Animated.Value(1)
  ).current;

  const fadeOut = () => {

    Animated.timing(animatedProp, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => fadeIn());

  };
  const fadeIn = () => {

    Animated.timing(animatedProp, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
    
  };

  function initTracking() {
    setHistItems([...histItems, date]);
    console.log('initTrack');
    setDate(`${getDate()}`);

    setProtein(1);
    setCalories(1);
    setWater(1);
    fadeOut();
  }

  function getDate() {
    const date = new Date().toString().slice(4, 10);

    return date;
  }

  function toUpdateFood() {
    navigation.navigate('UpdateFood');
  }

  function toUpdateWater() {
    navigation.navigate('UpdateWater');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.h1}>Food Tracker</Text>
      <ScrollView style={styles.history} horizontal={true} >
        {
          histItems.map((item, index) => {
            return (
              <HistItem key={index} text={item} />
            );
          })
        }
      </ScrollView>
      <Animated.View style={{
        backgroundColor: '#FFF',
        width: '90%',
        borderRadius: 8,
        marginHorizontal: 14,
        paddingTop: 28,
        paddingHorizontal: 26,
        flex: 1,
        opacity: animatedProp
      }}>
        <View style={styles.header}>
          <MotiText style={styles.activeDay} from={{ opacity: 0 }} animate={{ opacity: 1 }}>{date}</MotiText>
          <Text style={styles.status}>tracking</Text>
        </View>
        <View style={styles.chart}>
          <BarChartSerie text={'protein'} color={'#10C285'} height={`${protein}%`} navigate={toUpdateFood} />
          <BarChartSerie text={'calories'} color={'#F14570'} height={`${calories}%`} navigate={toUpdateFood} />
          <BarChartSerie text={'water'} color={'#0099DD'} height={`${water}%`} navigate={toUpdateWater} />
        </View>
      </Animated.View>
      <TouchableOpacity style={styles.addBtn} onPress={() => initTracking()}>
        <Text style={styles.txtBtn}>new tracking</Text>
      </TouchableOpacity>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 52,
    paddingBottom: 40,
    paddingHorizontal: 21,

  },
  h1: {
    color: '#2B3538',
    fontWeight: 'bold',
    fontSize: 24,
  },
  history: {
    paddingHorizontal: 6,
    marginVertical: 30,
    maxHeight: 72,
  },
  /*activeTracking: {
    backgroundColor: '#FFF',
    width: '90%',
    borderRadius: 8,
    marginHorizontal: 14,
    paddingTop: 28,
    paddingHorizontal: 26,
    flex: 1,
    opacity: {animatedProp}
  },*/
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  chart: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  activeDay: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  status: {
    color: '#858585',
    marginTop: 4,
  },
  addBtn: {
    width: '90%',
    backgroundColor: '#FFF',
    marginHorizontal: 14,
    marginTop: 40,
    borderRadius: 8,
    paddingVertical: 20,

  },
  txtBtn: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16
  }
})