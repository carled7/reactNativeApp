import { StyleSheet, Text, View} from 'react-native';
import { MotiView } from 'moti';

const HistItem = (props) => {
  return (
    <MotiView style={styles.container} from={{opacity: 0}} animate={{opacity: 1}}>
      <Text style={styles.txt}>{props.text}</Text>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container:{
    width: 58,
    height: 58,
    backgroundColor: '#FFFFFF',
    borderRadius: 29,
    borderColor: '#10C285',
    borderWidth: 3,
    alignSelf: 'center',
    alignItems: 'center',

    marginHorizontal: 6,
  },
  txt:{
    fontSize: 12,
    fontWeight: 'bold',
    maxWidth: 30,
    textAlign: 'center',
    marginTop: 10,
  }
  
});

export default HistItem;
