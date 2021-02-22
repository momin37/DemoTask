import React from 'react'
import { Text, View, StyleSheet,StatusBar, SafeAreaView, Image, Button, TouchableOpacity, ScrollView } from 'react-native'


import {MaterialCommunityIcons} from '@expo/vector-icons'
import axios from "axios"
import { useState } from 'react'


export default function Profile({route, navigation}) {

    const [userData,setUserData] = useState({})
    const userId =route.params.UserId

    function fetchData(){
        axios.get("https://reqres.in/api/users/"+userId)
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
        <SafeAreaView style={styles.container}>
        <ScrollView>
       {userData && <>
            <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center',height:70}}>
            <MaterialCommunityIcons onPress = {()=>navigation.goBack()} name = "chevron-left" size={28} color="grey"></MaterialCommunityIcons>

                <Text style={{fontSize:19,fontWeight:'bold'}}>Profile</Text>
    <MaterialCommunityIcons name = "dots-horizontal" size={28} color="grey"></MaterialCommunityIcons>

            </View>

            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',  }}>
            <Image 
            style={ styles.images }
            source={{uri:userData.avatar}}
            />
            
            </View>
            
            <View style={{justifyContent:'center',alignItems:'center',marginTop:22}}>
                <Text style={{fontSize:18}}>{userData.first_name} {userData.last_name}</Text>
            </View>

            <View style={{justifyContent:'center', alignItems:'center', }}>
                
                <Text style={{color:'grey'}}>Must go faster, must go faster. must go faster!</Text>
                <Text style={{color:'grey'}}>Go go go , must go faster. must go faster!</Text>
            
            </View>



        <View style={{marginTop:20,borderColor:'lightgrey',borderTopWidth:1,flexDirection:'row', borderBottomWidth:1, paddingBottom:20}}>
           
            <View style={{marginTop:15,justifyContent:'center',alignItems:'center',flex:1}}>
            <Text style={{fontSize:18,fontWeight:'700'}}>438</Text>
            <Text style={{color:'grey'}}>Posts</Text>
            </View>

            <View style={{marginTop:15,justifyContent:'center',alignItems:'center',flex:1}}>
            <Text style={{fontSize:18,fontWeight:'700'}}>298</Text>
            <Text style={{color:'grey'}}>Following</Text>
            </View>
            
            <View style={{marginTop:15,justifyContent:'center',alignItems:'center',flex:1}}>
            
            <Text style={{fontSize:18,fontWeight:'700'}}>321K</Text>
            <Text style={{color:'grey'}}>Followers</Text>
            
            </View>
        </View>

            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:15, marginBottom:15}}>
            
            
            <TouchableOpacity style={{
                width: "50%",
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#3489eb', 
                marginRight:12,
                flex:1,
                borderColor: '#3489eb',
                borderWidth: 1,
                borderRadius: 5,
                paddingVertical:10,
                height:50,
            }} >

                <Text style={{color:'white',fontSize:16}}>Follow</Text>
            </TouchableOpacity>
            

            <TouchableOpacity style={{
                width: "50%",
                marginLeft:12,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'transparent',
                flex:1,
                backgroundColor:'white',
                paddingVertical:5,
                borderColor: '#3489eb',
                borderWidth: 1,
                borderRadius: 5,
            }} >
                <Text style={{fontSize:16}}>Message</Text>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:7}}>
            <View style={{justifyContent:'center'}}>
            <Text style={{fontSize:18,fontWeight:'bold',}}>Photos</Text>
            </View>

            <View style={{flexDirection:'row'}}>
            <View style={{marginRight:5}}>
                <MaterialCommunityIcons name = "format-list-bulleted" size={26} color="lightgrey"></MaterialCommunityIcons>
            </View>

            <View style={{marginLeft:5}}>
                <MaterialCommunityIcons name = "view-grid-outline" size={26} color="lightgrey"></MaterialCommunityIcons>
            </View>
 
            </View>
            </View>


            <View  style={{marginTop:7,marginBottom:10, flexDirection:'row', justifyContent:'space-between'}}>
            
            
            <Image 
            style={ {width:90,height:90, borderRadius:10,resizeMode:'cover'} }
            source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500) }}
            />
            
                <Image 
                style={ {width:90,height:90, borderRadius:10,resizeMode:'cover'} }
                source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500) }}
                />

           
            
            <Image 
        style={ {width:90,height:90, borderRadius:10,resizeMode:'cover'} }
        source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500) }}
        />
       

            </View>




        <View  style={{flexDirection:'row', justifyContent:'space-between'}}>
            
            
        <Image 
        style={ {width:90,height:90, borderRadius:10,resizeMode:'cover'} }
        source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500) }}
        />
        
            <Image 
            style={ {width:90,height:90, borderRadius:10,resizeMode:'cover'} }
            source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500) }}
            />

       
        
        <Image 
    style={ {width:90,height:90, borderRadius:10,resizeMode:'cover'} }
    source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500) }}
    />
   

        </View>


        

        


        </>
          
        }
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#fff",
        paddingTop:Platform.OS ==="android"? StatusBar.currentHeight : 0,
        paddingHorizontal:25,

    },
    images:{
        resizeMode: 'cover',
        width:80,
        height:80,
        borderRadius:50,
        borderBottomRightRadius: 50,
        borderTopRightRadius: 50,
        borderWidth:1,
        borderColor: 'grey',




    },
});