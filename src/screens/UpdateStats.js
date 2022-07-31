import { StyleSheet, Text, View} from 'react-native';


const UpdateStats = () => {
  return (
    <View style={styles.container}>
      <Text>Hello, world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  }
});

export default UpdateStats();
