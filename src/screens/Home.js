import React, { useRef, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Animated, Modal, TextInput, Pressable } from 'react-native';

import HistItem from '../../components/HistItem';
import BarChartSerie from '../../components/barChartSerie';
import { globalStyles } from "../styles/global";

import Settings from '../assets/settings.svg'
import Flame from '../assets/flame.svg';
import Bottle from '../assets/bottle.svg';
import Meat from '../assets/meat.svg';
import Close from '../assets/x.svg';

export const Home = ({ navigation }) => {

  const [modalVisible, setModalVisible] = useState(false);

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
    <View style={globalStyles.container}>

      <StatusBar style="auto" />

      <View style={styles.header}>

        <Text style={globalStyles.h1}>Food Tracker</Text>

        <TouchableOpacity style={styles.configBtn} onPress={() => setModalVisible(true)}>
          <Settings style={styles.configIcon} width={40} height={40} />
        </TouchableOpacity>

      </View>


      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={[globalStyles.elevation, styles.modalContainer]}>

          <View style={styles.statsContainer}>
            <Flame style={[styles.statsIcon, { color: '#f14570' }]} width={30} height={30} />
            <Text style={styles.statsTxt}>daily calories</Text>
            <TextInput style={[globalStyles.btn, styles.txtInput]} placeholder='512kcal' />
          </View>

          <View style={styles.statsContainer}>
            <Meat style={[styles.statsIcon, { color: '#10c285' }]} width={30} height={30} />
            <Text style={styles.statsTxt}>daily protein</Text>
            <TextInput style={[globalStyles.btn, styles.txtInput]} placeholder='150g' />
          </View>

          <View style={styles.statsContainer}>
            <Bottle style={[styles.statsIcon, { color: '#0099DD' }]} width={30} height={30} />
            <Text style={styles.statsTxt}>daily water</Text>
            <TextInput style={[globalStyles.btn, styles.txtInput]} placeholder='3000ml' />
          </View>

          <Pressable style={[globalStyles.btn, styles.btnBg]}><Text style={[globalStyles.btnText, styles.btnText]}>edit food list</Text></Pressable>

          <Pressable style={styles.closeBg} onPress={() => setModalVisible(false)}>
            <Close style={{ color: '#fff', marginLeft: 0 }} width={20} height={20}/>
          </Pressable>
        </View>
      </Modal>


      <ScrollView style={styles.history} horizontal={true}>
        {
          histItems.map((item, index) => {
            return (
              <HistItem key={index} text={item} />
            );
          })
        }
      </ScrollView>

      <Animated.View style={[{ opacity: animatedProp }, styles.activeTracking]}>
        <View style={styles.header}>
          <Text style={styles.activeDay} from={{ opacity: 0 }} animate={{ opacity: 1 }}>{date}</Text>
          <Text style={styles.status}>tracking</Text>
        </View>
        <View style={styles.chart}>
          <BarChartSerie text={'protein'} color={'#10C285'} height={`${protein}%`} navigate={toUpdateFood} icon={'meat'} />
          <BarChartSerie text={'calories'} color={'#F14570'} height={`${calories}%`} navigate={toUpdateFood} icon={'flame'} />
          <BarChartSerie text={'water'} color={'#0099DD'} height={`${water}%`} navigate={toUpdateWater} icon={'bottle'} />
        </View>
      </Animated.View>
      <TouchableOpacity style={[globalStyles.btn, styles.addBtn]} onPress={() => initTracking()}>
        <Text style={[globalStyles.btnText, styles.btnText]}>new tracking</Text>
      </TouchableOpacity>
    </View>


  );
}

const styles = StyleSheet.create({

  history: {
    paddingHorizontal: 6,
    marginVertical: 30,
    maxHeight: 72,
  },
  activeTracking: {
    backgroundColor: '#FFF',
    width: '90%',
    borderRadius: 8,
    marginHorizontal: 14,
    paddingTop: 28,
    paddingHorizontal: 26,
    flex: 1,
    alignSelf: 'center'
  },
  modalContainer: {
    backgroundColor: '#fbfbfb',
    width: 300,
    height: 410,
    alignSelf: 'center',
    marginTop: '40%',
    borderRadius: 8,
    paddingVertical: 20,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  configBtn: {
    backgroundColor: '#fbfbfb',
    width: 50,
    height: 50,
    borderRadius: 4,
    marginTop: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  configIcon: {
    color: '#858585',
  },
  closeBg: {
    backgroundColor: '#f14570',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 5,
    borderRadius: 20
  },
  chart: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  activeDay: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  statsIcon: {
    marginLeft: 18
  },
  statsTxt: {
    marginTop: 10,
    fontSize: 14,
  },
  status: {
    color: '#858585',
    marginTop: 4,
  },
  addBtn: {
    backgroundColor: '#FFF',
    marginTop: 40,
  },
  btnText: {
    color: '#141414'
  },
  btnBg: {
    marginTop: 10,
    backgroundColor: '#f0f0f0'
  },
  txtInput: {
    width: '83%',
    marginLeft: 25,
    textAlign: 'right',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#f0f0f0'
  }
})