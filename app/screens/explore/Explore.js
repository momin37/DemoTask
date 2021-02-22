import React,{useState} from 'react'
import { StyleSheet, Text, View,StatusBar, FlatList } from 'react-native'

import {MaterialCommunityIcons} from '@expo/vector-icons'

import axios from "axios"
import ExplorePost from '../../components/ExplorePost'


export default function Explore({navigation}) {
    const [postData, setPostData] = useState(null)
    

    function fetchData(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(response => {

    setPostData(response.data);

    console.log(postData)

  })
  .catch(error => {

    console.log(error);
  })

    }

    React.useEffect(()=>{
        fetchData()
    },[])

    

   
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row',paddingHorizontal:15,
            justifyContent:'space-between',alignItems:'center'
            ,height:50, borderColor:'lightgrey',
            marginHorizontal:-15,borderBottomWidth:1
            ,marginBottom:30,}}> 
            
                <MaterialCommunityIcons name = "chevron-left" size={28} color="grey"></MaterialCommunityIcons>
                
                <Text style={{fontSize:20,fontWeight:'bold'}}>
                    Explore
                </Text>

                <MaterialCommunityIcons name = "magnify" size={28} color="grey"></MaterialCommunityIcons>
            </View> 



            {postData && <FlatList
                data={postData}
                keyExtractor={ item=>String(item.id).toString() }
                renderItem={({item})=>(
                    <ExplorePost navigation = {navigation} id={item.userId} title={item.title} desc={item.body}  />)
                }
            />}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:15,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight+3 : 0,


    },
})


