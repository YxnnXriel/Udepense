import { View ,  StyleSheet} from "react-native"



export const Detail = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Text>Detail</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center'
    }
})