import { Text , View , StyleSheet , FlatList, TouchableOpacity, SafeAreaView
} from "react-native";

import COLOR from "./colors";

import React from "react";
import {getDocs} from "firebase/firestore"
import { depenseCollection } from "../api/firebase_collection";


export const PrintListHome = () => {
    const [depense, SetDepense] = React.useState([])
    
    
    React.useEffect(()=>{
        const getDepense = async () => {
            const data = await getDocs(depenseCollection);
            SetDepense(
                data.docs.map((doc) => ({...doc.data(), id : doc.id}))
            )            
        }
        getDepense();
    })
        
   const renderItem  = ({item,index}) => {
       return (
           <View>
               <TouchableOpacity activeOpacity={.8}>
                   <View style={styles.base}>
                       <View>
                           <Text style={styles.name}> {item.designation} </Text>
                       </View>

                       <View>
                           <TouchableOpacity style={styles.button}>
                               <Text style={styles.btnText}>Voir Plus</Text>
                           </TouchableOpacity>
                       </View>
                   </View>
               </TouchableOpacity>
           </View>
       )
   }

   return (
       <SafeAreaView style = {styles.container}>
           <View style={styles.textContainer}>
               <Text style={styles.title}>Others</Text>
           </View>
           <FlatList  keyExtractor={(item) => item.id} data = {depense.slice(0,2)} renderItem = {renderItem} />
       </SafeAreaView>
   );

}


const styles = StyleSheet.create({
   base:{
       flex : 1,
       flexDirection: 'row',
       paddingVertical: 15,
       justifyContent: 'space-between',
       alignItems: "center",
       paddingHorizontal: 5,
       marginVertical:10,
       marginHorizontal:35,
   },
   name: {
       fontSize: 15,
       fontWeight: 'bold',
       color: COLOR.Black,
   },
   textContainer: {
        marginTop:25,
        marginBottom: 25,
   },
   title: {
       fontSize:18,
       fontWeight:'bold',
       color: COLOR.Black,
   },
   container:{
    flex:1,
      backgroundColor: "#fff",
   },
   button: {
       padding: 10,
       backgroundColor: COLOR.Pink,
       borderRadius: 25
   },
   btnText: {
       color: COLOR.Black
   },


})