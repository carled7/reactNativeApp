import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


const BarChartSerie = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.navigate}>
      <View style={styles.barBg}>
        <View style={[styles.bar, {backgroundColor: props.color, height: props.height}]}/>
      </View>
      <Text style={styles.serieName}>{props.text}</Text>
    </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 80,
    marginHorizontal: 20,    
    marginBottom: 28,
    alignItems: 'center',
    width: 'auto',
    flex: 1,
  },
  barBg:{
    width: 40,
    height: '80%',    
    backgroundColor: '#f0f0f0',
    borderRadius: 2,
    marginBottom: 25,
  },
  serieName:{
    fontSize: 12,
    color: '#858585',
  },
  bar:{
    width: '100%',
    borderRadius: 2,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0,
    
    }
  
  
});

export default BarChartSerie;
