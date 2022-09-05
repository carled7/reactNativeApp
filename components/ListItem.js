import { StyleSheet, Text, View} from "react-native";


import { globalStyles } from "../src/styles/global";

export default ListItem = (props) => {
    return(
        <View style={[globalStyles.btn, styles.container]}>
            <Text style={styles.txt}>{props.name}</Text>
            <Text style={styles.txtAside}>{props.protein.toFixed(2)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    txt:{
        color: '#858585',
        fontSize: 14
    },
    txtAside:{
        color: '#858585',
        fontSize: 12,
    }
})