import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { FlatList } from 'react-native-web';
import Bottle from '../src/assets/bottle.svg';
import Flame from '../src/assets/flame.svg';
import Meat from '../src/assets/meat.svg';

const BarChartSerie = (props) => {

  const whichIcon = () => {
    switch (props.icon) {
      case 'bottle':
        return (
          <Bottle width={35} height={35} style={styles.icon} />
        )
      case 'flame':
        return (
          <Flame width={35} height={35} style={styles.icon} />
        )
      case 'meat':
        return (
          <Meat width={35} height={35} style={styles.icon} />
        )
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={props.navigate}>
      <View style={styles.barBg}>
        <View style={[styles.bar, { backgroundColor: props.color, height: props.height }]} />
      </View>
      <View style={[styles.iconBg, { backgroundColor: props.color }]}>
        {
          whichIcon()
        }
      </View>
      <Text style={styles.serieName}>{props.text}</Text>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({

  barBg: {
    width: 40,
    height: '60%',
    backgroundColor: '#f0f0f0',
    borderRadius: 2,
    marginBottom: 8,
  },
  container: {
    marginTop: 40,
    marginHorizontal: 20,
    marginBottom: 28,
    alignItems: 'center',
    width: 'auto',
    flex: 1,
  },
  icon: {
    color: '#f0f0f0',
  },
  serieName: {
    fontSize: 12,
    color: '#858585',
  },
  bar: {
    width: '100%',
    borderRadius: 2,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0,

  },
  iconBg: {
    height: 45,
    width: 40,
    borderRadius: 4,
    marginBottom: 25,
    alignItems: 'center',
    justifyContent: 'center'
  }


});

export default BarChartSerie;
