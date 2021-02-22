import React from 'react'
import { View,Image,Text, StyleSheet } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import axios from 'axios'


export default function ExplorePost({id,title,desc, navigation}) {
    
    const [userData,setUserData] = React.useState({})

    function fetchData(){
        axios.get("https://reqres.in/api/users/"+id)
  .then(response => {

    setUserData(response.data.data);
  })
  .catch(error => {

    console.log(error);
  })
  

    }

    React.useEffect(()=>{
        fetchData()
    },[])
    
    return (
        <View>
        

        <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:10}}>
            
        <View style={{flexDirection:'row'}}>
        <TouchableWithoutFeedback onPress={()=> navigation.navigate('Profile', {UserId: id})}>
        {userData && <Image 
        style={styles.images}
        source={{uri:userData.avatar}}
        />  }
        </TouchableWithoutFeedback>
        {userData &&<View style={{marginLeft:10,justifyContent:'center'}}>
        <Text style={{fontWeight:'bold',fontSize:16}}>{userData.first_name + " " + userData.last_name}</Text>
        <Text style={{color:'grey'}}>20 Minutes ago</Text>
    
        
        </View>}
        
        </View>
    
        <View style={{justifyContent:'center'}}>
        
    <MaterialCommunityIcons name = "dots-horizontal" size={28} color="grey"></MaterialCommunityIcons>
        
        
        
        </View>
    
    </View>
    
    
    
    
    
    <View style={{flexDirection:'row',justifyContent:'space-around',marginBottom:30,paddingBottom:30,borderBottomColor:'lightgrey',borderBottomWidth:1}}>
    
    <View style={{flex:1}}>
    
    <View style={{justifyContent:'center',alignItems:'center'}}> 
        <MaterialCommunityIcons name = "dots-horizontal" size={28} color="grey"></MaterialCommunityIcons>
    
        <Text style={{color:'grey'}}>254</Text>
    </View>
    
    <View style={{justifyContent:'center',alignItems:'center', marginTop:15}}> 
        <MaterialCommunityIcons name = "heart-outline" size={28} style={{fontWeight:'normal'}} color="red"></MaterialCommunityIcons>
    
        <Text style={{color:'grey'}}>3456</Text>
    </View>
    
    </View>
    <View style={{flex:5,marginLeft:30}}>
    
    <View>
        <Text style={{fontSize:18,fontWeight:'100'}}>Interview: Shoe Designer John Fluevog On New Book, Spirituality And 'Slow Fashion'</Text>
    </View>                
    
    <View style={{marginTop:20}}> 
        <Image 
            style={{overflow:'hidden', height:200,resizeMode:'cover',borderRadius:5}}
            source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500) }}
            /> 
    </View>
    
    
    </View>
    
    </View>


        
        </View>
    )
}


const styles= StyleSheet.create({
    images:{
        height:50,
        width:50,
        borderRadius:50,
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
    }
})