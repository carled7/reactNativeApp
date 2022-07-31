import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import HistItem from '../../components/HistItem';
//import BarChartSerie from '../../components/barChartSerie';
/**
 * <BarChartSerie text={'protein'} color={'#10C285'} height={'30%'}/>
          <BarChartSerie text={'calories'} color={'#F14570'} height={'50%'}/>
          <BarChartSerie text={'water'} color={'#0099DD'} height={'80%'}/>
 * 
 * 
 */
const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.h1}>Food Tracker</Text>
      <ScrollView style={styles.history} horizontal={true} >
        <HistItem text={'25 jun'} />
        <HistItem text={'27 jun'} />
        <HistItem text={'30 jun'} />
        <HistItem text={'25 jun'} />
        <HistItem text={'27 jun'} />
        <HistItem text={'30 jun'} />
        <HistItem text={'25 jun'} />
        <HistItem text={'27 jun'} />
        <HistItem text={'30 jun'} />
      </ScrollView>
      <View style={styles.activeTracking}>
        <View style={styles.header}>
          <Text style={styles.activeDay}>27 jun</Text>
          <Text style={styles.status}>tracking</Text>
        </View>
        <View style={styles.chart}>
          
        </View>
      </View>
      <TouchableOpacity style={styles.addBtn}>
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
  activeTracking: {
    backgroundColor: '#FFF',
    width: '90%',
    borderRadius: 8,
    marginHorizontal: 14,
    paddingTop: 28,
    paddingHorizontal: 26,
    flex: 1
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  chart:{
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
  addBtn:{
    width: '90%',
    backgroundColor: '#FFF',
    marginHorizontal: 14,
    marginTop: 40,
    borderRadius: 8,
    paddingVertical: 20,

  },
  txtBtn:{
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16
  }

});

export default Home();
